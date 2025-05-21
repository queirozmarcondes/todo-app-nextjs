'use client';

import { useState } from 'react';
import { useTasks } from '@/app/hooks/useTasks';
import clsx from 'clsx';

type Filter = 'all' | 'active' | 'completed';

export const FilterBar = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const { tasks } = useTasks();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const buttonBase =
    'relative pb-1 transition-colors text-gray-600 hover:text-blue-500';

  const buttonActive = `
    font-semibold text-blue-600
    after:content-[''] after:absolute after:-bottom-[2px] after:left-0
    after:h-[2px] after:w-full after:bg-blue-600
    after:transition-transform after:scale-x-100 after:origin-left
  `;

  const buttonInactive = `
    after:content-[''] after:absolute after:-bottom-[2px] after:left-0
    after:h-[2px] after:w-full after:bg-blue-600
    after:scale-x-0 after:transition-transform after:origin-left
  `;

  return (
    <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
      <div className="flex gap-4">
        <button
          onClick={() => setFilter('all')}
          className={clsx(buttonBase, {
            [buttonActive]: filter === 'all',
            [buttonInactive]: filter !== 'all',
          })}
        >
          Todas
        </button>
        <button
          onClick={() => setFilter('active')}
          className={clsx(buttonBase, {
            [buttonActive]: filter === 'active',
            [buttonInactive]: filter !== 'active',
          })}
        >
          Pendentes
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={clsx(buttonBase, {
            [buttonActive]: filter === 'completed',
            [buttonInactive]: filter !== 'completed',
          })}
        >
          Concluídas
        </button>
      </div>
      <span>{filteredTasks.length} tarefas</span>
    </div>
  );
};
