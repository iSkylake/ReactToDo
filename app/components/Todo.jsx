var React = require('react'),
	moment = require('moment');

var Todo = React.createClass({
	render: function(){
		var {id, text, completed, createdAt, completedAt} = this.props;
		var todoClassName = completed ? 'todo todo-completed' : 'todo';
		var renderDate = () =>{
			var message = 'Created ';
			var timestamp = createdAt;

			if(completed){
				var message = 'Completed ';
				var timestamp = completedAt;
			}

			return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm A');
		};
		return(
			<div className={todoClassName} onClick={() => {
				this.props.onToggle(id);
			}}>
				<p>
				<input type="checkbox" checked={completed}/>
				</p>
				<div>
					<p>{text}</p>
					<p className="todo__subtext">{renderDate()}</p>
				</div>
			</div>
		);
	}
});

module.exports = Todo;