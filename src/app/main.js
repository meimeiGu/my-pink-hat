import React from 'react';
import ReactDom from 'react-dom';
import { Link, Route,  HashRouter } from 'react-router-dom'
import Container from '../content/Container';
import OrderContainer from '../orderCheckout/OrderContainer'
import IndexContainer from '../index/IndexContainer'
import '../../styles/global.css'
import '../../styles/index.css'
import '../../styles/ordercheckout.css'
import '../../styles/container.css'
ReactDom.render((
	<HashRouter>
		<div>
		<Route exact path="/" component={IndexContainer}/>
		<Route path="/goods/:id" component={Container}/>
		<Route path="/orderCheckout" component={OrderContainer}/>
		</div>
	</HashRouter>),

    document.getElementById('root')
)
