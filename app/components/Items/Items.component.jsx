import style from './_Items.style.scss';

import React from 'react';

export default class Items extends React.Component {

    render() {
        return (
            <h1>Items for {this.props.params.id}</h1>
        )
    }
}