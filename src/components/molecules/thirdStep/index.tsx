"use client"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import FuzzyNumberInput from "@/components/atoms/fuzzy-number-input";
import { useStore } from "@/lib/store";

export default function ThirdStep() {
  const store = useStore((state) => state);

  const {setLinguisticTerms, linguisticTerms} = store

  const [items, setItems] = useState(
  Object.keys(linguisticTerms).map((term: string) => ({
      label: term,
      value: linguisticTerms[term],
    }))
  );

  const [type, setType] = useState<"triangular" | "trapezoidal">("triangular");


  const handleAddTerm = () => {
    const defaultValue = type === "triangular" ? [0, 0, 0] : [0, 0, 0, 0];
    setItems([...items, { label: `Termo ${items.length + 1}`, value: defaultValue }]);
  };

  const handleUpdateLabel = (index: number, newLabel: string) => {
    const updatedItems = [...items];
    updatedItems[index].label = newLabel;
    setItems(updatedItems);
  };

  const handleToggleType = () => {
    const newType = type === "triangular" ? "trapezoidal" : "triangular";
    const updatedItems = items.map((item) => ({
      ...item,
      value: newType === "triangular" ? [0, 0, 0] : [0, 0, 0, 0],
    }));
    
    setType(newType);
    setItems(updatedItems);
    
    updateLinguisticTermsState()
  };

  const updateLinguisticTermsState = () => {
    const newLinguisticTerms: {[key: string]: number[]} = {}
    
    items.forEach(({label, value}) => newLinguisticTerms[label] = value)
    setLinguisticTerms(newLinguisticTerms)
  }

  useEffect(() => {
    updateLinguisticTermsState()
  }, [items])

  return (
    <div className="flex flex-col flex-wrap gap-6 w-full">
      <Card className="p-4 w-full min-w-96 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Termos Linguísticos</h2>
        <CardContent>
          <div className="flex justify-between mb-4">
            <Button variant="outline" onClick={handleToggleType}>
              {type === "triangular" ? "Trapezoidal" : "Triangular"}
            </Button>
          </div>
          <ul className="space-y-4">
            {items.map(({ label, value }, index) => (
              <li
                key={index}
                className="flex flex-col gap-2 bg-gray-100 p-4 rounded-lg"
              >
                <input
                  type="text"
                  value={label}
                  onChange={(e) => handleUpdateLabel(index, e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 w-full"
                  placeholder="Nome do termo"
                />
                <FuzzyNumberInput
                  type={type}
                  value={value}
                />
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4">
            <Button variant="outline" onClick={handleAddTerm}>
              Adicionar Termo
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
