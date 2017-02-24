'use strict';

var TodosModel = require('../../models/todos');

/**
 * Todo is defined as { id: ..., content: ''}
 *
 * @returns {string}
 */
function uuid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

module.exports = function (router) {

    var model = new TodosModel();

    router.get('/', function (req, res) {

        model._csrf = res.locals._csrf;

        res.json(model);

    });

    /**
     * Create a new todo
     */
    router.post('/', function (req, res) {
        var todo = {
            id: uuid(),
            content: req.body.content
        };
        model.todos.push(todo);
        res.json(model);
    });

    /**
     * Delete the todo with the input parameter
     */
    router.delete('/:id', function (req, res) {
        var id = req.params.id;

        var todos = model.todos.filter(function (todo) {
            return todo.id !== id;
        });

        model.todos = todos;
        res.json(model);
    });

};
