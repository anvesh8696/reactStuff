////////////////////////////////////////////////////////////////////////////////
// Excercise:
//
// 1) Move the tabs component into the components folder.
// 2) Move the app component into the containers folder.
// 3) Ensure everything still works.
// 4)
// 3) Connect your store to the
// Move the activeTab state into Redux.
// Try to move towards redux folder as much as possible...
////////////////////////////////////////////////////////////////////////////////
var React = require('react');
var styles = require('./styles');
var data = require('./data');

var Tabs = React.createClass({

  propTypes: {
    data: React.PropTypes.array.isRequired,
    activeTabIndex: React.PropTypes.number.isRequired,
    onActivateTab: React.PropTypes.func.isRequired,
  },

  handleTabClick (activeTabIndex) {
    this.props.onActivateTab(activeTabIndex);
  },

  renderTabs () {
    return this.props.data.map((tab, index) => {
      var style = this.props.activeTabIndex === index ?
        styles.activeTab : styles.tab;
      var clickHandler = this.handleTabClick.bind(this, index);
      return (
        <div key={tab.name} style={style} onClick={clickHandler}>
          {tab.name}
        </div>
      );
    });
  },

  renderPanel () {
    var tab = this.props.data[this.props.activeTabIndex];
    return (
      <div>
        <p>{tab.description}</p>
      </div>
    );
  },

  render () {
    return (
      <div style={styles.app}>
        <div style={styles.tabs}>
          {this.renderTabs()}
        </div>
        <div style={styles.tabPanels}>
          {this.renderPanel()}
        </div>
      </div>
    );
  }
});

var App = React.createClass({
  getInitialState () {
    return {
      activeTabIndex: 0
    };
  },

  handleActivateTab (activeTabIndex) {
    this.setState({ activeTabIndex });
  },

  render () {
    return (
      <div>
        <h1>Props v. State</h1>
        <Tabs
          data={this.props.tabs}
          activeTabIndex={this.state.activeTabIndex}
          onActivateTab={this.handleActivateTab}
        />
      </div>
    );
  }
});

React.render(<App tabs={data}/>, document.body);

