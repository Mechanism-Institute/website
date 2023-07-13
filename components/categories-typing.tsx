"use client";

import { TypeAnimation } from "react-type-animation";

export default function CategoriesTyping() {
  return (
    <TypeAnimation
      sequence={[
        "airdrops",
        2000,
        "curation",
        2000,
        "utility",
        2000,
        "ownership",
        2000,
        "engagement",
        2000,
        "security",
        2000,
        "anything",
        2000,
      ]}
      wrapper="span"
      speed={{ type: "keyStrokeDelayInMs", value: 100 }}
      className={
        "leading-full -ml-1 -mr-2 text-gray-900 after:text-gray-900 after:-ml-1 after:opacity-80 inline-block"
      }
      repeat={Infinity}
    />
  );
}
