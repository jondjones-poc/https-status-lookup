'use strict';

const should = require('chai').should();
const httpStatusLookup = require('../index').httpStatusLookup;


describe('When httpStatusLookup.getCategoryHeadings() is called', function() {
    it('then data should be returned', function() {
        var result = httpStatusLookup.getCategoryHeadings();
        should.exist(result);
    });
});

describe('When httpStatusLookup.getStatusCode() is called', function() {
    it('then data should be returned', function() {
        var result = httpStatusLookup.getStatusCode();
        should.exist(result);
    });
});

describe('When httpStatusLookup.getStatusCodesByCategory() is called', function() {
    it('then 13 results should be returned for a 5xx', function() {
        var result = httpStatusLookup.getStatusCodesByCategory('5xx');
        result.should.have.lengthOf(14);
    });

    it('then 13 results should be returned for a 500', function() {
        var result = httpStatusLookup.getStatusCodesByCategory('500');
        result.should.have.lengthOf(14);
    });

    it('then 9 results should be returned for a 3xx', function() {
        var result = httpStatusLookup.getStatusCodesByCategory('3xx');
        result.should.have.lengthOf(9);
    });


    it('then 35 results should be returned for a 4xx', function() {
        var result = httpStatusLookup.getStatusCodesByCategory('4xx');
        result.should.have.lengthOf(35);
    });
});

describe('When httpStatusLookup.getStatusMessageForCode() is called', function() {
    it('then correct message should be returned for a 404', function() {
        var result = httpStatusLookup.getStatusMessageForCode('404');
        result.should.equal('Not Found');
    });

    it('then correct message should be returned for a 500', function() {
        var result = httpStatusLookup.getStatusMessageForCode('500');
        result.should.equal('Internal Server Error');
    });

    it('when invalid code is sent then null returned', function() {
        var result = httpStatusLookup.getStatusMessageForCode('999');
        should.not.exist(result);
    });
});

describe('When httpStatusLookup.guessTheStatusCode() is called', function() {
    it('then a message should be returned', function() {
        var result = httpStatusLookup.guessTheStatusCode();
        console.log(result);
        result.should.be.a('string');
    });
});

