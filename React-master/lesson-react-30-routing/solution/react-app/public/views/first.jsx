'use strict';

var React = require('react');
var Link = require('react-router/lib/Link');
var Second = require('./second.jsx');

module.exports = React.createClass({

    displayName: 'first',

    render: function render() {
        var props = JSON.stringify( this.props );
        return (
            <div id='first'>
                <Second abc="abc" def="def" />
                <div> props = {props} </div>
                <h1>This is the first page</h1>
                <Link to="/">Go to the Home Page</Link>
                <h6>I am a React Router rendered view</h6>
                <Link to='/second'>Click to go to Second</Link><br />
            </div>
        );
    }
});
