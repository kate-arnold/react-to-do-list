import "./styles.css";
import React from "react";
import {useState} from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TODOHero from "./components/TODOHero";
import TODOList from "./components/TODOList";

function Home() {
  const [todos, setTodos] = useState([
    {title: 'Task A', id: self.crypto.randomUUID(), is_completed: false},
    {title: 'Task B', id: self.crypto.randomUUID(), is_completed: true},
    {title: 'Task C', id: self.crypto.randomUUID(), is_completed: false},
  ]);
  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;
  const total_todos = todos.length;

  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form setTodos={setTodos} />
      <TODOList todos={todos} />
    </div>
  );
}

export default Home;
