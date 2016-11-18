import style from './_Lists.style.scss';

import React from 'react';

export default class Lists extends React.Component {

    render() {
        let renderedLists = this.props.lists.map((list) => {
            return <li>{list.name}</li>
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