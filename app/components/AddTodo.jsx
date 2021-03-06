var React = require('react');

var AddForm = React.createClass({
	handleSubmit: function(e){
		e.preventDefault();
		var todoText = this.refs.todoText.value;

		if(todoText.length > 0){
			this.refs.todoText.value = "";
			this.props.onAddTodo(todoText);
		} else{
			this.refs.todoText.focus();
		}
	},
	render: function(){
		return(
			<div className="container__footer">
				<form ref="form" onSubmit={this.handleSubmit}>
					<input type="text" ref="todoText" placeholder="New task"/>
					<button className="button expanded">Add</button>
				</form>
			</div>
		);
	}
});

module.exports = AddForm;