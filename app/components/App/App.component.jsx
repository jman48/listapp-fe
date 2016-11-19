import styles from './_App.style.scss';

import React from 'react';
import {Router, Route, hashHistory} from 'react-router'

import Lists from '../Lists/Lists.component.jsx';
import Items from '../Items/Items.component.jsx';

import AppBar from 'material-ui/AppBar';

export default class App extends React.Component {

    render() {
        return (
            <div className="app">
                <AppBar
                    title="List App"
                    showMenuIconButton={false}/>

                <Router history={hashHistory}>
                    <Route path="/" component={Lists}/>
                    <Route path="/lists/:id" component={Items}/>
                </Router>
            </div>
        );
    }

}