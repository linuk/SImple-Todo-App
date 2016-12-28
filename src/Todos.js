import React, { Component } from 'react';
import { Cell, List, Textfield, Card, CardTitle } from 'react-mdl';
import { Todo } from "./Todo";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 

export default class Todos extends Component {
	constructor(props){
		super(props);
		this.state={
			todos:[ 
				{id:1, task: "Buy Toast"},  
				{id:2, task: "Watch Rouge One"},
				],
		}
	}


	componentDidMount() {
		document.getElementById("textfield-NewTask")
		.addEventListener("keydown", this.handleInput.bind(this))
	}

	handleInput(event){
		let newTodos = this.state.todos;
		if(event.which===13&&event.target.value!==""){
			newTodos.push({
				id: (new Date().getTime()),
				task: event.target.value,
			});
			this.setState({ todos: newTodos });
			event.target.value="";
		}
	}


	render() {
	
		const ListContainerCSS={
			padding: "0 15px",
		}

		const CardCSS={
			background: "#fff",
			width: '300px', 
			margin: 'auto',
			color: "#3e3e3e",
		}

		const ListCSS={
			width: "100%",
		}

		const CardTitleCSS={
			color: '#fff',
			height: '150px',
			background: 'url("./card.jpg") center / cover',
			objectFit: "cover",
		}

		return (
				<Cell 
				col={4} tablet={4} phone={6}
				offsetDesktop={4} offsetTablet={2} offsetPhone={0} 
				align={"middle"}>
				
					<Card shadow={2} style={CardCSS}>
				    <CardTitle style={CardTitleCSS}>
				    Tasks 
				    </CardTitle>
				    
					<div style={ListContainerCSS}>
						<List style={ListCSS}>
							<ReactCSSTransitionGroup
					          transitionName="listIn"
					          transitionAppear={false}
					          transitionEnterTimeout={1000}
					          transitionLeaveTimeout={300}>
							{ this.state.todos.map((todo)=><Todo key={todo.id} todo={todo}/>) }
					        </ReactCSSTransitionGroup>
						</List>

					    <Textfield
					    label="New Task"
					    ref="textArea"/>    
					</div>
					</Card>
				</Cell>

		);
	}
}
