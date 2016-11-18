import styles from './_App.style.scss';

import React from 'react';
import Lists from '../Lists/Lists.component.jsx';

export default class App extends React.Component {

    render() {
        return (
            <div className="app">
                <h1>Hello !</h1>
                <Lists></Lists>
            </div>
        );
    }

}