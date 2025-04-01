"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useStore } from "@/lib/store";
import { useEffect } from "react";

export default function FourthStep() {
  const store = useStore((state) => state);

  const { linguisticTerms } = store

  useEffect(() => {
    console.log("Linguistic Terms:", linguisticTerms);
  }, [linguisticTerms]);

  const handleDropdownChange = (criterionIndex: number, alternativeIndex: number, value: string) => {
    console.log(`Criterion ${criterionIndex}, Alternative ${alternativeIndex}, Selected: ${value}`);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Critérios / Alternativas</th>
              {store.alternatives.map((alternative: string, index: number) => (
                <th key={index} className="border border-gray-300 px-4 py-2">
                  {alternative}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {store.criteria.map((criterion: string, criterionIndex: number) => (
              <tr key={criterionIndex}>
                <td className="border border-gray-300 px-4 py-2">{criterion}</td>
                {store.alternatives.map((_, alternativeIndex: number) => (
                  <td key={alternativeIndex} className="border border-gray-300 px-4 py-2">
                    <Select
                      onValueChange={(value: string) => handleDropdownChange(criterionIndex, alternativeIndex, value)}
                    // onChange={(e) => handleDropdownChange(criterionIndex, alternativeIndex, e.target.value)}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(linguisticTerms).map((term: string, termIndex: number) => (
                          <SelectItem key={termIndex} value={term}>
                            {term}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
