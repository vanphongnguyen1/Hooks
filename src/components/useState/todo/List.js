import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => {
  const { todos, onTodoClick } = props

  const handleClick = todo => {
    if (onTodoClick) {
      onTodoClick(todo)
    }
  }

  const element = todos.map((todo, index) => {
    return <li key={ index } onClick={() => handleClick(todo)}>
        { todo.title }
      </li>
  })

  return (
    <>
      <ul className="todo-list">
        { element }
      </ul>
    </>
  );
}

List.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

List.defaultProps = {
  todos: [],
  onTodoClick: null
}

export default List;