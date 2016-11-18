import styles from './_App.style.scss';

import React from 'react';
import Lists from '../Lists/Lists.component.jsx';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;

        //Used just for development
        this.lists = [{name: "test list 1"}];
    }

    render() {
        return (
            <div className="app">
                <h1>Hello !</h1>
                <Lists lists={this.lists}></Lists>
            </div>
        );
    }

}