import type { SVGProps } from "react";

export const EikoniaLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 140 25"
    width="140"
    height="25"
    {...props}
  >
    <text
      x="0"
      y="20"
      className="font-headline"
      fontSize="24"
      fill="currentColor"
    >
      Eikonia
    </text>
  </svg>
);
