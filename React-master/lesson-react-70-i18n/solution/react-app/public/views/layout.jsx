'use strict';

var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({

    render: function render() {

        var msg = this.props.messages.layout;

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

            <a href="/setLanguage/en-us">{msg.english}</a>
            <br />
            <a href="/setLanguage/es-es">{msg.spanish}</a>

            {this.props.children}
            <script src='/bundle.js'></script>
            </body>
            </html>
        );
    }
});
