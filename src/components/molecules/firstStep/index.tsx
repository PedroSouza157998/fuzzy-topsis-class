"use client"
import StringArrayManager from "@/components/atoms/register-array";
import { useStore } from "@/lib/store";

export default function FirstStep() {
  const store = useStore((state) => state)

  return (
      <div className="flex flex-wrap gap-6 w-full">

        <StringArrayManager title="Classes" items={store.class} setItems={store.setClass} />
        <StringArrayManager title="Critérios" items={store.criteria} setItems={store.setCriteria} />
        <StringArrayManager title="Alternativas" items={store.alternatives} setItems={store.setAlternatives} />
      </div>
  )
}
