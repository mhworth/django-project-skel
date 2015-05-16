'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var App, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    App = require('../../../src/scripts/components/App.js');
    component = React.createElement(App);
  });

  it('should create a new instance of App', function () {
    expect(component).toBeDefined();
  });
});
