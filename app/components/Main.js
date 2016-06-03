var React = require('react');
var ReactDom = require('react-dom');

var Main = React.createClass({
	render : function() {
		return (
			<div>
        		Hello World
        		{this.props.children}
      		</div>	
      	)
	}
});

module.exports = Main;