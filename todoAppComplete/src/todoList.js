import React from 'react'
import TodoListHeader from './todoListHeader'
import TodoListItems from './todoListItems'
import _ from 'lodash'



class Todolist extends React.Component {
	displayItems(){
		console.log(this.props.items)
		console.log(this.props)
		const props = _.omit(this.props,'items')
		console.log(props)
		return _.map(this.props.items,(todo,index)=><TodoListItems key={index} {...todo} {...props}/>)
	}
	render(){
		return (
			<table className="table table-bordered">
            <TodoListHeader/>
				<tbody>
				{this.displayItems()}
				</tbody>
			</table>
		)
	}
}

export default Todolist