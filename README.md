# https-status-lookup - By Jon D Jones 💥

NPM package ou acn use to get HTTP Status Code Information

**Download**: [https://www.npmjs.com/package/https-status-lookup](https://www.npmjs.com/package/https-status-lookup)

👾☄️👻👺🕹️

## Installation
```
npm install https-status-lookup
```

## Reference
- [httpStatusLookup]
    - [getCategoryHeadings]
    - [getStatusCode]
    - [getStatusCodesByCategory]
    - [getStatusMessageForCode]
    - [guessTheStatusCode]

    #### Example

```JavaScript
const httpStatusLookup = require('../index').httpStatusLookup;

const result = httpStatusLookup.getStatusCode();

const result = httpStatusLookup.getStatusCodesByCategory('4xx');

const result = httpStatusLookup.getStatusCodesByCategory('400');

const result = httpStatusLookup.guessTheStatusCode();
```

## Testing

```bash
npm test

```

## Build and deployment

[![Build Status](https://travis-ci.org/jondjones/https-status-lookup.svg?branch=master)](https://travis-ci.org/jondjones/https-status-lookup)

[![Coverage Status](https://coveralls.io/repos/github/jondjones/https-status-lookup/badge.svg?branch=master)](https://coveralls.io/github/jondjones/https-status-lookup?branch=master)
