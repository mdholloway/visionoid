'use strict';

const router = require('../lib/util').router();

router.get('/labels', (req, res) => {
    const imageTitle = req.query.title;
    const imageUrl = req.query.url;
    const provider = req.query.provider || 'common';
    require(`../lib/providers/${provider}`).fetchTags(imageTitle, imageUrl)
        .then((tagResponse) => {
            const body = tagResponse.body;
            res.json(body);
        });
});

module.exports = () => {

    return {
        path: '/',
        api_version: 1,
        skip_domain: true,
        router
    };

};
