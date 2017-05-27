import React from 'react';
import ReactDom from 'react-dom';
import { Link, Route,  HashRouter } from 'react-router-dom'
import Container from '../content/Container';
import OrderContainer from '../orderCheckout/OrderContainer'
import IndexContainer from '../index/IndexContainer'
import PersonalContainer from '../personal/PersonalContainer'
import JoinGroupContainer from '../joinGroup/JoinGroupContainer'
import OrdersContainer from '../orders/OrdersContainer'
import '../../styles/global.css'
import '../../styles/index.css'
import '../../styles/ordercheckout.css'
import '../../styles/container.css'
import '../../styles/group.css'
import '../../styles/personal.css'
import '../../styles/orders.css'
ReactDom.render((
	<HashRouter>
		<div>
		<Route exact path="/" component={IndexContainer}/>
		<Route path="/goods" component={Container}/>
		<Route path="/orderCheckout" component={OrderContainer}/>
		<Route path="/joinGroup" component={JoinGroupContainer}/>
		<Route path="/personal" component={PersonalContainer}/>
		<Route path="/orders" component={OrdersContainer}/>
		</div>
	</HashRouter>),

    document.getElementById('root')
)
