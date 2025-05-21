// hooks/useTasks.ts
'use client';

import { useTaskContext } from "../contexts/TaskContext";

export const useTasks = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useTaskContext();

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
  };
};
