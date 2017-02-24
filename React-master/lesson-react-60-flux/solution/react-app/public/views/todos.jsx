'use strict';

var React = require('react');

var Constants = require('../js/constants');
var TodoStore = require('../js/todo-store');
var Dispatcher = require('../js/dispatcher.js');


var TodoItem = React.createClass({
    render: function () {
        return (
            <div className="item">
                <a data-todoid={this.props.todo.id} onClick={this.update}
                    title="Update this todo item"
                    className="update-link"> {this.props.todo.content} </a>
                <a data-todoid={this.props.todo.id} onClick={this.delete}
                    title="Delete this todo item"
                    className="del-btn">Delete</a>
            </div>
        );
    },
    update(event) {
        var id = event.target.getAttribute('data-todoid');
        alert( id );
    },
    delete(event) {
        var id = event.target.getAttribute('data-todoid');
        this.props.delete( id );
    }

});

var TodoInput = React.createClass({
    render: function () {
        return (
            <form onSubmit={this.submit}>
                <div className="item-new">
                    <input type="text" name="content" className="input"/>
                </div>
            </form>
        );
    },
    submit( event ) {
        event.preventDefault();
        var content = event.target.elements[0].value;
        event.target.elements[0].value = '';
        this.props.addTodo( content );
    }
});

var TodoList = module.exports = React.createClass({
    getInitialState() {
        return {
            todos: []
        }
    },

    componentDidMount() {
        TodoStore.registerChangeListener(this._change);
        Dispatcher.dispatch({actionType: Constants.TODO_FIND_ALL});
    },

    _change() {
        this.setState( { todos: TodoStore.getAll() });
    },

    render: function render() {
        var self = this;

        return (
            <div id="layout">
                <h1 id="page-title">Express Todo</h1>
                <div id="list">

                    <TodoInput addTodo={this.addTodo} />

                    {this.state.todos.map( function(todo, idx) {
                        return ( <TodoItem key={idx} todo={todo} delete={self.delete} /> );
                        })}

                </div>
            </div>
        )
    },
    addTodo( content ) {
        Dispatcher.dispatch({actionType: Constants.TODO_CREATE, content: content});},
    delete(id) {
        Dispatcher.dispatch({actionType: Constants.TODO_DELETE, id: id});
    }
});
