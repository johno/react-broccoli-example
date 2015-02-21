var React = require('react')
var App = React.createFactory(require('./components/App.jsx'))

React.render(
  App(data),
  document.body
)
