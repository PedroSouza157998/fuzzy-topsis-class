import { create } from "zustand";

export type State = {
    class: string[];
    setClass: (props: string[]) => void;
    criteria: string[];
    setCriteria: (props: string[]) => void;
    alternatives: string[];
    setAlternatives: (props: string[]) => void;
    linguisticTerms: { [key: string]: number[] }[];
    setLinguisticTerms: (props: { [key: string]: number[] }[]) => void;
}

export const useStore = create<State>((set) => ({
    class: ["baixo_risco", "medio_risco", "alto_risco"],
    setClass: (props) => set({ class: props }),
    criteria: ["C1", "C2", "C3"],
    setCriteria: (props) => set({ criteria: props }),
    alternatives: ["A1", "A2", "A3"],
    setAlternatives: (props) => set({ alternatives: props }),
    linguisticTerms: [],
    setLinguisticTerms: (props) => set({ linguisticTerms: props })
})
)