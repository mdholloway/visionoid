'use strict';

const _ = require('lodash');
// const preq = require('preq');
const words = require('fs').readFileSync(require('word-list'), 'utf8').split('\n');
const router = require('../lib/util').router();

function fetchTags(imageTitle, imageUrl) {
    const payload = {
        title: imageTitle,
        timestamp: Date.now(),
        provider: 'random',
        labels: _.sampleSize(words, 10).map((label) => ({ wikidata_id: `Q${_.random(0, 1000000)}`, label }))
    };
    const response = { headers: {}, body: payload };
    return Promise.resolve(response);
}

router.get('/tags', (req, res) => {
    const imageTitle = req.query.title;
    const imageUrl = req.query.url;
    // const kaskUrl = req.app.conf.kask_url;
    // return preq.get(`${kaskUrl}/${imageTitle}`)
        // .then(rsp => res.json(rsp.body.toString()))
        // .catch((err) => {
            // if (err.status === 404) {
                fetchTags(imageTitle, imageUrl).then((tagResponse) => {
                    const body = tagResponse.body;
                    // return preq.post(`${kaskUrl}/${title}`, body)
                    //     .then(() => res.json(body));
                    res.json(body);
                });
            // }
            // throw err;
        // });
});

module.exports = () => {

    return {
        path: '/',
        api_version: 1,
        skip_domain: true,
        router
    };

};
