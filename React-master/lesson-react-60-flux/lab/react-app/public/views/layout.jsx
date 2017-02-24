'use strict';

var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({

    render: function render() {

        return (
            <html>
            <head>
                <meta charSet='utf-8' />
                <title>
                    {this.props.title}
                </title>
                <link rel='stylesheet' href='/css/styles.css' />
            </head>
            <body>
            {this.props.children}
            <script src='/bundle.js'></script>
            </body>
            </html>
        );
    }
});
