import { State, useStore } from "@/lib/store";
import { ScheduleResult } from "@/lib/types";

export default function BackFourthStepSchedule(state: State): ScheduleResult {

    state.setLinguisticTerms({"": []})

    return {success: true, message: 'Etapa retornada com sucesso!'}
}