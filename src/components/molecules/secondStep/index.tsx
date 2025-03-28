"use client"
import StringArrayManager from "@/components/atoms/register-array";
import KeyValueManager from "@/components/atoms/register-key-value";
import { useStore } from "@/lib/store";
import { useEffect, useState } from "react";

export default function SecondStep() {
  const store = useStore((state) => state)

  const [criteriaTypes, setCriteriaTypes] = useState(
    store.criteria.map((criteria) => ( {key: criteria, value: ""} ))
)

  useEffect(() => {
    console.log(criteriaTypes)
  }, [criteriaTypes])
  return (
      <div className="flex flex-wrap gap-6 w-full">

        <KeyValueManager title="Tipo dos critérios" items={criteriaTypes} setItems={setCriteriaTypes} />
        {/* <StringArrayManager title="Critérios" items={store.criteria} setItems={store.setCriteria} />
        <StringArrayManager title="Alternativas" items={store.alternatives} setItems={store.setAlternatives} /> */}
      </div>
  )
}
