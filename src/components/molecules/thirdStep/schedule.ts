import { State } from "@/lib/store";
import { ScheduleResult } from "@/lib/types";

export default function ThirdStepSchedule(state: State): ScheduleResult {
    if (state.alternatives.length < 2) return { success: false, message: 'Campo "Alternativas" precisa posuir ao menos 2 elementos.' }
    if (state.class.length < 2) return { success: false, message: 'Campo "Classes" precisa posuir ao menos 2 elementos.' }
    if (state.criteria.length < 1) return { success: false, message: 'Campo "Critérios" precisa posuir ao menos 1 elemento.' }

    const {alternatives, criteria, class: classes, setPerformanceMatrix, setReferenceProfile} = state

    let performanceMatrix: {[key: string]: string[]} = {}

    alternatives.forEach((alternative) => performanceMatrix[alternative] = criteria.map(() => ""))

    setPerformanceMatrix(performanceMatrix)

    let referenceProfile: {[key: string]: string[]} = {}

    classes.forEach((value) => referenceProfile[value] = criteria.map(() => ""))

    setReferenceProfile(referenceProfile)

    console.log(referenceProfile)

    return { success: true, message: 'Campos carregados com sucesso!' }
}