import * as React from "react";
import { SVGProps } from "react";

const X = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    {...props}
  >
    <path d="M13.8 11.1L21.2 2.5H19.3L13.1 9.9L8.1 2.5H2.5L10 13.5L2.2 22.5H4.1L10.8 14.7L16 22.5H21.6L13.8 11.1zM11.7 13.5L10.8 12.2L4.9 3.5H7.1L11.9 10.7L12.8 12L19 21.5H16.8L11.7 13.5z" />
  </svg>
);

export default X;