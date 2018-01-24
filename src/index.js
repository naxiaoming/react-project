import React from 'react';
import ReactDOM from 'react-dom';
import App from './javascripts/App';
import Home from './javascripts/AppMain/home';
import TuanGou from './javascripts/tuangou/tuangou';
import './stylesheets/index.scss';
import registerServiceWorker from './registerServiceWorker';
import {Router,Route,hashHistory,IndexRedirect,Redirect} from 'react-router'
let route=<Router history={hashHistory}>			
			<Route path='/' component={App}>
				<IndexRedirect to="home" />
				<Route path='/home' component={Home}/>
				<Route path='/tuangou' component={TuanGou}/>
				<Redirect from="*" to="home" />
			</Route>		
		</Router>
ReactDOM.render(route, document.getElementById('root'));
registerServiceWorker();
