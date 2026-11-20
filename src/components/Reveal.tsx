import type { ReactNode, ElementType } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Kept for API compatibility; stagger now comes from each element's own scroll position. */
  delay?: number;
  as?: ElementType;
};

/** Wraps content in an element that fades/slides in as it scrolls into view (CSS scroll-driven animation). */
export default function Reveal({ children, className = "", as: Tag = "div" }: Props) {
  return <Tag className={`reveal ${className}`}>{children}</Tag>;
}
