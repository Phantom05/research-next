import React from 'react';
import { TodoItemStyle } from './TodoItem.style';

function TodoItem(props) {
  const { data } = props;
  return (
    <TodoItemStyle>
      {data}
    </TodoItemStyle>
  );
}

export default TodoItem;
