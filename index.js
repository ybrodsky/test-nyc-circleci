
const sum = (a, b) => {
	if (isNaN(a) || isNaN(b)) {
		throw new Error('Invalid param');
	}

	return a + b;
};

module.exports = {
	sum,
};
