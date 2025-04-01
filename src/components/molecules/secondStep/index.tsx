"use client"
import KeyValueManager from "@/components/atoms/register-key-value";
import { useStore } from "@/lib/store";
import { useEffect, useState } from "react";

export default function SecondStep() {
  const {criteriasType} = useStore((state) => state)

  const [criteriaTypes, setCriteriaTypes] = useState(
    Object.keys(criteriasType).map((criteria) => ( {key: criteria, value: criteriasType[criteria]} ))
)

  return (
      <div className="flex flex-wrap gap-6 w-full">

        <KeyValueManager title="Tipo dos critérios" items={criteriaTypes} setItems={setCriteriaTypes} />
        {/* <StringArrayManager title="Critérios" items={store.criteria} setItems={store.setCriteria} />
        <StringArrayManager title="Alternativas" items={store.alternatives} setItems={store.setAlternatives} /> */}
      </div>
  )
}
