import style from './_Items.style.scss';

import React, {PropTypes} from 'react';

import ItemActions from '../../actions/Items.actions.js';

import {ListItem} from 'material-ui/List';
import ContentClear from 'material-ui/svg-icons/content/clear';

export default class Item extends React.Component {

    deleteItem() {
        ItemActions.deleteItem(this.props.list, this.props.item._id);
    }

    render() {
        const deleteButton = (
            <ContentClear onClick={this.deleteItem.bind(this)}/>
        );

        return (
            <ListItem
                primaryText={this.props.item.name}
                rightIcon={deleteButton} />
        );
    }
}

Item.propType = {
    item: PropTypes.object.isRequired,
    list: PropTypes.string.isRequired
};