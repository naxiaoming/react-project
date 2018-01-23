import React from 'react';
import ReactDOM from 'react-dom';
import App from './javascripts/App';
import TuanGou from './javascripts/tuangou/tuangou';
import './stylesheets/index.scss';
import registerServiceWorker from './registerServiceWorker';
import {Router,Route,hashHistory} from 'react-router'
let route=<Router history={hashHistory}>			
			<Route path='/' component={App}>
				<Route path='tuangou' component={TuanGou}/>
			</Route>		
		</Router>
ReactDOM.render(route, document.getElementById('root'));
registerServiceWorker();
