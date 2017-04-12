'use strict';

var TodoItem = React.createClass({
  displayName: 'TodoItem',

  done: function done() {
    this.props.done(this.props.todo);
  },

  render: function render() {
    return React.createElement(
      'li',
      { onClick: this.done },
      this.props.todo
    );
  }
});

var TodoList = React.createClass({
  displayName: 'TodoList',

  getInitialState: function getInitialState() {
    return {
      todos: this.props.todos
    };
  },

  add: function add() {
    var todos = this.props.todos;
    todos.push(React.findDOMNode(this.refs.myInput).value);
    React.findDOMNode(this.refs.myInput).value = "";
    localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({ todos: todos });
  },

  done: function done(todo) {
    var todos = this.props.todos;
    todos.splice(todos.indexOf(todo), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({ todos: todos });
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h4',
        null,
        'What are you up to?'
      ),
      React.createElement('br', null),
      React.createElement(
        'ul',
        null,
        this.state.todos.map(function (todo) {
          return React.createElement(TodoItem, { todo: todo, done: this.done });
        }.bind(this))
      ),
      React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement('input', { type: 'text', required: true, ref: 'myInput' }),
        React.createElement(
          'button',
          { onClick: this.add },
          'Add'
        )
      )
    );
  }
});

var todos = JSON.parse(localStorage.getItem('todos')) || [];

React.render(React.createElement(TodoList, { todos: todos }), document.getElementById('dolist'));