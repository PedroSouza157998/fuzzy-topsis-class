"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

export default function FuzzyNumberInput({ type, value }: { 
    type: 'triangular' | 'trapezoidal';
    value: number[];
}) {

    const [values, setValues] = useState(value);

    const handleChange = (index: number, value: string) => {
        const newValue = parseFloat(value);
        if (!isNaN(newValue) && newValue >= 0 && newValue <= 1) {
            setValues((prev) => prev.map((v, i) => (i === index ? newValue : v)));
        }
    };

    useEffect(() => {
        setValues(value)
    }, [value])

    return (
        <div className="flex gap-2">
            {values.map((value, index) => (
                <Input
                    key={index}
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                    value={value}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="w-full"
                />
            ))}
        </div>
    );
}