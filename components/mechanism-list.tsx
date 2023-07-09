"use client";

import useMechanismQuery from "@/hooks/use-mechanism-query";

export default function MechanismList() {
  const { data: mechanism } = useMechanismQuery();
  console.log({ mechanism });
  return <></>;
}
