import { useEffect } from "react";
import {useState} from "react";
import {useRef} from "react";

function Item({ item, setTodos }) {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);

  const completeToDo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id
          ? { ...todo, is_completed: !todo.is_completed }
          : todo
      )
    );
  }

  const handleEdit = () => {
    setEditing(true);
  }

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [editing]);

  const handleInputSubmit = (event) => {
    event.preventDefault();
    setEditing(false);
  };

  const handleInputBlur = () => {
    setEditing(false);
  };

  return (
    <li id={item?.id} className="todo_item">
      {editing ? (
        <form className="edit-form" onSubmit={handleInpuSubmit}>
          <label htmlFor="edit-todo">
            <input
              ref={inputRef}
              type="text"
              name="edit-todo"
              id="edit-todo"
              defaultValue={item?.title}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
            />
          </label>
        </form>
      ) : (
        <>
          <button className="todo_items_left" onClick={completeToDo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" stroke="currentColor" fill={item.is_completed ? "currentColor" : "none"}>
              <circle cx="11" cy="11" r="8" />
            </svg>
            <p style={item.is_completed ? { textDecoration: "line-through" } : {}}>{item?.title}</p>
          </button>
          <div className="todo_items_right">
            <button>
              <span className="visually-hidden">Edit</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" stroke="currentColor" strokeWidth="2" fill="none"> 
                <path d="M20,8 L8,20 L4,20 L4,16 L16,4z M3,23 L20,23" />
              </svg>
            </button>
            <button>
              <span className="visually-hidden">Delete</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" stroke="red" strokeWidth="2" fill="none"> 
                <path d="M4,4 L20,20 M4,20 L20,4" />
              </svg>
            </button>
          </div>
        </>
      )}
    </li>
  );
}

function TODOList({ todos, setTodos }) {
  return (
    <ol className="todo_list">
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => <Item key={index} item={item} setTodos={setTodos} />)
      ) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
}

export default TODOList;
