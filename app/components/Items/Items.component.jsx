import style from './_Items.style.scss';

import React from 'react';

import ItemStore from '../../stores/Items.store.js';
import ItemActions from '../../actions/Items.actions';
import Item from '../Item/Item.component.jsx';
import AddDialog from '../AddDialog/AddDialog.component.jsx';

import {List} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class Items extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {
            itemList: ItemStore.getState(),
            addDialogOpen: false
        }
    }

    componentDidMount() {
        this.storeSubscription = ItemStore.addListener(() => {
            this.update();
        });

        ItemActions.loadList(this.props.params.id);
    }

    componentWillUnmount() {
        this.storeSubscription.remove();
    }

    openDialog() {
        this.setState({addDialogOpen: true});
    }

    closeDialog() {
        this.setState({addDialogOpen: false});
    }

    update() {
        this.setState({itemList: ItemStore.getState()});
    }

    onAdd(newItem) {
        ItemActions.addItem(this.state.itemList._id, newItem);
        this.closeDialog();
    }

    render() {
        let items = this.state.itemList.items.map((item) => {
            return <Item key={item._id} item={item} list={this.state.itemList._id}/>
        });

        return (
            <div className="items">
                <h1>Items for {this.state.itemList.name}</h1>
                <List>
                    {items}
                </List>

                <AddDialog
                    open={this.state.addDialogOpen}
                    title="Add New Item"
                    onAdd={this.onAdd.bind(this)}
                    onClose={this.closeDialog.bind(this)}/>

                <FloatingActionButton
                    className="add-button"
                    onClick={this.openDialog.bind(this)}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        )
    }
}