var React = require('react'),
	ReactDOM = require('react-dom'),
	{Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyle');

ReactDOM.render(
	<div>
	<h1>Boilerplate</h1>
	<TodoApp/>
	</div>,
	document.getElementById('app')
);