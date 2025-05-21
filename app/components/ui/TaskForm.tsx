'use client';

import { useState } from 'react';
import { useTasks } from '@/app/hooks/useTasks';

export const TaskForm = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    addTask(trimmed);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Digite uma nova tarefa..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Adicionar
      </button>
    </form>
  );
};
