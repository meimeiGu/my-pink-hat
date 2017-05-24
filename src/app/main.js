import React from 'react';
import ReactDom from 'react-dom';
import { Link, Route,  HashRouter } from 'react-router-dom'
import Container from '../content/Container';
import OrderContainer from '../orderCheckout/OrderContainer'
import IndexContainer from '../index/IndexContainer'
import JoinGroupContainer from '../joinGroup/JoinGroupContainer'
import '../../styles/global.css'
import '../../styles/index.css'
import '../../styles/ordercheckout.css'
import '../../styles/container.css'
import '../../styles/group.css'
ReactDom.render((
	<HashRouter>
		<div>
		<Route exact path="/" component={IndexContainer}/>
		<Route path="/goods/:id" component={Container}/>
		<Route path="/orderCheckout" component={OrderContainer}/>
		<Route path="/joinGroup" component={JoinGroupContainer}/>
		</div>
	</HashRouter>),

    document.getElementById('root')
)
