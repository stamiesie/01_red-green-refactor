


const getName = require('./get-name');


describe('get name from object function', () => {
    it('takes in an object and returns a name value', () => {

        const spot = {
            name: 'spot',
            age: 5,
            weight: '20 lbs'
        };

        const name = getName(spot);

        expect(name).toEqual('spot');
    });

    it('takes in an object and returns a name value', () => {

        const character = {
            _id: '5cf5679a915ecad153ab68c9',
            name: 'Aang'
        };

        const name = getName(character);

        expect(name).toEqual('Aang');
    });
});
