import style from './_List.style.scss';

import React, {PropTypes} from 'react';
import IconButton from 'material-ui/IconButton';
import ContentClear from 'material-ui/svg-icons/content/clear';

import ListActions from '../Lists/Lists.actions';

/**
 * This component will display a single list
 */
export default class List extends React.Component {

    deleteList() {
        ListActions.deleteList(this.props.list);
    }

    render() {
        return (
            <li className="list">
                {this.props.list.name}
                <IconButton onClick={this.deleteList.bind(this)}>
                    <ContentClear />
                </IconButton>
            </li>
        )
    }
}

List.propTypes = {
    list: PropTypes.object.isRequired
};