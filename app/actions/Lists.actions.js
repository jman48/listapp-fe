import AppDispatcher from '../app.dispatcher.js';
import Constants from '../app.constants.js';
import axios from 'axios';

let ListActions = {
    /**
     * Load all our lists from the web service
     */
    loadLists() {
        axios.get(`${Constants.HOST}/lists`).then((response) => {
            AppDispatcher.dispatch({
                type: Constants.GET_LISTS,
                lists: response.data
            });
        });
    },

    addList(newList) {
        axios.post(`${Constants.HOST}/lists`, {name: newList}).then((response) => {
            AppDispatcher.dispatch({
                type: Constants.ADD_LIST,
                list: response.data
            });
        });
    },

    deleteList(list) {
        axios.delete(`${Constants.HOST}/lists/${list._id}`).then(() => {
            AppDispatcher.dispatch({
                type: Constants.DELETE_LIST,
                list: list
            });
        });
    }
};

export default ListActions;