'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('font-awesome/scss/font-awesome.scss');
require('bootstrap/dist/css/bootstrap.css');
require('../../styles/main.sass');

var App = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <div>Hello World!</div>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = App;
