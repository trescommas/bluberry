'use strict';

var TodoList = React.createClass({
	displayName: 'TodoList',

	getInitialState: function getInitialState() {
		return {
			todos: ['wash up', 'eat some cheese', 'take a nap']
		};
	},
	render: function render() {
		var todos = this.state.todos;
		todos = todos.map(function (item, index) {
			return React.createElement(TodoItem, { item: item, key: index, onDelete: this.onDelete });
		}.bind(this));
		return React.createElement(
			'div',
			{ id: 'todo-table' },
			React.createElement(
				'p',
				null,
				'Hey there'
			),
			React.createElement(
				'ul',
				null,
				todos
			),
			React.createElement(AddItem, { onAdd: this.onAdd })
		);
	},

	onDelete: function onDelete(item) {
		var updatedTodos = this.state.todos.filter(function (val, index) {
			return item !== val;
		});
		this.setState({
			todos: updatedTodos
		});
	},

	onAdd: function onAdd(item) {
		var updatedTodos = this.state.todos;
		updatedTodos.push(item);
		this.setState({
			todos: updatedTodos
		});
	}

});

//This one shows the item names, has the x delete thing, which if clicked 

var TodoItem = React.createClass({
	displayName: 'TodoItem',

	render: function render() {
		return React.createElement(
			'li',
			null,
			React.createElement(
				'div',
				{ className: 'todo-item' },
				React.createElement(
					'span',
					{ className: 'item-name' },
					this.props.item
				),
				React.createElement(
					'span',
					{ className: 'item-delete', onClick: this.handleDelete },
					'\xA0\xA0\xA0\xA0x'
				)
			)
		);
	},

	handleDelete: function handleDelete() {
		this.props.onDelete(this.props.item);
	}
});

var AddItem = React.createClass({
	displayName: 'AddItem',

	render: function render() {
		return React.createElement(
			'form',
			{ id: 'add-todo', onSubmit: this.handleSubmit },
			React.createElement('input', { type: 'text', required: true, ref: 'newItem' }),
			React.createElement('input', { type: 'submit', value: 'Hit me' })
		);
	},
	handleSubmit: function handleSubmit(e) {
		e.preventDefault();
		this.props.onAdd(this.refs.newItem.value);
	}
});

ReactDOM.render(React.createElement(TodoList, null), document.getElementById("dolist"));