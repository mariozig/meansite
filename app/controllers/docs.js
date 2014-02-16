'use strict';

exports.render = function(req, res) {
    res.render('docs', {
        user: req.user ? JSON.stringify(req.user) : 'null'
    });
};
