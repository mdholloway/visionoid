'use strict';

const _ = require('lodash');

const prodLabels = [
    'Q2', // Earth
    'Q5', // human
    'Q68', // computer
    'Q81', // carrot
    'Q89', // apple
    'Q144', // dog
    'Q146', // house cat
    'Q147', // kitten
    'Q152', // fish
    'Q165', // sea
    'Q177', // pizza
    'Q178', // pasta
    'Q196', // cherry
    'Q197', // airplane
    'Q282', // wine
    'Q283', // water
    'Q287', // wood
    'Q349', // sport
    'Q376', // clock
    'Q405', // Moon
    'Q430', // dinosaur
    'Q446', // wheel
    'Q467', // woman
    'Q503', // banana
    'Q506', // flower
    'Q523', // star
    'Q525', // Sun
    'Q527', // sky
    'Q532', // village
];

const betaLabels = [
    'Q499893', // kitten
    'Q536570', // sculpture
    'Q536571', // pottery
    'Q536572', // headband
    'Q536573', // hand
    'Q536574', // bunny
    'Q536575', // helmet
    'Q536576', // fur
    'Q536577', // hat
    'Q536578', // jersey
    'Q536579', // handlebars
    'Q536580', // window
    'Q536581', // couch
    'Q536582', // pillow
    'Q536583', // bookshelf
    'Q536584', // floor
    'Q536585', // rug
    'Q536586', // sidewalk
    'Q536587', // street
    'Q536588', // sign
    'Q500973', // dog
    'Q536589', // cushion
    'Q536590', // paw
    'Q536591', // whiskers
    'Q536592', // mushroom
    'Q536593', // leaves
    'Q536594', // soil
    'Q536595', // snow
    'Q536596', // house
    'Q536597', // tree
    'Q536598', // nose
    'Q536599', // wall
    'Q536600', // moose
    'Q536601', // horn
    'Q536602', // wasp
    'Q536603', // fruit
    'Q536604', // wing
    'Q536605', // leg
    'Q536606', // blanket
];

const localLabels = ['Q1','Q2','Q3','Q4','Q5','Q6','Q7','Q8','Q9','Q10'];

function getLabelsForTarget(target) {
    if (target === 'local') {
        return localLabels;
    }
    if (target === 'beta') {
        return betaLabels;
    }
    return prodLabels;
}

function fetchTags(imageTitle, imageUrl, target) {
    const labels = getLabelsForTarget(target);
    const payload = {
        title: imageTitle,
        timestamp: Date.now(),
        provider: 'common',
        labels: _.sampleSize(labels, 10).map(id => ({ wikidata_id: id }))
    };
    const response = { headers: {}, body: payload };
    return Promise.resolve(response);
}

module.exports = { fetchTags };
