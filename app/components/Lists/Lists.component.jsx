import style from './_Lists.style.scss';

import React from 'react';
import ListStore from './Lists.store.js';
import ListActions from './Lists.actions';

export default class Lists extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            lists: ListStore.getState()
        };
    }

    componentDidMount() {
        this.storeSubscription = ListStore.addListener(() => {
            this.handleChange();
        });

        ListActions.loadLists();
    }

    componentWillUnmount() {
        this.storeSubscription.remove();
    }

    handleChange() {
        this.setState({lists: ListStore.getState()});
    }

    render() {
        let renderedLists = this.state.lists.map((list) => {
            return <li key={list.name}>{list.name}</li>
        });

        return (
            <div className="lists">
                <ul>
                    {renderedLists}
                </ul>
            </div>
        )
    }

}