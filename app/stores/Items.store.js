import {EventEmitter} from 'fbemitter';
import AppDispatcher from '../app.dispatcher.js';
import Actions from '../app.constants';


const CHANGE_EVENT = 'change';
let __emitter = new EventEmitter();
let items = [];

let ItemsStore = {
    getState() {
      return items;
    },

    addListener: (callback) => {
        return __emitter.addListener(CHANGE_EVENT, callback);
    },
};

ItemsStore.dispatchToken = AppDispatcher.register((action) => {
    switch (action.type) {
        case Actions.GET_ITEMS:
            items = action.items;
            __emitter.emit(CHANGE_EVENT);
            break;
    }
});

export default ItemsStore;