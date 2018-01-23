import React from 'react';
import ReactDOM from 'react-dom';
import App from './javascripts/App';
import registerServiceWorker from './registerServiceWorker';
import {Router,Route,hashHistory} from 'react-router'
let route=<Router history={hashHistory}>			
			<Route path='/' component={App}>
				
			</Route>		
		</Router>
ReactDOM.render(route, document.getElementById('root'));
registerServiceWorker();
