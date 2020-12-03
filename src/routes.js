import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Recipes from './components/Recipes';
import Feed from './components/Feed'


export default (
	<Switch>
			<Route exact path="/" component={Auth}/>
			<Route path="/create_recipe" component={Recipes}/>
			<Route path="/feed" component={Feed}/>
	</Switch>
);