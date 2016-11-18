import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.component.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class Main extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <App></App>
            </MuiThemeProvider>
        )
    }
}
ReactDOM.render(<Main />, document.getElementById('app'));