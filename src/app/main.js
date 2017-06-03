import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter ,Switch } from 'react-router-dom'
import {HashRouter as Router, Route,} from 'react-router-dom'
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
const base = document.querySelector('base')
const baseHref = base ? base.getAttribute('href') : '/'

ReactDom.render((
<BrowserRouter basename={baseHref.replace(/\/$/, '')}>
		<Switch>
			<Route exact path="/" component={IndexContainer}/>
			<Route path="/goods/:id" component={Container}/>
			<Route path="/orderCheckout" component={OrderContainer}/>
			<Route path="/joinGroup" component={JoinGroupContainer}/>
			<Route path="/personal" component={PersonalContainer}/>
			<Route path="/orders" component={OrdersContainer}/>
		</Switch>
</BrowserRouter>
	),
    document.getElementById('root')
)
