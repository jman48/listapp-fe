import style from './_Lists.style.scss';

import React from 'react';

import ListStore from '../../stores/Lists.store.js';
import ListActions from '../../actions/Lists.actions';
import ListItem from '../List/List.component.jsx';
import AddList from '../AddList/AddList.component.jsx';

import {List} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

/**
 * This component will retrieve and display a collection of lists
 */
export default class Lists extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            lists: ListStore.getState(),
            addDialogOpen: false
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
        this.setState({addDialogOpen: true});
    }

    closeDialog() {
        this.setState({addDialogOpen: false});
    }


    render() {
        let renderedLists = this.state.lists.map((list) => {
            return <ListItem key={list._id} list={list}></ListItem>
        });

        return (
            <div className="lists">
                <List>
                    {renderedLists}
                </List>

                <AddList open={this.state.addDialogOpen} onClose={this.closeDialog.bind(this)}></AddList>

                <FloatingActionButton
                    className="add-button"
                    onClick={this.openDialog.bind(this)}>
                    <ContentAdd/>
                </FloatingActionButton>
            </div>
        )
    }

}