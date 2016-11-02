import React from 'react';
import ReactDOM,{render} from 'react-dom';
import MainApp from '../containers/main_app/MainApp.js';

render(
		<MainApp text="hello world"/>,
		document.getElementById("container")
	)
