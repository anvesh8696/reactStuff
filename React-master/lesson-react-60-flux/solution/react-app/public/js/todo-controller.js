/**
 * Created by clboyd on 9/9/16.
 */

var $ = require('jquery');

var _csrf = '';

module.exports = {
    create: function (content, callback) {
        $.post('/api/todos',{ content: content, _csrf: _csrf }, function( model ) {
            _csrf = model._csrf;
            callback( model.todos );
        });
    },
    findAll: function ( callback ) {
        $.get( '/api/todos', function( model ) {
            _csrf = model._csrf;
            callback( model.todos );
        });
    },
    update: function (item, callback) {
        $.post('/api/todos/' + item.id, { content: item.content, _csrf: _csrf }, function( model ) {
            _csrf = model._csrf;
            callback( model.todos );
        });
    },
    delete: function (id, callback ) {
        $.post('/api/todos/' + id + '?_method=delete', { _csrf: _csrf }, function( model ) {
            _csrf = model._csrf;
            callback( model.todos );
        });
    }
};
