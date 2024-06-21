import React from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const Choice = ({ index, choice, onChange }) => {
  const handleTextChange = (e) => {
    onChange(index, { ...choice, text: e.target.value });
  };

  const handleTypeChange = (value) => {
    onChange(index, { ...choice, type: value });
  };

  return (
    <div className="mb-4 flex items-center">
      <Input
        type="text"
        placeholder="Choice Text"
        value={choice.text}
        onChange={handleTextChange}
        className="mr-2"
      />
      <Select value={choice.type} onValueChange={handleTypeChange} className="ml-2">
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Select Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="dollar">Dollar</SelectItem>
          <SelectItem value="number">Number</SelectItem>
          <SelectItem value="string">String</SelectItem>
          <SelectItem value="boolean">Boolean</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Choice;
