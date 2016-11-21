import style from './_AddDialog.style.scss';

import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class AddDialog extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {value: ''}
    }

    add() {
        this.props.onAdd(this.state.value);
        this.closeDialog();
    }

    inputChange(event) {
        this.setState({value: event.target.value});
    }

    closeDialog() {
        this.setState({value: ''});
        this.props.onClose();
    }

    render() {
        const actions = [
            <FlatButton
                label={this.props.label}
                primary={true}
                onTouchTap={this.add.bind(this)} />
        ];

        return (
            <Dialog
                title={this.props.title}
                actions={actions}
                modal={false}
                open={this.props.open}
                onRequestClose={this.closeDialog.bind(this)}>

                <TextField
                    floatingLabelText={this.props.input}
                    value={this.state.value}
                    onChange={this.inputChange.bind(this)}/>
            </Dialog>
        );

    }
}

AddDialog.defaultProps = {
    input: 'Name',
    label: 'Add'
};

AddDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    onAdd: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    label: PropTypes.string,
    input: PropTypes.string
};
