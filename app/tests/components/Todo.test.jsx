var React = require('react'),
	ReactDOM = require('react-dom'),
	expect = require('expect'),
	TestUtils = require('react-addons-test-utils'),
	$ = require('jQuery');

var Todo = require('Todo');

describe('Todo', () => {
	it('should exist', () => {
		expect(Todo).toExist();
	});

	it('should call onToggle prop with id on click', () => {
		var todoData = {
			id: 199,
			text: 'Write todo.test.jsx test',
			completed: true
		};
		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todo));

		TestUtils.Simulate.click($el[0]);

		expect(spy).toHaveBeenCalledWith(199);
	});
});