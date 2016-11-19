import style from './_Lists.style.scss';

import React from 'react';
import ListStore from './Lists.store.js';
import ListActions from './Lists.actions';
import List from '../List/List.component.jsx';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddList from '../AddList/AddList.component.jsx';

/**
 * This component will retrieve and display a collection of lists
 */
export default class Lists extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            lists: ListStore.getState(),
            dialogOpen: false
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

    openDialog() {
        this.setState({dialogOpen: true});
    }

    closeDialog() {
        this.setState({dialogOpen: false});
    }


    render() {
        let renderedLists = this.state.lists.map((list) => {
            return <List key={list.id} list={list}></List>
        });

        return (
            <div className="lists">
                <ul>
                    {renderedLists}
                </ul>

                <AddList open={this.state.dialogOpen} onClose={this.closeDialog.bind(this)}></AddList>

                <FloatingActionButton onClick={this.openDialog.bind(this)}>
                    <ContentAdd/>
                </FloatingActionButton>
            </div>
        )
    }

}