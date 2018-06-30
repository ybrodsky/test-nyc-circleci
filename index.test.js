const assert = require('assert');

const index = require('./index');

describe('Test', () => {
	it('Test', () => {
		const res = index.sum(1, 2);
		assert.equal(res, 3);
	});

	it('test 2', () =>  {
		try {

		} catch (err) {
			assert.equal(err.message, 'Invalid param');
			return;
		}
		throw new Error('Should have thrown error');
	})
});
