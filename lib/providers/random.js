'use strict';

const _ = require('lodash');
const words = require('fs').readFileSync(require('word-list'), 'utf8').split('\n');

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

module.exports = { fetchTags };
