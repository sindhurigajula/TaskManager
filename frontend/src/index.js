import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

class AppWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userinfo: {},
            tasks: {}
        };
    }
    
    render() {
        return <App />
    }
}

ReactDOM.render(<AppWrapper />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
