import style from './_List.style.scss';

import React, {PropTypes} from 'react';

/**
 * This component will display a single list
 */
export default class List extends React.Component {
    render() {
        return (
            <li className="list">
                {this.props.list.name}
            </li>
        )
    }
}

List.propTypes = {
    list: PropTypes.object.isRequired
};