import style from './_AddList.style.scss';

import React, {PropTypes} from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

/**
 * This component will show a dialog to allow the user to enter a name for the new list
 */
export default class AddList extends React.Component {

    closeDialog() {
        this.props.onClose();
    }

    render() {
        const actions = [
            <FlatButton
                label="Create"
                primary={true}
                onTouchTap={this.handleClose}
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
                    floatingLabelText="List Name"/>
            </Dialog>
        )
    }
}

AddList.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func
};