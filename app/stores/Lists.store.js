import {EventEmitter} from 'fbemitter';
import AppDispatcher from '../app.dispatcher.js';
import Actions from '../app.constants';


const CHANGE_EVENT = 'change';
let __emitter = new EventEmitter();
let lists = [];

let ListsStore = {
    getState() {
      return lists;
    },

    addListener: (callback) => {
        return __emitter.addListener(CHANGE_EVENT, callback);
    },
};

ListsStore.dispatchToken = AppDispatcher.register((action) => {
    switch (action.type) {
        case Actions.GET_LISTS:
            lists = action.lists;
            __emitter.emit(CHANGE_EVENT);
            break;
        case Actions.ADD_LIST:
            lists.push(action.list);
            __emitter.emit(CHANGE_EVENT);
            break;
        case Actions.DELETE_LIST:
            let listLocation = lists.indexOf(action.list);
            lists.splice(listLocation, 1);
            __emitter.emit(CHANGE_EVENT);
            break;
    }
});

export default ListsStore;