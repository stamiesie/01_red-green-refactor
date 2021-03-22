const copyAndPush = require('./copy-and-push');

describe('copy array and push new item function', () => {
    it('takes in an array and returns a new array with new item pushed to the end of the array', () => {

        const numbers = [1, 2, 3];

        const newNumbers = copyAndPush(numbers, 4);

        expect(newNumbers).toEqual([1, 2, 3, 4]);
    });

});
