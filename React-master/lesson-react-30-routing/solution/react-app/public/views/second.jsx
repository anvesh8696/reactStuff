'use strict';

var React = require('react');
var Link = require('react-router/lib/Link');

module.exports = React.createClass({

    displayName: 'second',

    render: function render() {
        var props = JSON.stringify( this.props );
        return (
            <div id='second'>
                <div> props = {props} </div>
                <h1>This is the second page</h1>
                <Link to="/">Go to the Home Page</Link>
                <h6>I am a React Router rendered view</h6>
                <Link to='/third'>Click to go to Third</Link><br />
            </div>
        );
    }
});
