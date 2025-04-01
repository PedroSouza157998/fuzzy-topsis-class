"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useStore } from "@/lib/store";

export default function FifthStep() {
  const store = useStore((state) => state);

  const {linguisticTerms, class: classes, referenceProfile, setReferenceProfile} = store

  const handleDropdownChange = (criterionIndex: number, classIndex: number, value: string) => {
    const row = classes[classIndex]

    let newRow = referenceProfile[row]

    newRow[criterionIndex] = value

    const newValue = {
      [row]: newRow,
      ...referenceProfile
    }

    setReferenceProfile(newValue)
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
