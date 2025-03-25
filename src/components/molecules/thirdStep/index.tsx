"use client"
import LinguisticTerms from "@/components/atoms/linguistic-terms";
import { useStore } from "@/lib/store";
import { useEffect, useState } from "react";

export default function ThirdStep() {
  const store = useStore((state) => state)

  useEffect(() => {
    console.log(store.linguisticTerms)
  }, [store.linguisticTerms])
  return (
      <div className="flex flex-wrap gap-6 w-full">

        <LinguisticTerms title="Termos Linguísticos" items={store.linguisticTerms} setItems={store.setLinguisticTerms} />
        {/* <StringArrayManager title="Critérios" items={store.criteria} setItems={store.setCriteria} />
        <StringArrayManager title="Alternativas" items={store.alternatives} setItems={store.setAlternatives} /> */}
      </div>
  )
}
