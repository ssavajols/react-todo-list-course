import * as React from 'react';
import './todo';
import { ITodo, TodoList, TodoService } from '../todo.module';

export type ITodoAddProps = {
  onAddTodo: (ITodo) => void;
}

export class TodoAdd extends React.Component {

  props: ITodoAddProps;

  submitHandle = (event) => {
    event.preventDefault();

    const todo: ITodo = {
      id:       TodoService.todoList.length,
      email:    (this.refs.email as HTMLInputElement).value,
      username: (this.refs.username as HTMLInputElement).value,
      message:  (this.refs.message as HTMLInputElement).value,
    }
    
    this.props.onAddTodo(todo);

    event.currentTarget.reset();
  }

  render() {
    return (<form onSubmit={this.submitHandle}>
      <p>
        <label htmlFor='username'>Username* : </label>
        <input type='text' ref='username' id='username' required />
      </p>

      <p>
        <label htmlFor='email'>Email* : </label>
        <input type='email' ref='email' id='email' required />
      </p>

      <p>
        <label htmlFor='message'>Message : </label>
        <input type='text' ref='message' id='message' />
      </p>

      <input type='submit' value='Send' />
    </form>);
  }
}