const App = () => {
  const [todos, setTodos] = React.useState(
    [
      {
        text: 'learn react',
        isCompleted: false,
      },
      {
        text: 'watch olympic recaps',
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
    <div className="app">
      <div>
        <Todo todos={todos} removeTodo={removeTodo} />
      </div>
      <TodoForm todos={todos} setTodos={setTodos} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);