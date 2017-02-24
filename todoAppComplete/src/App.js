import React from 'react'
import Todolist from './todoList'
import CreateTodo from './createToDo'
import _ from 'lodash'

const items = [
	{
		name:'jayanth',
		age:24
	},
	{
		name:'sandeep',
		age:23
	}
]

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			items
		}
	}
	addNewItem(name){
		this.state.items.push({
			name,
			age:25
		})
		this.setState({items:this.state.items})
	}
	deleteCurrentItem(currentitem){
		_.remove(this.state.items,todo => todo.name === currentitem)
		this.setState({items:this.state.items})
	}

	saveCurrentItem(oldItem,newItem){
		const findItem = _.find(this.state.items,todo =>todo.name === oldItem)
		findItem.name = newItem
		this.setState({items:this.state.items})
	}
	render(){
		return (
			<div>
				<h1>Sample Todo App</h1>
				<CreateTodo addItem={this.addNewItem.bind(this)}/>
				<Todolist saveCurrentItem={this.saveCurrentItem.bind(this)} items={this.state.items} deleteItem={this.deleteCurrentItem.bind(this)}/>
			</div>
		)
	}
}

export default App