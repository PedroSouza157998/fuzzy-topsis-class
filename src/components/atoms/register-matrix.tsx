"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface FuzzyValue {
  key: string;
  values: number[][];
}

interface LinguisticTerm {
  [key: string]: number[];
}

interface Props {
  title: string;
  items: FuzzyValue[];
  setItems: (value: FuzzyValue[]) => void;
  linguisticTerms: LinguisticTerm[];
}

export default function RegisterMatrix({ title, items, setItems, linguisticTerms }: Props) {
  const [values, setValues] = useState<{ [key: string]: number[][] }>(
    Object.fromEntries(items.map(({ key, values }) => [key, values]))
  );

  const updateValue = (key: string, termKey: string) => {
    const termValues = linguisticTerms.find(term => term[termKey]);
    if (termValues) {
      console.log(values)
      setItems((prev: FuzzyValue[]) => prev.map((item: FuzzyValue) => (item.key === key ? { ...item, values: termValues[termKey] } : item)));
      // setValues((prev) => ({ ...prev, [key]: [termValues[termKey]] }));
    }
  };

  return (
    <Card className="p-4 w-full min-w-96 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <CardContent>
        <ul className="space-y-2">
          {items.map(({ key }) => (
            <li
              key={key}
              className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
            >
              <span className="font-bold">{key}:</span>
              <Select onValueChange={(value) => updateValue(key, value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Escolha um termo" />
                </SelectTrigger>
                <SelectContent>
                  {linguisticTerms.map((term, index) => (
                    Object.keys(term).map(termKey => (
                      <SelectItem key={index + termKey} value={termKey}>{termKey}</SelectItem>
                    ))
                  ))}
                </SelectContent>
              </Select>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
