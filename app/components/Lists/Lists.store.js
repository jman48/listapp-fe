import {EventEmitter} from 'fbemitter';
import AppDispatcher from '../../app.dispatcher.js';
import ListConstants from '../../app.constants';


const CHANGE_EVENT = 'change';
let __emitter = new EventEmitter();
let lists = [];

let ListStore = {
    getState() {
      return lists;
    },

    addListener: (callback) => {
        return __emitter.addListener(CHANGE_EVENT, callback);
    },
};

ListStore.dispatchToken = AppDispatcher.register((action) => {
    switch (action.type) {
        case ListConstants.GET_LISTS:
            lists = action.lists;
            __emitter.emit(CHANGE_EVENT);
            break;
        case ListConstants.ADD_LIST:
            this.list.push(action.list);
            __emitter.emit(CHANGE_EVENT);
            break;
    }
});

export default ListStore;