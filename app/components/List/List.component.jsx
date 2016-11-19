import style from './_List.style.scss';

import React, {PropTypes} from 'react';
import {Link} from 'react-router'

import ListActions from '../../actions/Lists.actions';

import ContentClear from 'material-ui/svg-icons/content/clear';
import {ListItem} from 'material-ui/List';

/**
 * This component will display a single list
 */
export default class List extends React.Component {

    deleteList() {
        ListActions.deleteList(this.props.list);
    }

    render() {
        const deleteButton = (
            <ContentClear onClick={this.deleteList.bind(this)}/>
        );

        const link = `#/lists/${this.props.list._id}`;

        return (
            <ListItem className="list-item"
                      primaryText={this.props.list.name}
                      rightIcon={deleteButton}
                      href={link}>
            </ListItem>
        )
    }
}

List.propTypes = {
    list: PropTypes.object.isRequired
};