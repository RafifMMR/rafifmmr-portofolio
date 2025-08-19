"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import * as motion from "motion/react-m";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ChanhDaiMark } from "./chanhdai-mark";

export function SiteHeaderMark() {
  const pathname = usePathname();
  return pathname === "/" ? <ChanhDaiMarkMotion /> : <ChanhDaiMark />;
}

function ChanhDaiMarkMotion() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const distanceRef = useRef(160);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    // <motion.svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 512 256"
    //   initial={{
    //     opacity: 0,
    //     transform: "translateY(8px)",
    //   }}
    //   animate={{
    //     opacity: visible ? 1 : 0,
    //     transform: visible ? "translateY(0px)" : "translateY(8px)",
    //   }}
    //   transition={{ duration: 0.3 }}
    // >
    //   <path
    //     d="M192 256H64v-64h128v64ZM448 64H320v128h128v64H256V0h192v64ZM64 192H0V64h64v128ZM512 192h-64V64h64v128ZM192 64H64V0h128v64Z"
    //     fill="currentColor"
    //   />
    // </motion.svg>

    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      
      viewBox="0 0 150 150"
      fill="none"
      initial={{
        opacity: 0,
        transform: "translateY(8px)",
      }}
      animate={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(8px)",
      }}
      transition={{ duration: 0.3 }}
    >
      <path
        d="M100 0C127.614 0 150 22.3858 150 50C150 77.6142 127.614 100 100 100H0V0H100ZM57 35C48.7157 35 42 41.7157 42 50C42 58.2843 48.7157 65 57 65H92C100.284 65 107 58.2843 107 50C107 41.7157 100.284 35 92 35H57Z"
        fill="#F9F7F3"
      />
      <path d="M0 100H150V150H0V100Z" fill="#F9F7F3" />
    </motion.svg>
  );
}

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};
