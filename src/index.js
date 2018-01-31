import React from 'react';
import ReactDOM from 'react-dom';
import App from './javascripts/App';
import Home from './javascripts/AppMain/home';
import City from './javascripts/AppMain/city';
import Seach from './javascripts/AppMain/seach';
import TuanGou from './javascripts/tuangou/tuangou';
import Details from './javascripts/details/details';
import './stylesheets/index.scss';
import registerServiceWorker from './registerServiceWorker';
import {Router,Route,hashHistory,IndexRedirect,Redirect} from 'react-router'
let route=<Router history={hashHistory}>			
			<Route path='/' component={App}>
				<IndexRedirect to="home" />
				<Route path='/home' component={Home}/>
				<Router path='/choiceCity' component={City}/>
				<Router path='/seach' component={Seach}/>
				<Route path='/tuangou' component={TuanGou}/>
				<Route path='/details/:id' component={Details}/>
				<Redirect from="*" to="home" />
			</Route>		
		</Router>
ReactDOM.render(route, document.getElementById('root'));
registerServiceWorker();
