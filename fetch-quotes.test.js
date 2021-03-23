const fetchQuote = require('./fetch-quotes');

describe('fetches quote from Futurama API', () => {
    it('return a single quote from the Futurama API', async () => {

        const quote = await fetchQuote();

        expect(quote).toEqual({
            name: expect.any(String),
            text: expect.any(String),
            image: expect.any(String)
        });
    });
});
