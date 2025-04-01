"use client"
import { useStore } from "@/lib/store";
import { useEffect } from "react";

export default function FifthStep() {
  const store = useStore((state) => state);

  const {linguisticTerms} = store

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
              <th className="border border-gray-300 px-4 py-2">Critérios / Clases</th>
              {store.class.map((alternative: string, index: number) => (
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
                {store.class.map((_, alternativeIndex: number) => (
                  <td key={alternativeIndex} className="border border-gray-300 px-4 py-2">
                    <select
                      className="border border-gray-300 rounded px-2 py-1"
                      onChange={(e) =>
                        handleDropdownChange(criterionIndex, alternativeIndex, e.target.value)
                      }
                    >
                      <option value="">Selecione</option>
                      {Object.keys(linguisticTerms).map((term: string, termIndex: number) => (
                        <option key={termIndex} value={term}>
                          {term}
                        </option>
                      ))}
                    </select>
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
