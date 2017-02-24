'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Layout = require('./public/views/layout.jsx');
var Todos = require('./public/views/todos.jsx');
var Home = require('./public/views/home.jsx');

var routes = module.exports = (
    <Router>
        <Route path='/' component={Layout}>
            <IndexRoute component={Home} />
            <Route path="/todos" component={Todos} />
        </Route>
    </Router>
);
