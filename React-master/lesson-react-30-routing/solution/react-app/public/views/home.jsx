'use strict';

var React = require('react');
var Link = require('react-router/lib/Link');

module.exports = React.createClass({

    displayName: 'home',

    render: function render() {
        return (
            <div id='home'>
                <h1>This is the home page</h1>
                <h6>I am a React Router rendered view</h6>
                <Link to='/first'>Click to go to First</Link><br />
                <Link to='/second'>Click to go to Second</Link><br />
                <Link to='/third'>Click to go to Third</Link><br />
                <Link to='/fourth'>Click to go to Fourth</Link><br />
            </div>
        );
    }
});
