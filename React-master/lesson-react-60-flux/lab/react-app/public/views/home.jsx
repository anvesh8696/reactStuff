'use strict';

var React = require('react');
var Link = require('react-router/lib/Link');
var Todos = require('./todos.jsx');
var Status = require('./status.jsx');

module.exports = React.createClass({

    displayName: 'home',

    render: function render() {
        return (
            <div id='home'>
                <h1>This is the home page</h1>
                <div>
                    <div className="half">
                        <Status />
                    </div>

                    <div className="half">
                        <Todos />
                    </div>
                </div>
            </div>
        );
    }
});
