'use strict';

module.exports = function TodosModel() {
    return {
        name: 'todos',
        todos: [ { id: '1', content: 'First'}],
        _csrf: ''
    };
};
