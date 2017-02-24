import React from 'react'

class TodoListItems extends React.Component {
	constructor(){
		super();
		this.state ={
			isEdit:false
		}
	}
	editClick(){
		this.setState({isEdit:true})
	}
	cancelClick(){
		this.setState({isEdit:false})
	}
	renderItems(){
		const {name,age} = this.props
		if(this.state.isEdit){
			return (
				<td>
					<form onSubmit={this.saveClick.bind(this)}>
						<input type="text" defaultValue={name} ref="editInput"/>
					</form>
				</td>
			)
		}
		return (
			<td>{this.props.name}-{this.props.age}</td>
		)
	}

	saveClick(e){
		e.preventDefault()
		const oldItem = this.props.name
		const newItem = this.refs.editInput.value;
		this.props.saveCurrentItem(oldItem,newItem)
		this.setState({isEdit:false})
	}
	renderItemsAction(){
		if(this.state.isEdit){
			return( <td>
				<button className="btn btn-primary" onClick={this.saveClick.bind(this)}>save</button>
				<button className="btn btn-danger" onClick={this.cancelClick.bind(this)}>cancel</button>
			</td>)
		}
		return (
			<td>
				<button className="btn btn-primary" onClick={this.editClick.bind(this)}>Edit</button>
				<button className="btn btn-danger" onClick={this.props.deleteItem.bind(this,this.props.name)}>Delete</button>
			</td>
		)
	}


	render(){
		return (
			<tr>
				{this.renderItems()}
				{this.renderItemsAction()}
			</tr>
		)
	}
}

export default TodoListItems