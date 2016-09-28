import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, useRouterHistory } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

import App from './app';
import Index from './containers/index';
import EventCreate from './containers/event-create';
import EventUpdate from './containers/event-update';

const history = useRouterHistory(createHashHistory)({ queryKey: false });

render((
<Router history={history}>
	<Route path="/" component={App}>
		<IndexRoute component={Index} />
		<Route path="/event/create" component={EventCreate} />
		<Route path="/event/:id/update" component={EventUpdate} />
	</Route>
</Router>
), document.querySelector('#app'));