'use strict';

var React = require('react');

var Intl = require('react-intl');
var FormattedMessage = Intl.FormattedMessage;
var IntlProvider = Intl.IntlProvider;

module.exports = React.createClass({


    render: function render() {

        var msgs = this.props.messages.layout;
        var data = Object.assign({}, this.props, this.state);

        var format = (key) =>  <FormattedMessage id={'layout.' + key} defaultMessage={msgs[key]} values={data}/>;

        return (
            <html>
            <head>
                <meta charSet='utf-8'/>
                <title>
                    {this.props.title}
                </title>
                <link rel='stylesheet' href='/css/styles.css'/>
            </head>
            <body>
            <IntlProvider>
                <div>
                    <a href="/setLanguage/en-us">{format('english')}</a>
                    <br />
                    <a href="/setLanguage/es-es">{format('spanish')}</a>
                </div>
            </IntlProvider>

            {this.props.children}
            <script src='/bundle.js'></script>
            </body>
            </html>
        );
    }
});
