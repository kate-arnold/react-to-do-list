function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // reset the form
    event.target.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input type="text" name="todo" id="todo" placeholder="Write your next task" />
      </label>
      <button>
        <span className="visually-hidden">Submit</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" stroke="black" strokeWidth="2.5">
          <path d="M25 13, v24, M13 25, h24" />
        </svg>
      </button>
    </form>
  );
}

export default Form;
