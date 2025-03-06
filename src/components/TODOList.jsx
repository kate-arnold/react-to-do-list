function Item({ item }) {
  return (
    <li id={item?.id} className="todo_item">
      <button className="todo_items_left">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" stroke="#e3dacb">
          <circle cx="11" cy="11" fillRule="nonzero" r="8" />
        </svg>
        <p>{item?.title}</p>
      </button>
      <div className="todo_items_right">
        <button>
          <span className="visually-hidden">Edit</span>
          <svg>
            <path d="" />
          </svg>
        </button>
        <button>
          <span className="visually-hidden">Delete</span>
          <svg>
            <path d="" />
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
