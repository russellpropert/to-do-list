const App = () => {
  const [todos, setTodos] = React.useState(
    [
      {
        text: 'learn react',
        isCompleted: false,
      },
      {
        text: 'watch olimpic recaps',
        isCompleted: false,
      },
      {
        text: 'build todo app',
        isCompleted: false,
      },
    ]
  );

  const removeTodo = e => {
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1)
    setTodos(temp);
  }

  return (
    <>
      <Todo todos={todos} removeTodo={removeTodo} />
      <TodoForm todos={todos} setTodos={setTodos} />
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);