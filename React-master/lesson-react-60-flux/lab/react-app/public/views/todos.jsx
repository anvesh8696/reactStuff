'use strict';

var React = require('react');

var controller = require('../js/todo-controller.js');


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
        controller.findAll( this.done );
    },

    done: function( todos ) {
        this.setState( { todos: todos });
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
        controller.create( content, this.done );
    },
    delete(id) {
        controller.delete( id, this.done );
    }
});
