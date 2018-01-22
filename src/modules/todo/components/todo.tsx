import * as React from 'react';
import { TodoAdd, TodoList, TodoService } from '../todo.module';
import './todo';

export type ITodo = {
  id: number;
  email: string;
  username: string;
  message: string;
}

export type ITodoState = {
  todos: ITodo[]
}

export class Todo extends React.Component {

  static initialState = (): ITodoState => ({
    todos: TodoService.todoList
  });

  state:ITodoState = Todo.initialState();

  onAddTodo = (contact: ITodo) => {
      this.setState((prevState: ITodoState) => ({
        contacts: [...prevState.todos, contact]
      }), () => {
        TodoService.todoList = this.state.todos;
      });
  }

  render() {
    return (<div>
      <TodoAdd onAddTodo={this.onAddTodo} />
      <TodoList todoList={this.state.todos} />
    </div>);
  }
}