import React from 'react';
import ReactDOM from 'react-dom';
import App from './javascripts/App';
import Home from './javascripts/AppMain/home';
import './stylesheets/index.scss';
import registerServiceWorker from './registerServiceWorker';
import {Router,Route,hashHistory,IndexRedirect,Redirect} from 'react-router'
let route=<Router history={hashHistory}>			
			<Route path='/' component={App}>
				<IndexRedirect to="home" />
				<Route path='/home' component={Home}/>
				<Redirect from="*" to="home" />
			</Route>		
		</Router>
ReactDOM.render(route, document.getElementById('root'));
registerServiceWorker();
