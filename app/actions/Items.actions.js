import AppDispatcher from '../app.dispatcher.js';
import Constants from '../app.constants.js';
import axios from 'axios';

let ItemsActions = {
    /**
     * Load all our lists from the web service
     */
    loadItems(listId) {
        axios.get(`${Constants.HOST}/lists/${listId}`).then((response) => {
            AppDispatcher.dispatch({
                type: Constants.GET_ITEMS,
                items: response.data
            });
        });
    }
};

export default ItemsActions;