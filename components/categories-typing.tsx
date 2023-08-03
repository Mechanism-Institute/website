"use client";

import { TypeAnimation } from "react-type-animation";

export default function CategoriesTyping() {
  return (
    <TypeAnimation
      sequence={[
        "curation",
        1500,
        "utility",
        1500,
        "ownership",
        1500,
        "engagement",
        1500,
        "sustainability",
        1500,
        "impact",
        1500,
        "security",
        1500,
        "retention",
        1500,
        "diplomacy",
        1500,
      ]}
      wrapper="span"
      speed={{ type: "keyStrokeDelayInMs", value: 80 }}
      className={
        "leading-full -ml-1 -mr-2 text-gray-900 after:text-gray-900 after:-ml-1 after:opacity-80 inline-block"
      }
      repeat={Infinity}
    />
  );
}
