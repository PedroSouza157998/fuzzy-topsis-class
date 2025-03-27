"use client"
import FirstStep from "@/components/molecules/firstStep";
import FirstStepSchedule from "@/components/molecules/firstStep/schedule";
import SecondStep from "@/components/molecules/secondStep";
import SecondStepSchedule from "@/components/molecules/secondStep/schedule";
import ThirdStep from "@/components/molecules/thirdStep";
import ThirdStepSchedule from "@/components/molecules/thirdStep/schedule";
import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/store";
import { ScheduleResult } from "@/lib/types";
import { useMemo, useState } from "react";
import { toast } from 'react-toastify';


export default function Home() {
  const store = useStore((state) => state)

  const [step, setStep] = useState(0)
  
  const handleNextStep = (func: () => ScheduleResult) => {
    const result = func()

    if (result.success) {
      setStep(step + 1)
      toast.success(result.message)
    } else {
      toast.error(result.message)
    }
  }

  const stepsSort = [
    {schedule: FirstStepSchedule, component: <FirstStep/>},
    {schedule: SecondStepSchedule, component: <SecondStep/>},
    {schedule: ThirdStepSchedule, component: <ThirdStep/>},
  ]

  const Component = useMemo(() => {
    if(stepsSort[step]) return stepsSort[step].component
    else return <></>
  }, [step])

  const Schedule = useMemo(() => {
    if(stepsSort[step]) return stepsSort[step].schedule
  }, [step])


  return (
    <div className="flex flex-col gap-6 items-end p-12">
      {Component}
      <Button onClick={() => Schedule && handleNextStep(() => Schedule(store))}>Próximo</Button>
    </div>
  )
}
