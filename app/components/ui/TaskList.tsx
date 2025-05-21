'use client';

import { useTasks } from '@/app/hooks/useTasks';
import { TaskItem } from './TaskItem';

export const TaskList = () => {
  const { tasks } = useTasks();

  if (tasks.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-4">
        Nenhuma tarefa adicionada ainda.
      </p>
    );
  }

  return (
    <div className="flex flex-col">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
