import React, { Component } from 'react';
import { ListItem, ListItemContent, ListItemAction, Checkbox } from 'react-mdl';

export class Todo extends Component {
	
	constructor(props){
		super(props);
		this.state={
			done: false,
			doneCSS: ""
		}
	}

	handleCheckboxClick(e){
		let newState = this.state.done ? false : true;
		let newDoneCSS = this.state.done ? "" : "done";
		this.setState({
			done: newState,
			doneCSS: newDoneCSS,
		})
	}

	render() {

		return (
			<ListItem key={this.props.todo.id}>
				
				<ListItemContent className={this.state.doneCSS}>
					{this.props.todo.task}
				</ListItemContent>
				
				<ListItemAction>
					<Checkbox onClick={this.handleCheckboxClick.bind(this)}/>
				</ListItemAction>

			</ListItem>
		);
	}
}
