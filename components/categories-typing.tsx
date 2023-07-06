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
        "text-orange text-[28px] leading-full text-gray-900 after:-mx-2 after:opacity-50 block md:inline-block"
      }
      repeat={Infinity}
    />
  );
}
