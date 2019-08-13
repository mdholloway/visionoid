'use strict';

const _ = require('lodash');
const labels = _.toPairs({
    Q2: "Earth",
    Q5: "human",
    Q68: "computer",
    Q81: "carrot",
    Q89: "apple",
    Q144: "dog",
    Q146: "house cat",
    Q147: "kitten",
    Q152: "fish",
    Q165: "sea",
    Q177: "pizza",
    Q178: "pasta",
    Q196: "cherry",
    Q197: "airplane",
    Q282: "wine",
    Q283: "water",
    Q287: "wood",
    Q349: "sport",
    Q376: "clock",
    Q405: "Moon",
    Q430: "dinosaur",
    Q446: "wheel",
    Q467: "woman",
    Q503: "banana",
    Q506: "flower",
    Q523: "star",
    Q525: "Sun",
    Q527: "sky",
    Q532: "village"
});

function fetchTags(imageTitle, imageUrl) {
    const payload = {
        title: imageTitle,
        timestamp: Date.now(),
        provider: 'common',
        labels: _.sampleSize(labels, 10).map((pair) => ({ wikidata_id: pair[0], label: pair[1] }))
    };
    const response = { headers: {}, body: payload };
    return Promise.resolve(response);
}

module.exports = { fetchTags };
