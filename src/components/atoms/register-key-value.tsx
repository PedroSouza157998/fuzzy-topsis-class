"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface KeyValue {
  key: string;
  value: string;
}

interface Props {
  title: string;
  items: KeyValue[];
  setItems: (value: KeyValue[]) => void;
}

export default function KeyValueManager({ title, items, setItems }: Props) {
  const updateValue = (key: string, newValue: string) => {
    const newItems = items.map((item) => {
      if(item.key === key) return {key, value: newValue}
      return item
    })
    console.log(newItems)
    setItems(newItems)
  };

  return (
    <Card className="p-4 w-full min-w-96 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <CardContent>
        <ul className="space-y-2">
          {items.map(({ key }) => (
            <li
              key={key}
              className="flex justify-between items-center bg-gray-100 p-2 gap-8 rounded-lg"
            >
              <span className="font-bold">{key}:</span>
              <Select onValueChange={(value) => updateValue(key, value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="max">Max</SelectItem>
                  <SelectItem value="min">Min</SelectItem>
                </SelectContent>
              </Select>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
