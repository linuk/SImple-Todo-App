import React, { Component } from 'react'
import { Cell, List, Textfield, Card, CardTitle, IconButton, Menu, MenuItem,Button,Icon } from 'react-mdl'
import { Todo } from "./Todo"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 

export default class Todos extends Component {
	constructor(props){
		super(props)
		this.state={
			todos:[ 
				{id:1, task: "Buy Toast", done: false},  
				{id:2, task: "Watch Rouge One", done: false},
				],
			newTaskPattern: "^.{0,25}$",
			showCompleted: true,
		}
	}

	componentDidMount() {
		document.getElementById("textfield-NewTask")
		.addEventListener("keydown", this.handleInput.bind(this))

		// set max length of input area
		document.getElementById("textfield-NewTask").setAttribute("maxlength", 26)
	}


	componentDidUpdate(prevProps, prevState) {
		console.log("UPDATE");
	}

	handleInput(event){

		let newTodos = this.state.todos
		if(event.which===13 && event.target.value!=="" ){
			newTodos.push({
				id: (new Date().getTime()),
				task: event.target.value,
				done: false
			})
			this.setState({ todos: newTodos })
			event.target.value=""
		}
	}

	handleMenuClick(){
		this.setState({
			showCompleted: !this.state.showCompleted,
		})
	}


	render() {
	
		const ListContainerCSS={
			padding: "0 15px",
		}

		const CardCSS={
			background: "#fff",
			width: 'auto', 
			maxWidth: "300px",
			minWidth: "250px",
			margin: 'auto',
			color: "#3e3e3e",
		}

		const IconButtonCSS={
			position: "absolute",
			right: 0,
			color: "#fff"
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

    	let MenuItemShowCompleted = this.state.showCompleted ? "Hide Completed" : "Show Completed" 

		return (
			<Cell 
			col={4} tablet={6} phone={6}
			offsetDesktop={4} offsetTablet={1} offsetPhone={0} 
			align={"middle"}>
			
				<Card shadow={2} style={CardCSS}>
			    <div style={{position: 'relative'}}>
				    <IconButton name="more_vert" id="card-menu" style={IconButtonCSS}/>
				    <Menu target="card-menu" align="right">
				      <MenuItem onClick={this.handleMenuClick.bind(this)}>{ MenuItemShowCompleted }</MenuItem>
				    </Menu>
				</div><CardTitle style={CardTitleCSS}>
					Tasks			    
			    </CardTitle>
			    
				<div style={ListContainerCSS}>
					<List style={ListCSS}>
						<ReactCSSTransitionGroup
				          transitionName="listIn"
				          transitionAppear={true} 
				          transitionAppearTimeout={1000}
				          transitionEnterTimeout={1000}
				          transitionLeaveTimeout={500}>
						{ this.state.todos.map((todo)=>
							<Todo key={todo.id} todo={todo} showCompleted={this.state.showCompleted}/>
						) }
				        </ReactCSSTransitionGroup>
					</List>
				    <Textfield
				    label="New Task"
				    ref="textArea"
				    pattern={this.state.newTaskPattern}
				    />    
				</div>
				</Card>
			</Cell>

		)
	}
}
