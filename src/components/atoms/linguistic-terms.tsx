"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";

interface Props {
    title: string;
    items: { [key: string]: [number, number, number] }[];
    setItems: (value: { [key: string]: [number, number, number] }[]) => void;
}

export default function StringArrayManager({
    title,
    items,
    setItems
}: Props) {
    const [inputValue, setInputValue] = useState("");

    const addItem = () => {
        if (inputValue.trim() !== "") {
            setItems([...items, { [inputValue.trim()]: [0, 0, 0] }]);
            setInputValue("");
        }
    };

    const removeItem = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const setFuzzyValue = (index: number, fuzzyIndex: number, value: number) => {
        const newItems = [...items]

        Object.values(newItems[index])[0][fuzzyIndex] = Number(value)
        setItems(newItems)
    }

    return (
        <Card className="p-4 w-full min-w-96 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div className="flex gap-2 mb-4">
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Digite um termo linguístico"
                />
                <Button onClick={addItem}>Adicionar</Button>
            </div>
            <CardContent>
                <ul className="space-y-2">
                    {items.map((item, index) => (
                        <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
                            <span>{Object.keys(item)[0]}</span>
                            <div className="flex gap-4">
                                <div className="flex gap-2">{Object.values(item)[0].map((_, fuzzy_index) => {
                                    return <input
                                    onChange={(e) => setFuzzyValue(index, fuzzy_index, Number(e.target.value))} 
                                    type="number" 
                                    step={0.1} 
                                    className="border rounded-md border-[#A9A9A9] pl-2 w-12" />
                                })}</div>

                                <Button variant="ghost" size="icon" onClick={() => removeItem(index)}>
                                    <Trash2 className="w-4 h-4 text-red-500" />
                                </Button>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
