import AppDispatcher from '../../app.dispatcher.js';
import ListConstants from '../../app.constants.js';

let ListActions = {
    /**
     * Load all our lists from the web service
     */
    loadLists() {
        //Fake web call for now with timeout
        setTimeout(() => {
            AppDispatcher.dispatch({
                type: ListConstants.GET_LISTS,
                lists: [{id: 1, name: "Test list"}]
            });
        }, 1000);
    },

    addList(newList) {
        AppDispatcher.dispatch({
            type: ListConstants.ADD_LIST,
            list: {name: newList}
        });
    }
};

export default ListActions;