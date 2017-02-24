'use strict';

var React = require('react');
var Link = require('react-router/lib/Link');

module.exports = React.createClass({

    displayName: 'third',

    render: function render() {
        return (
            <div id='third'>
                <h1>This is the third page</h1>
                <Link to="/">Go to the Home Page</Link>
                <h6>I am a React Router rendered view</h6>
                <Link to='/fourth'>Click to go to Fourth</Link><br />
            </div>
        );
    }
});
