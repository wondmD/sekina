import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

type P = SVGProps<SVGSVGElement>;

export const IconCattle = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 5c0 2 1.5 3 3 3M20 5c0 2-1.5 3-3 3" />
    <path d="M7 8h10l-1 6c-.3 2-2 4-4 4s-3.7-2-4-4L7 8Z" />
    <path d="M10 15.5h.01M14 15.5h.01M10 11v.5M14 11v.5" />
    <path d="M7 9 4 10M17 9l3 1" />
  </svg>
);

export const IconMeat = (p: P) => (
  <svg {...base} {...p}>
    <path d="M15.5 3.5c3 1.5 5 4.5 4.5 8-.6 4.4-4.9 8-9.6 8.5-3.4.4-6.4-1.7-6.9-4.6-.6-3.5 2.4-5.4 4.4-7.5 2.1-2.2 4.6-5.7 7.6-4.4Z" />
    <path d="M9 13c1.5-2.5 4-4 6.5-4" />
    <circle cx="14.5" cy="13.5" r="1.5" />
  </svg>
);

export const IconTrade = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3Z" />
  </svg>
);

export const IconFactory = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 21V11l5 3V11l5 3V11l5 3V5h3v16H3Z" />
    <path d="M7 18h2M12 18h2M17 18h1" />
  </svg>
);

export const IconShip = (p: P) => (
  <svg {...base} {...p}>
    <rect x="7" y="5" width="3" height="3" />
    <rect x="11" y="5" width="3" height="3" />
    <rect x="15" y="5" width="3" height="3" />
    <path d="M3 10h18l-3 6H6l-3-6Z" />
    <path d="M3 20c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0 3 1 4.5 0" />
  </svg>
);

export const IconDollar = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 2v20M17 6.5C16 5 14.2 4.5 12 4.5c-2.8 0-4.5 1.4-4.5 3.4 0 4.8 9.5 2.6 9.5 7.7 0 2.1-2 3.9-5 3.9-2.4 0-4.2-.8-5.3-2.4" />
  </svg>
);

export const IconBank = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 9 12 3l9 6H3Z" />
    <path d="M5 9v8M9.5 9v8M14.5 9v8M19 9v8M3 20h18" />
  </svg>
);

export const IconGrowth = (p: P) => (
  <svg {...base} {...p}>
    <rect x="4" y="14" width="3" height="6" />
    <rect x="10.5" y="10" width="3" height="10" />
    <rect x="17" y="6" width="3" height="14" />
    <path d="M3 12 9 7l4 3 7-7M16 3h4v4" />
  </svg>
);

export const IconSearch = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-4-4" />
  </svg>
);

export const IconShield = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z" />
    <path d="m8.5 12 2.5 2.5 4.5-5" />
  </svg>
);

export const IconDoc = (p: P) => (
  <svg {...base} {...p}>
    <path d="M14 3H6v18h12V7l-4-4Z" />
    <path d="M14 3v4h4M9 12h6M9 16h4" />
  </svg>
);

export const IconPlane = (p: P) => (
  <svg {...base} {...p}>
    <path d="M21 15.5 13.5 11V5a1.5 1.5 0 0 0-3 0v6L3 15.5v2l7.5-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5l-2-1.5v-4l7.5 2.5v-2Z" />
  </svg>
);

export const IconHandshake = (p: P) => (
  <svg {...base} {...p}>
    <path d="m11 17 2 2a1.4 1.4 0 0 0 2-2M14 14l2.5 2.5a1.4 1.4 0 0 0 2-2l-3.8-3.8a2 2 0 0 0-2.8 0l-.9.9a1.4 1.4 0 0 1-2-2l2.8-2.8a3.5 3.5 0 0 1 4.3-.5l.5.3a2 2 0 0 0 1.4.3L21 6" />
    <path d="m21 3 1 11h-2M3 3 2 14l6.5 6.5a1.4 1.4 0 0 0 2-2M3 4h8" />
  </svg>
);

export const IconMail = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const IconPhone = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
);

export const IconPin = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export const IconArrow = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
