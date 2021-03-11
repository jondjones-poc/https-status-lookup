'use strict';
const httpData = require('./data/http.json');
const codesData = require('./data/codes.json');

const categoryCodeMapper = {
    "300": "3xx",
    "400": "4xx",
    "500": "5xx",
    "600": "6xx"
};

const getCategoryHeadings = () => httpData;

const getStatusCode = () => codesData;

const getStatusCodesByCategory = category => {
    if (category in categoryCodeMapper) {
        category = categoryCodeMapper[category];
    }
    return getStatusCode().filter((statusCode) => statusCode.categoryCode === category.toLowerCase());
};

const getStatusMessageForCode = statusCode => {
    const codes = getStatusCode()
        .filter((code) => code.statusCode === statusCode.toLowerCase())
        .map((map) => map.message);

    return codes && codes.length > 0
        ? codes[0]
        : null;
};

const guessTheStatusCode = statusCode => {
    const codes = getStatusCode();
    return codes[Math.floor(Math.random()*codes.length)].message;
};

module.exports.httpStatusLookup = { getCategoryHeadings, getStatusCode, getStatusCodesByCategory, getStatusMessageForCode, guessTheStatusCode };