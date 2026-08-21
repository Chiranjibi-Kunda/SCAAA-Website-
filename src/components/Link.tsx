import type { ReactNode } from "react";
import { navigateTo } from "../App";

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Link({ href, children, className, onClick }: LinkProps) {
  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        if (href.startsWith("/")) {
          event.preventDefault();
          navigateTo(href);
          onClick?.();
        }
      }}
    >
      {children}
    </a>
  );
}
