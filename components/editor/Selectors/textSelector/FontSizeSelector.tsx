"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

export default function NumberSelector() {
  const [value, setValue] = useState(235);

  const increment = () => {
    setValue((prev) => prev + 1);
  };

  const decrement = () => {
    setValue((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className='inline-flex items-center'>
      <Select
        value={value.toString()}
        onValueChange={(val) => setValue(parseInt(val))}
      >
        <SelectTrigger className='h-9 w-[72px] rounded-none border-y px-2 [&>span]:mx-auto [&>svg]:hidden'>
          <SelectValue>{value}</SelectValue>
        </SelectTrigger>
        <Button
          variant='outline'
          size='icon'
          className='h-9 rounded-none rounded-r-md border-l-0'
          onClick={increment}
        >
          <Minus className='h-4 w-4' />
        </Button>
        <SelectContent>
          {Array.from({ length: 36 }, (_, i) => i + 1).map((num) => (
            <SelectItem key={num} value={num.toString()}>
              {num}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        variant='outline'
        size='icon'
        className='h-9 rounded-none rounded-l-md border-r-0'
        onClick={decrement}
      >
        <Plus className='h-4 w-4' />
      </Button>
    </div>
  );
}
