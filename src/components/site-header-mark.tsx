"use client";

import { m, useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { RafifMark } from "@/components/rafif-mark";

export function SiteHeaderMark() {
  const pathname = usePathname();
  return pathname === "/" ? <RafifMarkMotion /> : <RafifMark />;
}

function RafifMarkMotion() {
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
    <m.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 170 170"
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
        d="M160 160H10V10H110C137.614 10 160 32.3858 160 60C160 87.6142 137.614 110 110 110H160V160ZM67 45C58.7157 45 52 51.7157 52 60C52 68.2843 58.7157 75 67 75H102C110.284 75 117 68.2843 117 60C117 51.7157 110.284 45 102 45H67Z"
        fill="#F55636"
      />
    </m.svg>
  );
}

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};
