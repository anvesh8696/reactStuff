
var Header = React.createClass( {
    render() {
        return (
            <div className="header"><h1>{this.props.header}</h1></div>
        );
    }
});

var Footer = React.createClass( {
    render() {
        return (
            <div className="footer"><h1>{this.props.footer}</h1></div>
        );
    }
});

var Nav = React.createClass( {
    render() {
        return (
            <div className="nav">{this.props.nav}</div>
        );
    }
});

var Middle = React.createClass( {
    render() {
        return (
            <div className="middle">{this.props.text}</div>
        );
    }
});

var FullPage = React.createClass({

    getInitialState() {
        return {
            header: 'This is the Header',
            footer: 'This is the Footer',
            nav: 'Nav'
        };
    },

    render() {
        return (
            <div className="fullPageBox">
                <Header header={this.state.header}/>
                <div className="middle">
                    <div className="half">
                        <Nav nav={this.state.nav}/>
                    </div>
                    <div className="half">
                        <Middle text="Hello, world."/>
                    </div>
                </div>
                <Footer footer={this.state.footer} />
            </div>
        );
    }

});

ReactDOM.render(
    <FullPage />, document.getElementById('fullPage')
);
