'use strict';

module.exports = function () {

    return function (req, res, next) {
        //Pick up the language cookie.
        var language = req.cookies.language;

        // the language variable e.g.  'en-us', 'es-es', 'language-country'

        //Set the locality for this response.
        // anemone-lingua will pick the appropriate bundle

        if (language) {
            var parts = language.split('-');
            var locale = {
                language: parts[0],
                country: parts[1]
            };
            res.locals.contentLocale = locale;
        }

        // bug in anemone-lingua
        res.locals.context = res.locals.context || {};

        next();
    };
};
