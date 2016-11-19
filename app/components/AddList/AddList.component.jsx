import style from './_AddList.style.scss';

import React, {PropTypes} from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import ListStore from '../Lists/Lists.store.js';
import ListActions from '../Lists/Lists.actions';

/**
 * This component will show a dialog to allow the user to enter a name for the new list
 */
export default class AddList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    closeDialog() {
        this.setState({value: ''});
        this.props.onClose();
    }

    inputChange(event) {
        this.setState({value: event.target.value});
    }

    addList() {
        ListActions.addList(this.state.value);
        this.closeDialog();
    }

    render() {
        const actions = [
            <FlatButton
                label="Create"
                primary={true}
                onTouchTap={this.addList.bind(this)}
            />
        ];

        return (
            <Dialog
                title="Create List"
                actions={actions}
                modal={false}
                open={this.props.open}
                onRequestClose={this.closeDialog.bind(this)}>

                <TextField
                    floatingLabelText="List Name"
                    value={this.state.value}
                    onChange={this.inputChange.bind(this)}/>
            </Dialog>
        )
    }
}

AddList.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func
};