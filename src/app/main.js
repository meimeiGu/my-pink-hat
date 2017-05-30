import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom'

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
		<BrowserRouter
			basename={"/"}
			forceRefresh={true}
			getUserConfirmation={ window.confirm}
			keyLength={6}
		>
		<Route exact path="/" component={IndexContainer}/>
		<Route path="/goods/:id" component={Container}/>
		<Route path="/orderCheckout" component={OrderContainer}/>
		<Route path="/joinGroup" component={JoinGroupContainer}/>
		<Route path="/personal" component={PersonalContainer}/>
		<Route path="/orders" component={OrdersContainer}/>
	</BrowserRouter>),
    document.getElementById('root')
)
