const TodoForm = ({todos, setTodos}) => {
  const [value, setValue] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    const newTodos = [...todos, {text: value, isCompleted: false}];
    setTodos(newTodos);
    setValue('');
  }

  return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Add Todo ..."
          onChange={e => setValue(e.target.value)} 
        />
      </form>
  );
}
