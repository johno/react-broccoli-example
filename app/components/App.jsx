var React = require('react')
var HelloWorld = require('./HelloWorld.jsx')

module.exports = React.createClass({

  render: function() {
    return (
      <div className="container">
        <HelloWorld />
      </div>
    )
  }
})
