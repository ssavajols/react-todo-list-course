# react-todo-list-course

React training course with todo list

- React courses : [https://github.com/ssavajols/react-course](https://github.com/ssavajols/react-course)
- Démonstration : [https://ssavajols.github.io/react-todo-list-course/](https://ssavajols.github.io/react-todo-list-course/)

## Install

```shell
npm install
```

## Run

```shell
# default: http://localhost:8080
npm start
```

## Lifecycles

![lifecycle](https://ssavajols.github.io/react-todo-list-course/assets/lifecycle.png)

### componentWillMount

- When
  - Before initial render, both client and server
- Why
  - Good spot to set initial state

### componentDidMount

- When
  - After render
- Why
  - Access DOM, integrate with frameworks, set timers, AJAX requests

### componentWillReceiveProps

- When
  - When receiving new props.
  - Not called  on initial render.
- Why
  - Set state before a render.

### shouldComponentUpdate

- When
  - Before render when new props or state are being received.
  - Not called  on initial render.
- Why
  - Performance. Return false to void unnecessary re-renders.

### componentWillUpdate

- When
  - Immediately before rendering when new props or state are being received.
  - Not called  on initial render.
- Why
  - Preparing for an update.

### componentDidUpdate

- When
  - After component's updates are flushed to the DOM.
  - Not called  on initial render.
- Why
  - Work with the DOM after an update.

### componentWillUnmount

- When
  - Immediately before components is removed from the DOM.
- Why
  - Cleanup