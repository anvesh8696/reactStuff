'use strict';

var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();

    router.get('/setLanguage/:lang', function (req, res) {
        res.cookie('language', req.params.lang);
        res.redirect('/');
    });

    router.get('/*', function (req, res) {

//        res.send('<code><pre>' + JSON.stringify(model, null, 2) + '</pre></code>');
        res.render( req.url, model );

    });

};
