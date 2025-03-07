function Item({ item }) {
  return (
    <li id={item?.id} className="todo_item">
      <button className="todo_items_left">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" stroke="currentColor" fill={item.is_completed ? "currentColor" : "none"}>
          <circle cx="11" cy="11" r="8" />
        </svg>
        <p>{item?.title}</p>
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
    </li>
  );
}

function TODOList({ todos }) {
  return (
    <ol className="todo_list">
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => <Item key={index} item={item} />)
      ) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
}

export default TODOList;
