"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";

interface Props {
  title: string;
  items: string[];
  setItems: (value: string[]) => void;
}

export default function StringArrayManager({
  title,
  items,
  setItems
}: Props) {
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <Card className="p-4 w-full min-w-96 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="flex gap-2 mb-4">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite uma string"
        />
        <Button onClick={addItem}>Adicionar</Button>
      </div>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
              <span>{item}</span>
              <Button variant="ghost" size="icon" onClick={() => removeItem(index)}>
                <Trash2 className="w-4 h-4 text-red-500" />
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
