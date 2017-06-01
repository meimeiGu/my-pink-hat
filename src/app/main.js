import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter,Switch } from 'react-router-dom'
import {BrowserRouter as Router, Route,} from 'react-router-dom'
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
			<Route exact path="/my-pink-hat" component={IndexContainer}/>
			<Route path="/my-pink-hat/goods/:id" component={Container}/>
			<Route path="/my-pink-hat/orderCheckout" component={OrderContainer}/>
			<Route path="/my-pink-hat/joinGroup" component={JoinGroupContainer}/>
			<Route path="/my-pink-hat/personal" component={PersonalContainer}/>
			<Route path="/my-pink-hat/orders" component={OrdersContainer}/>
		</Switch>
</BrowserRouter>
	),
    document.getElementById('root')
)
