import React, { Component } from 'react'
import { Todos } from './Todos'

export class TodosContainer extends Component {
	
	constructor(props){
		super(props)
		this.state={
			todoNumber: this.props.todoNumber
		}
	}



	render() {
		
		let allTodos=[]

		for (let i = 0; i < this.state.todoNumber; i++){
			allTodos.push(<Todos key={i}/>)
		}

		console.log(Todos)
		return (
			<div>
				{allTodos}
			</div>
		)
	}
}
