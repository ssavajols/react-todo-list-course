import * as React from 'react';
import { ITodo } from '../todo.module';

export function TodoList(props) {
  return (
    <ul className="list-group">
      {props.todoList.map((todo: ITodo, index: number) => (
        <li className="list-group-item" key={index}>
          {todo.message}
        </li>
      ))}
    </ul>
  );
} 