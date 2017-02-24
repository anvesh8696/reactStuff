/**
 * Created by clboyd on 8/29/16.
 */

class TodoListItem extends React.Component {
    render() {
        return (
            <div className="todo-list-item">{this.props.item}</div>
        )
    }
}

class TodoListBox extends React.Component {

    constructor() {
        super();
        this.state = {
            showList: false
        }
    }
    render() {
        const todos = ['Eat Lunch', 'Walk the Dog', 'Sleep'];

        let views = todos.map( (item, idx) => <TodoListItem item={item} key={idx} /> );

        if (!this.state.showList) {
            views = '';
        }

        return (
            <div className="todo-list-box">
                <h1>Todo List</h1>
                {views}
            </div>
        );
    }
}

class Example extends React.Component {
    render() {
        return <button onClick={this._clickHandler.bind(this)} >Show List</button>
    }
    _clickHandler() {
        this.setState({ showList: !this.state.showList });
    }

}

ReactDOM.render(
    <TodoListBox />, document.getElementById('todoListBox')
);
