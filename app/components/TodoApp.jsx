var React = require('react'),
	uuid = require('node-uuid');

var TodoList = require('TodoList'),
	AddTodo = require('AddTodo'),
	TodoSearch = require('TodoSearch');


var TodoApp = React.createClass({
	getInitialState: function(){
		return{
			showCompleted: false,
			searchTest: '',
			todos: [
			{
				id: uuid(),
				text: 'Walk the dog'
			},
			{
				id: uuid(),
				text: 'Clean the yard'
			},
			{
				id: uuid(),
				text: 'Cook lunch'
			},
			{
				id: uuid(),
				text: 'Collect some apples'
			}
			]
		};
	},
	handleAddTodo: function(text){
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text,
				}
			]
		});
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
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoApp;