import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, useRouterHistory } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

import App from './components/app';
import Index from './components/index';
import EventDetails from './components/event-details';
import EventCreate from './components/event-create';
import EventUpdate from './components/event-update';

const history = useRouterHistory(createHashHistory)({ queryKey: false });

render((
<Router history={history}>
	<Route path="/" component={App}>
		<IndexRoute component={Index} />
		<Route path="/event/create" component={EventCreate} />
		<Route path="/event/:id/update" component={EventUpdate} />
		<Route path="/event/:id" component={EventDetails} />
	</Route>
</Router>
), document.querySelector('#app'));