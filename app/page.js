"use client"
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import AddQuestion from '@/components/AddQuestion';

export default function HomePage() {
  const [questions, setQuestions] = useState([]);
  const [modalOpen, setModalOpen] = useState(true);
  const [title, setTitle] = useState('');
  const [choices, setChoices] = useState([]);

  const saveQuestion = (question) => {
    setQuestions([...questions, question]);
    setTitle('');
    setChoices([]);
    setModalOpen(false);
  };

  const addChoices = () => {
    setChoices([{ text: '', type: '' }, { text: '', type: '' }]);
  };

  const handleChoiceChange = (index, choice) => {
    const newChoices = [...choices];
    newChoices[index] = choice;
    setChoices(newChoices);
  };

  return (
    <div className="dark bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <Button onClick={() => setModalOpen(true)} className="mb-4">
        Open Modal
      </Button>
      {modalOpen && (
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent>
            <AddQuestion
              title={title}
              setTitle={setTitle}
              choices={choices}
              addChoices={addChoices}
              handleChoiceChange={handleChoiceChange}
              saveQuestion={saveQuestion}
            />
          </DialogContent>
        </Dialog>
      )}
      <pre className="text-left">{JSON.stringify(questions, null, 2)}</pre>
    </div>
  );
}
