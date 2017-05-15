
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import Container from '../content/Container';
import IndexContainer from '../index/IndexContainer'
import '../../styles/global.css'
ReactDom.render((
	<Router history={hashHistory}>
		<Route path="/" component={IndexContainer}/>
		<Route path="/goods" component={Container}/>

	</Router>),
    document.getElementById('root')
)
