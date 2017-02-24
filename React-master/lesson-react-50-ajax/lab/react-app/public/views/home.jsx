'use strict';

var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({

    render: function render() {

        return (
            <div>
                <h1>Welcome to React</h1>
                <Link to="/todos">Link to the TODOs app</Link>
                </div>
        );
    }
});
