import style from './_Items.style.scss';

import React from 'react';

import ItemStore from '../../stores/Items.store.js';
import ItemActions from '../../actions/Items.actions';

import {List, ListItem} from 'material-ui/List';

export default class Items extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {
            itemList: ItemStore.getState()
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

    update() {
        this.setState({itemList: ItemStore.getState()});
    }

    render() {
        let items = this.state.itemList.items.map((item) => {
            return <ListItem key={item.name} primaryText={item.name}></ListItem>
        });

        return (
            <div className="items">
                <h1>Items for {this.state.itemList.name}</h1>
                <List>
                    {items}
                </List>
            </div>
        )
    }
}