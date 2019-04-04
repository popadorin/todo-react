import React from 'react';

const TodoListItem = ({ item, onItemClick, onCloseClick }) => {
  return (
    <li className="list-group-item " onClick={ onItemClick } >
      <div className={ item.done ? 'done' : 'undone' }>
        { item.value }
        <button type="button" className="close" onClick={ onCloseClick }>&times;</button>
      </div>
    </li>
  );
};

export default TodoListItem;
