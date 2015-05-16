var App = require('./App');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var util = require('./util.js');

var Routes = (
  <Route handler={App}>
    <Route name="/" handler={App}/>
  </Route>
);

var content = document.getElementById('app');
Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});

