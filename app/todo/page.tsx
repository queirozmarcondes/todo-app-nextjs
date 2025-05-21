'use client';

import { TaskProvider } from '@/app/contexts/TaskContext';
import { Footer } from '@/app/components/ui/Footer';
import { Header } from '@/app/components/ui/Header';
import { TaskForm } from '@/app/components/ui/TaskForm';
import { FilterBar } from '@/app/components/ui/FilterBar';
import { TaskList } from '@/app/components/ui/TaskList';

export default function TodoPage() {
  return (
    <TaskProvider>
      <main className="max-w-xl mx-auto p-6">
        <Header />
        <TaskForm />
        <FilterBar />
        <TaskList />
        <Footer />
      </main>
    </TaskProvider>
  );
}
