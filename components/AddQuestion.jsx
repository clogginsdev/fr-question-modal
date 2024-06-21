import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Choice from './Choice';

const AddQuestion = ({ title, setTitle, choices, addChoices, handleChoiceChange, saveQuestion }) => {
  return (
    <div>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-4 mt-4"
      />
      <Button onClick={addChoices} className="mb-4 light mr-4">Add Question</Button>
      {choices.length > 0 && (
        <div>
          {choices.map((choice, index) => (
            <Choice
              key={index}
              index={index}
              choice={choice}
              onChange={handleChoiceChange}
            />
          ))}
        </div>
      )}
      {choices.every(c => c.text && c.type) && (
        <Button onClick={() => saveQuestion({ title, choices })} className="mt-4 dark">Save</Button>
      )}
    </div>
  );
};

export default AddQuestion;
