import { create } from "zustand";

export type State = {
    class: string[];
    setClass: (props: string[]) => void;
    criteria: string[];
    setCriteria: (props: string[]) => void;
    alternatives: string[];
    setAlternatives: (props: string[]) => void;
    linguisticTerms: { [key: string]: number[] };
    setLinguisticTerms: (props: { [key: string]: number[] }) => void;
    linguisticTermsWeights: { [key: string]: number[] };
    setLinguisticTermsWeights: (props: { [key: string]: number[] }) => void;
    criteriasType: {[key: string]: 'min' | 'max'};
    setCriteriasType: (props: {[key: string]: 'min' | 'max'}) => void;
    performanceMatrix: {[key: string]: string[]};
    setPerformanceMatrix: (props: {[key: string]: string[]}) => void;
    referenceProfile: {[key: string]: string[]};
    setReferenceProfile: (props: {[key: string]: string[]}) => void;
    criteriaWeights: {criterion: string, weight: string}[], 
    setCriteriaWeights: (props: {criterion: string, weight: string}[]) => void;
}

export const useStore = create<State>((set) => ({
    class: ["baixo_risco", "medio_risco", "alto_risco"],
    setClass: (props) => set({ class: props }),
    criteria: ["C1", "C2", "C3"],
    setCriteria: (props) => set({ criteria: props }),
    criteriasType: {},
    setCriteriasType: (props) => set({ criteriasType: props }),
    alternatives: ["A1", "A2", "A3"],
    setAlternatives: (props) => set({ alternatives: props }),
    linguisticTerms: {"muito_bom": [0.7, 0.8, 0.9], "bom": [0.6, 0.7, 0.8], "mediano": [0.5, 0.6, 0.7], "ruim": [0.4, 0.5, 0.6], "muito_ruim": [0.2, 0.3, 0.4]},
    setLinguisticTerms: (props) => set({ linguisticTerms: props }),
    linguisticTermsWeights: {"muito_bom": [0.7, 0.8, 0.9], "bom": [0.6, 0.7, 0.8], "mediano": [0.5, 0.6, 0.7], "ruim": [0.4, 0.5, 0.6], "muito_ruim": [0.2, 0.3, 0.4]},
    setLinguisticTermsWeights: (props) => set({ linguisticTermsWeights: props }),
    performanceMatrix: {},
    setPerformanceMatrix: (props: {[key: string]: string[]}) => set({ performanceMatrix: props }),
    referenceProfile: {},
    setReferenceProfile: (props: {[key: string]: string[]}) => set({ referenceProfile: props }),
    criteriaWeights: [], 
    setCriteriaWeights: (props: {criterion: string, weight: string}[]) => set({ criteriaWeights: props })
})
)