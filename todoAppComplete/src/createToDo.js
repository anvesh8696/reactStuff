import React from 'react'

class CreateTodo extends React.Component{
	addNewItem(e){
		e.preventDefault()
		console.log(this.refs.newItem.value)
		this.props.addItem(this.refs.newItem.value)
		this.refs.newItem.value = ''
	}
	render(){
		return (
			<form className="form-inline" onSubmit={this.addNewItem.bind(this)}>
				<input ref="newItem" type="text" placeholder="add a new item" className="form-control"/>
				<button className="btn btn-primary">Save</button>
			</form>
		)
	}
}

export default CreateTodo