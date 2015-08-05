var Marionette = require('backbone.marionette');

var Greeting = Marionette.ItemView.extend({
  el: '#app',
  className: 'greeting',
  template: function() {
    return (
      '<div class="greeting">' +
      '  <h1>Marionette Wires</h1>' +
      '  <p>An opinionated example application built with Marionette.js.</p>' +
      '</div>'
    );
  }
});

var greeting = new Greeting();

greeting.render();
