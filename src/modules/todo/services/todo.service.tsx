import { ITodo } from '../todo.module';
import { remove } from 'lodash';

export class TodoService {
  static todoList: ITodo[] = [];

  static add(todo: ITodo) {
    TodoService.todoList.push(todo);
  }

  static remove(todo: ITodo) {
    remove(TodoService.todoList, (todo: ITodo) => {
      return todo.id === todo.id;
    });
  }
}