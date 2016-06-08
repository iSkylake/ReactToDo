var React = require('react'),
	uuid = require('node-uuid');

var TodoList = require('TodoList'),
	AddTodo = require('AddTodo'),
	TodoSearch = require('TodoSearch'),
	TodoAPI = require('TodoAPI');


var TodoApp = React.createClass({
	getInitialState: function(){
		return{
			showCompleted: false,
			searchTest: '',
			todos: TodoAPI.getTodos()
		};
	},
	componentDidUpdate: function(){
		TodoAPI.setTodos(this.state.todos);
	},
	handleAddTodo: function(text){
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed: false
				}
			]
		});
	},
	handleToggle: function(id){
		var updatedTodos = this.state.todos.map((todo) => {
			if(todo.id === id){
				todo.completed = !todo.completed;
			}
			return todo;
		});
		this.setState({todos: updatedTodos});
	},
	handleSearch: function(showCompleted, searchTest){
		this.setState({
			showCompleted: showCompleted,
			searchTest: searchTest.toLowerCase()
		});
	},
	render: function(){
		var {todos} = this.state;
		return(
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos} onToggle={this.handleToggle}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoApp;