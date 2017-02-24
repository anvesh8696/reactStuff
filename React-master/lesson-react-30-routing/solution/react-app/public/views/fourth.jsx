'use strict';

var React = require('react');
var Link = require('react-router/lib/Link');

module.exports = React.createClass({

    displayName: 'fourth',

    render: function render() {
        return (
            <div id='fourth'>
                <h1>This is the fourth page</h1>
                <Link to="/">Go to the Home Page</Link>
                <h6>I am a React Router rendered view</h6>
                <Link to='/first'>Click to go to First</Link><br />
            </div>
        );
    }
});
