"use client"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import FuzzyNumberInput from "@/components/atoms/fuzzy-number-input";

export default function ThirdStep() {

  const [fuzzyType, setFuzzyType] = useState<'triangular' | 'trapezoidal'>('triangular');

  const [items, setItems] = useState([
    { label: 'MB', value: [0, 0, 0] },
    { label: 'Médio', value: [0, 0, 0] },
    { label: 'Grande', value: [0, 0, 0] },
  ])

  useEffect(() => {
    console.log(items)
  }, [items])

  useEffect(() => {
    const newItems = items.map((item) => ({
      ...item,
      value: fuzzyType === 'triangular' ? [0, 0, 0] : [0, 0, 0, 0],
    }))
    setItems(newItems)
  }, [fuzzyType])

  return (
    <div className="flex flex-col flex-wrap gap-6 w-full">

      <div>
        <h2 className="text-xl text-center font-bold mb-4">Tipo de números fuzzy</h2>
        <div className="flex m-auto justify-center gap-4 mb-4">
          <Button
            variant={fuzzyType === 'triangular' ? 'default' : 'outline'}
            onClick={() => setFuzzyType('triangular')}
          >
            Triangular
          </Button>
          <Button
            variant={fuzzyType === 'trapezoidal' ? 'default' : 'outline'}
            onClick={() => setFuzzyType('trapezoidal')}
          >
            Trapezoidal
          </Button>
        </div>
      </div>

      <Card className="p-4 w-full min-w-96 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Termos linguísticos</h2>
      <CardContent>
        <ul className="space-y-2">
          {items.map(({ label, value }) => (
            <li
              key={label}
              className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
            >
              <span className="font-bold">{label}:</span>
              <FuzzyNumberInput type={fuzzyType} value={value} />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
    </div>
  )
}
