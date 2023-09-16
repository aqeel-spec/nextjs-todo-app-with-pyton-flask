"use client";

import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";
import { useStore } from "@/store";
import { useEffect } from "react";

const Home: React.FC = () => {
  const todos = useStore((state) => state.todos);
  const fetchTodos = useStore((state) => state.fetchTodos);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <h1 className="text-2xl py-6  leading-6 font-black text-center">Created todo app with flash api using python</h1>
      <div className="container mx-auto max-w-md p-4">

        <TodoForm />
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        {todos.length === 0 ? (
          <p className="text-center">No Todos Found</p>
        ) : (
          todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </div>
    </>
  );
};

export default Home;
