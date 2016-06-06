var React = require('react'),
	ReactDOM = require('react-dom'),
	expect = require('expect'),
	TestUtils = require('react-addons-test-utils'),
	$ = require('jquery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
	it('should exit', () => {
		expect(TodoList).toExist();
	});

	it('should render on Todo component for each todo item', () => {
		var todos = [
		{
			id: 1,
			text: 'Make breakfast'
		},
		{
			id: 2,
			text: 'Make lunch'
		},
		{
			id: 3,
			text: 'Make dinner'
		}
		];
		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)
		
		expect(todosComponents.length).toBe(todos.length);
	});
});