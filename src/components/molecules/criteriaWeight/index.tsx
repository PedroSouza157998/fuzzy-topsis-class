"use client"
import { useStore } from "@/lib/store";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function CriteriaWeightsSelector() {
    const { linguisticTermsWeights, criteria, criteriaWeights, setCriteriaWeights } = useStore((state) => state);

    useEffect(() => {
        setCriteriaWeights(criteria.map((criterion) => ({
            criterion,
            weight: "",
        })))
    }, [])

    const handleWeightChange = (criterion: string, newWeight: string) => {
        const updatedWeights = criteriaWeights.map((item) =>
            item.criterion === criterion ? { ...item, weight: newWeight } : item
        );
        setCriteriaWeights(updatedWeights);
    };

    return (
        <Card className="p-4 w-full min-w-96 max-w-md mx-auto">
            <div className="flex flex-col gap-6 w-full">
                <h2 className="text-xl font-bold">Selecione os Pesos para os Critérios</h2>
                <ul className="space-y-4">
                    {criteriaWeights.map(({ criterion, weight }, index) => (
                        <li key={index} className="flex items-center gap-4">
                            <span className="font-medium">{criterion}</span>
                            <Select onValueChange={(value: 'min' | 'max') => handleWeightChange(criterion, value)} value={weight}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Object.keys(linguisticTermsWeights).map((key) => (
                                        <SelectItem key={key} value={key}>
                                            {key}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
}