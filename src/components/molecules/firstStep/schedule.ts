import { State, useStore } from "@/lib/store";
import { ScheduleResult } from "@/lib/types";

export default function FirstStepSchedule(state: State): ScheduleResult {
    console.log(state)
    if(state.alternatives.length < 2) return {success: false, message: 'Campo "Alternativas" precisa posuir ao menos 2 elementos.'}
    if(state.class.length < 2) return {success: false, message: 'Campo "Classes" precisa posuir ao menos 2 elementos.'}
    if(state.criteria.length < 1) return {success: false, message: 'Campo "Critérios" precisa posuir ao menos 1 elemento.'}
    return {success: true, message: 'Campos carregados com sucesso!'}
}