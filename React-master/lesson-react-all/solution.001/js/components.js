/**
 * Created by clboyd on 8/29/16.
 */

class TodoItem extends React.Component {
    render() {
        return (
            <div className="todo-list-item">{this.props.item}
                <a href="#" onClick={this._handleDelete.bind(this)} >
                    Delete Me
                </a>
            </div>
        )
    }
    _handleDelete(event) {
        event.preventDefault();
        if ( confirm( 'Are you sure? ')) {
            this.props.onDelete(this.props.item);
        }
    }
}

class TodoListBox extends React.Component {

    constructor() {
        super();
        this.state = {
            showList: false,
            todos: []
        }
    }
    componentWillMount() {
        this._fetchTodoList();
    }

    _fetchTodoList() {
        jQuery.ajax({
            method: 'GET',
            url: '/api/todos',
            success: (todos) => { this.setState({todos}) }
        })
    }

    _deleteTodoItem(todo) {
        // update the domain model
        jQuery.ajax({
            method: 'DELETE',
            url: `/api/todos/${todo.id}`,

        });

        // update the view model
        const todos = [...this.state.todos];
        const index = todos.indexOf( todo );
        todos.splice( index, 1 );
        this.setState( {todos} );
    }

    _addItem( content ) {
        const data = { content: content };
        jQuery.post(
            '/api/todos',
            data
        ).success( (item) => {
            this.setState( { todos: this.state.todos.concat( item ) })
        });
    }

    componentDidMount() {
        this._timer = setInterval( () => this._fetchTodoList(), 5000);
    }

    componentWillUnmount() {
        clearInterval( this._timer );
    }

    render() {
        const todos = ['Eat Lunch', 'Walk the Dog', 'Sleep'];

        let views = todos.map( (item, idx) => <TodoItem item={item} key={idx} /> );

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
