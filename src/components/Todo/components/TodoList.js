import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoItems, removeItem, markTodoDone }) => {
  const itemsNodes = todoItems.map((item, index) => (
    <TodoListItem
      key={ index }
      item={ item }
      index={ index }
      removeItem={ removeItem }
      markTodoDone={ markTodoDone }
      onItemClick={ () => markTodoDone(parseInt(index)) }
      onCloseClick={ (e) => {
        e.stopPropagation();
        removeItem(parseInt(index));
      } }
    />
  ));

  return (
    <ul className="list-group"> { itemsNodes } </ul>
  );
};

export default TodoList;
