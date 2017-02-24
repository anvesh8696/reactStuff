'use strict';

var React = require('react');

var TodoItem = React.createClass({
    render: function () {
        return (
            <div>TodoItem</div>

        );
    }
});

var TodoInput = React.createClass( {
    render: function () {
        return (
            <div>TodoInput</div>

        );
    }
});

var TodoList = module.exports = React.createClass({

    render: function render() {

        return (
            <div>TodoList</div>
        )
    }
});
