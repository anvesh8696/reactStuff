'use strict';

var React = require('react');
var Link = require('react-router/lib/Link');
var Todos = require('./todos.jsx');

module.exports = React.createClass({

    displayName: 'status',

    getInitialState() {
        return {
            number: 1
        }
    },

    getCountMessage() {
        switch (this.state.number) {
            case 0: return 'There is nothing to TODO. Enter one?';
            case 1: return 'There is 1 TODO.';
            default: return 'There are ' + this.state.number + ' TODOs';
        }
    },

    render: function render() {
        return (
            <div id='status'>
                <h1>This is the status page</h1>
                <h1>{this.getCountMessage()}</h1>
            </div>
        );
    }
});
