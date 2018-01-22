import * as React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Home } from './modules/home/home.module';
import { Todo } from './modules/todo/todo.module';

export function AppRouter(props) {
  return (
    <div>
      <ul>
        <li><NavLink to='/add' activeStyle={{fontWeight: 'bold'}}>Add</NavLink></li>
        <li><NavLink to='/' exact activeStyle={{fontWeight: 'bold'}}>List</NavLink></li>
      </ul>

      <Switch>
        <Route path="/add" component={Todo} />
        <Route exact component={Home} />
      </Switch>
    </div>
  );
}