// context/TaskContext.tsx
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Task } from '../types/task';
import { v4 as uuidv4 } from 'uuid';

interface TaskContextType {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      completed: false,
      createdAt: new Date(),
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

// Hook interno para usar no useTasks
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext deve ser usado dentro de um TaskProvider');
  }
  return context;
};
