"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useStore } from "@/lib/store";

export default function FourthStep() {
  const {alternatives, linguisticTerms, criteria, performanceMatrix, setPerformanceMatrix} = useStore((state) => state);


  const handleDropdownChange = (criterionIndex: number, alternativeIndex: number, value: string) => {
    const alternative = alternatives[alternativeIndex]

    let newRow = performanceMatrix[alternative]

    newRow[criterionIndex] = value

    const newValue = {
      [alternative]: newRow,
      ...performanceMatrix
    }

    setPerformanceMatrix(newValue)
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Critérios / Alternativas</th>
              {alternatives.map((alternative: string, index: number) => (
                <th key={index} className="border border-gray-300 px-4 py-2">
                  {alternative}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {criteria.map((criterion: string, criterionIndex: number) => (
              <tr key={criterionIndex}>
                <td className="border border-gray-300 px-4 py-2">{criterion}</td>
                {alternatives.map((_, alternativeIndex: number) => (
                  <td key={alternativeIndex} className="border border-gray-300 px-4 py-2">
                    <Select
                      onValueChange={(value: string) => handleDropdownChange(criterionIndex, alternativeIndex, value)}
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
