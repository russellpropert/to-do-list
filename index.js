const App = () => {
  const [todos, seTodos] = React.useState(
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

  return (
    <>
      {todos.map((todo, i) => <div key={i}>{todo.text}</div>)}
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);