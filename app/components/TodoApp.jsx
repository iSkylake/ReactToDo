var React = require('react');

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
				id: 1,
				text: 'Walk the dog'
			},
			{
				id: 2,
				text: 'Clean the yard'
			},
			{
				id: 3,
				text: 'Cook lunch'
			},
			{
				id: 4,
				text: 'Collect some apples'
			}
			]
		};
	},
	handleAddTodo: function(text){
		alert('New task: ' + text);
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