import AppDispatcher from '../../app.dispatcher.js';
import ListConstants from '../../app.constants.js';

let ListActions = {
    loadLists() {
        //Fake web call for now with timeout
        setTimeout(() => {
            //TODO replace with web call
            AppDispatcher.dispatch({
                type: ListConstants.GET_LISTS,
                lists: [{id: 1, name: "Test list"}]
            });
        }, 1000);
    }
};

export default ListActions;