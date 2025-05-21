'use client';

import { useState } from 'react';
import { useTasks } from '@/app/hooks/useTasks';

type Filter = 'all' | 'active' | 'completed';

export const FilterBar = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const { tasks } = useTasks();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  // Apenas exibição de contagem — lógica de filtragem deve ser usada em TaskList para funcionar de verdade.
  return (
    <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
      <div className="flex gap-2">
        <button
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'font-semibold text-blue-600' : ''}
        >
          Todas
        </button>
        <button
          onClick={() => setFilter('active')}
          className={filter === 'active' ? 'font-semibold text-blue-600' : ''}
        >
          Pendentes
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? 'font-semibold text-blue-600' : ''}
        >
          Concluídas
        </button>
      </div>
      <span>{filteredTasks.length} tarefas</span>
    </div>
  );
};
