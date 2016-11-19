import {EventEmitter} from 'fbemitter';
import AppDispatcher from '../app.dispatcher.js';
import Actions from '../app.constants';


const CHANGE_EVENT = 'change';
let __emitter = new EventEmitter();
let list = {items: []}; //Initialise with an empty list

/**
 * Item store is used to host 1 list and its items
 */
let ItemsStore = {
    getState() {
      return list;
    },

    addListener: (callback) => {
        return __emitter.addListener(CHANGE_EVENT, callback);
    },
};

ItemsStore.dispatchToken = AppDispatcher.register((action) => {
    switch (action.type) {
        case Actions.GET_ITEMS:
            list = action.list;
            __emitter.emit(CHANGE_EVENT);
            break;
    }
});

export default ItemsStore;