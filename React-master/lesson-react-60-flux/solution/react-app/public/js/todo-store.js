/**
 * Created by clboyd on 9/16/16.
 */

var Dispatcher = require('./dispatcher.js');
var constants = require('./constants.js');
var controller = require('./todo-controller.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var todos = [];

function emitChangeEvent() {
    TodoStore.emitChange();
}

var TodoStore = assign({}, EventEmitter.prototype, {

    getAll: function () {
        return todos;
    },

    emitChange: function() {
        this.emit( CHANGE_EVENT );
    },

    registerChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

});


Dispatcher.register(function (action) {

    switch (action.actionType) {

        case constants.TODO_CREATE:
            controller.create(action.content, function (results) {
                todos = results;
                emitChangeEvent();
            });
            break;

        case constants.TODO_DELETE:
            controller.delete(action.id, function (results) {
                todos = results;
                emitChangeEvent();
            });
            break;

        case constants.TODO_FIND_ALL:
            controller.findAll(function (results) {
                todos = results;
                emitChangeEvent();
            });
            break;

        case constants.TODO_UPDATE:
            var item = {
                id: action.id,
                content: action.content
            };
            controller.update(item, function (results) {
                todos = results;
                emitChangeEvent();
            });
            break;

    }
});

module.exports = TodoStore;

