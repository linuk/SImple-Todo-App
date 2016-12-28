import React, { Component } from 'react'
import { ListItem, ListItemContent, ListItemAction, Checkbox } from 'react-mdl'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 

export class Todo extends Component {
	
	constructor(props){
		super(props)
		this.state={
			done: this.props.todo.done,
			doneCSS: "",
			showCompleted: this.props.showCompleted
		}
	}


	componentWillReceiveProps(nextProps) {
		this.changeShowCompleted(nextProps)
	}

	changeShowCompleted(nextProps){
		if(nextProps.showCompleted!==this.state.showCompleted){
			this.setState({
				showCompleted: nextProps.showCompleted,
			})
		}		
	}

	handleChange(event){
		// toggle state and css style
		let newState = this.state.done ? false : true
		let newDoneCSS = this.state.done ? "" : "done"
		this.setState({
			done: newState,
			doneCSS: newDoneCSS,
		})
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("TODO: "+this.state.showCompleted);
	}

	render() {
		if((this.state.showCompleted && this.state.done) || !this.state.done){
			return (
				<ListItem key={this.props.todo.id}>
					
					<ListItemContent className={this.state.doneCSS}>
						{this.props.todo.task}
					</ListItemContent>

					<ListItemAction>
						<Checkbox checked={this.state.done} onChange={this.handleChange.bind(this)}/>
					</ListItemAction>

				</ListItem>
			)
		}else{return <div> </div>}
	}
}
