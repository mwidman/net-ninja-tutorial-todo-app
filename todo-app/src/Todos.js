import React from 'react';


const Todo = (todo, deleteTodo) => {
  return (
    <div className="collection-item" key={todo.id}>
      <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
    </div>
  );
}

const Todos = ({todos, deleteTodo}) => {
  const todoList = todos.length ?
    (
      todos.map((todo) => Todo(todo, deleteTodo))
    ) :
    (
      <p className="center">You have not todo's left, yay!</p>
    )
  return (
    <div className="todos collection">
      {todoList}
    </div>
  );
}

export default Todos;