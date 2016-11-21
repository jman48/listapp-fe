import AppDispatcher from '../app.dispatcher.js';
import Constants from '../app.constants.js';
import axios from 'axios';

let ItemsActions = {
    /**
     * Load a list from our web service
     */
    loadList(listId) {
        axios.get(`${Constants.HOST}/lists/${listId}`).then((response) => {
            AppDispatcher.dispatch({
                type: Constants.GET_ITEMS,
                list: response.data
            });
        });
    },

    deleteItem(listId, itemId) {
        let url = `${Constants.HOST}/lists/${listId}/items/${itemId}`;
        axios.delete(url).then(() => {
            AppDispatcher.dispatch({
                type: Constants.DELETE_ITEM,
                item: itemId
            });
        });
    }
};

export default ItemsActions;