import styles from './_App.style.scss';

import React from 'react';
import Lists from '../Lists/Lists.component.jsx';
import {Router, Route, hashHistory} from 'react-router'

export default class App extends React.Component {

    render() {
        return (
            <div className="app">
                <h1>ListApp</h1>
                <Router history={hashHistory}>
                    <Route path="/" component={Lists}/>
                </Router>
            </div>
        );
    }

}