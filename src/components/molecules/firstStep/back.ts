import { State, useStore } from "@/lib/store";
import { ScheduleResult } from "@/lib/types";
import StringArrayManager from "@/components/atoms/register-array";

export default function BackFirstStepSchedule(state: State): ScheduleResult {

    console.log(state.class)
    console.log(state.alternatives)
    console.log(state.criteria)

    const defaultCriteriasType: {[key: string]: 'min' | 'max'} = {}
    state.criteria.forEach((value) => {
        defaultCriteriasType[value] = 'max'
    })
    state.setCriteriasType(defaultCriteriasType)

    state.setClass([""])
    state.setAlternatives([""])
    state.setCriteria([""])

    return {success: true, message: 'Etapa retornada com sucesso!'}
}