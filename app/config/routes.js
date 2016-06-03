var React = require('react');
var Main = require('../components/Main');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;


var routes = (
		<Router history={hashHistory}>
			<Route path="/" component={Main} >

			</Route>
		</Router>
);

module.exports = routes;