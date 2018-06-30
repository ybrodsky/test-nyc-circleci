const assert = require('assert');

const index = require('./index');

describe('Test', () => {
	it('Test', () => {
		const res = index.sum(1, 2);
		assert.equal(res, 3);
	});
});
