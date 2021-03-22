const capitalizeAndFilter = require('./capitalize-and-filter');

describe('capitalize and filter array function', () => {
    it('takes in an array of strings and capitalizes all strings and filters out any string that starts with the letter F', () => {

        const words = ['ace', 'basket', 'card', 'dice', 'fire'];

        const newWords = capitalizeAndFilter(words);

        expect(newWords).toEqual(['ACE', 'BASKET', 'CARD', 'DICE']);
    });
});
