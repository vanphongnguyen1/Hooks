import React, { useState } from 'react';
import Form from './Form';
import List from './List';

const Todolist = (props) => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'hahahahahah'},
    { id: 2, title: 'hahahahahah'},
    { id: 3, title: 'hahahahahah'},
  ])

  const onTodoClick = todo => {
    console.log(todo)
    const index = todos.findIndex(x => x.id === todo.id)
    if (index < 0) return;

    const [...newTodos] = todos
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const onSubmit = values => {
    console.log({...values})
    const [...newTodos] = todos
    const newTodo = {
      id: newTodos.length + 1,
      ...values
    }
    console.log(newTodos)
    newTodos.push(newTodo)
    setTodos(newTodos)
  }

  return (
    <>
      <Form onSubmit={ onSubmit }/>
      <List todos={ todos } onTodoClick={ onTodoClick }/>
    </>
  );
}

export default Todolist;