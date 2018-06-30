
const sum = (a, b) => {
	if (isNaN(a) || isNaN(b)) {
		throw new Error('Invalid param');
	}

	if (a === 0) {
		return b;
	}

	if (b === 0) {
		return a;
	}

	return a + b;
};

module.exports = {
	sum,
};
