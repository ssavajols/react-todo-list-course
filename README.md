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

## Components Lifecycle

![lifecycle](https://ssavajols.github.io/react-todo-list-course/assets/lifecycle.png)

| Hook | When | Initial Render | Why use |
|------|------|----------------|---------|
| componentWillMount | Before initial render, both client and server | Yes | Good spot to set initial state |
| componentDidMount | After render | Yes | Access DOM, integrate with frameworks, set timers, AJAX requests |
| componentWillReceiveProps | When receiving new props. | No | Set state before a render. |
| shouldComponentUpdate | Before render when new props or state are being received. | No | Performance. Return false to void unnecessary re-renders. |
| componentWillUpdate | Immediately before rendering when new props or state are being received. | No | Preparing for an update. |
| componentDidUpdate | After component's updates are flushed to the DOM. | No | Work with the DOM after an update. |
| componentWillUnmount | Immediately before components is removed from the DOM. | N/A | Cleanup |
