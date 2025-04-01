import { State, useStore } from "@/lib/store";
import { ScheduleResult } from "@/lib/types";

export default function FirstStepSchedule(state: State): ScheduleResult {

    if(state.alternatives.length < 1) return {success: false, message: 'Campo "Alternativas" precisa posuir ao menos 1 elementos.'}
    if(state.class.length < 1) return {success: false, message: 'Campo "Classes" precisa posuir ao menos 1 elementos.'}
    if(state.criteria.length < 1) return {success: false, message: 'Campo "Critérios" precisa posuir ao menos 1 elemento.'}

    const defaultCriteriasType: {[key: string]: 'min' | 'max'} = {}
    state.criteria.forEach((value) => {
        defaultCriteriasType[value] = 'max'
    })
    state.setCriteriasType(defaultCriteriasType)

    return {success: true, message: 'Campos carregados com sucesso!'}
}