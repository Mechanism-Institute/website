import * as React from "react";
import { SVGProps } from "react";

const File = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="21"
    viewBox="0 0 16 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.5 3C0.5 1.63281 1.59375 0.5 3 0.5H9.25V5.5C9.25 6.20312 9.79688 6.75 10.5 6.75H15.5V18C15.5 19.4062 14.3672 20.5 13 20.5H3C1.59375 20.5 0.5 19.4062 0.5 18V3ZM15.5 5.5H10.5V0.5L15.5 5.5Z"
      fill="currentColor"
    />
  </svg>
);
export default File;
