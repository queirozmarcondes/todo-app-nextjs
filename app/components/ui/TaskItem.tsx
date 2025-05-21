'use client';

import { Task } from '@/app/types/task';
import { useTasks } from '@/app/hooks/useTasks';
import { Trash2 } from 'lucide-react';

interface TaskItemProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-md shadow border mb-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="h-5 w-5 accent-blue-600"
        />
        <span
          className={`text-gray-800 ${
            task.completed ? 'line-through text-gray-400' : ''
          }`}
        >
          {task.title}
        </span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 hover:text-red-700"
        aria-label="Deletar tarefa"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};
