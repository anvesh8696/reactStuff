
// add the TodoItem below

var TodoItem = React.createClass( {
    render() {
        return (
            <div> {this.props.content} </div>
        );
    }
});


// add the TodoListBox below

var TodoListBox = React.createClass({

    getInitialState() {
        return {
            todos: ['Eat Lunch', 'Walk the Dog', 'Sleep'],
            current: ''
        };
    },

    render() {
        var views = this.state.todos.map((item, idx) => <TodoItem key={idx} content={item} />);

        return (
            <div className="todo-list-box">
                <h1>Todo List</h1>
                {views}
                <form onSubmit={this.addOne}>
                    <input type="text" onChange={this.change} value={this.state.current}/>
                </form>
            </div>
        );
    },
    change: function (event) {
        event.preventDefault();
        this.setState({'current': event.target.value});
    },
    addOne: function( event ) {
        event.preventDefault();
        var item = this.state.current.trim();
        if (item.length > 0) {
            this.setState( {'todos': this.state.todos.concat( item ), 'current': ''});
        }
    },

});

ReactDOM.render(
    <TodoListBox />, document.getElementById('todoListBox')
);
