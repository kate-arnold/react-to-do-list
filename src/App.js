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

  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={0} total_todos={0} />
      <Form />
      <TODOList todos={todos} />
    </div>
  );
}

export default Home;
