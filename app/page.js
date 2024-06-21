"use client"
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import AddQuestion from '@/components/AddQuestion';

export default function HomePage() {
  const [questions, setQuestions] = useState([]);
  const [modalOpen, setModalOpen] = useState(true);

  const saveQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  return (
    <div className="dark bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <Button onClick={() => setModalOpen(true)} className="mb-4">
        Open Modal
      </Button>
      {modalOpen && (
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent>
            <AddQuestion saveQuestion={saveQuestion} />
          </DialogContent>
        </Dialog>
      )}
      <pre className="text-left">{JSON.stringify(questions, null, 2)}</pre>
    </div>
  );
}

