import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Post from './components/Post';
import Feed from './components/Feed'
// import Dashboard from './components/Dashboard/Dashboard';
export default (
	<Switch>
			<Route exact path="/" component={Auth}/>
			<Route path="/create_post" component={Post}/>
			<Route path="/feed" component={Feed}/>
	</Switch>
);