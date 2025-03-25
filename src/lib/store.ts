import { create } from "zustand";

export type State = {
    class: string[];
    setClass: (props: string[]) => void;
    criteria: string[];
    setCriteria: (props: string[]) => void;
    alternatives: string[];
    setAlternatives: (props: string[]) => void;
}

export const useStore = create<State>((set) => ({
    class: [],
    setClass: (props) => set({ class: props }),
    criteria: [],
    setCriteria: (props) => set({ criteria: props }),
    alternatives: [],
    setAlternatives: (props) => set({ alternatives: props })
})
)