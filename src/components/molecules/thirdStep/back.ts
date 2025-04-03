import { State, useStore } from "@/lib/store";
import { ScheduleResult } from "@/lib/types";

export default function BackThridStepSchedule(state: State): ScheduleResult {

    state.setCriteriasType({})

    return {success: true, message: 'Etapa retornada com sucesso!'}
}