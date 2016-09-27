import React from 'react';
import {render} from 'react-dom';

const app = (
	<div className="wrapper">
		<div>
			<h1>Index</h1>
			<img className="lol" src="assets/lol.gif" />
		</div>
	</div>
);

render(app, document.querySelector('#app'));