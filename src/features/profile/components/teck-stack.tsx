import Image from "next/image";
import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <div className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((item) => {
            return (
              <SimpleTooltip key={item.key} content={item.title}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.title}
                >
                  {item.theme && item.darkImage ? (
                    <>
                      <Image
                        src={item.image}
                        alt={`${item.title} light icon`}
                        width={32}
                        height={32}
                        className="block dark:hidden"
                        unoptimized
                      />
                      <Image
                        src={item.darkImage}
                        alt={`${item.title} dark icon`}
                        width={32}
                        height={32}
                        className="hidden dark:block"
                        unoptimized
                      />
                    </>
                  ) : (
                    <Image
                      src={item.image}
                      alt={`${item.title} icon`}
                      width={32}
                      height={32}
                      unoptimized
                    />
                  )}
                </a>
              </SimpleTooltip>
            );
          })}
        </div>
      </PanelContent>
    </Panel>
  );
}
