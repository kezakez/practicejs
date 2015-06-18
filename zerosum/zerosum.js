// Given an array, please determine whether it contains three numbers whose sum equals to 0.

function hasZeroSumNumber(input) {
	if (input.length < 3) return false;

	for (var i = 0; i < input.length; i++) {
		for(var j = 0; j < input.length; j++) {
			for(var k = 0; k < input.length; k++) {
				if (i === j || j === k || k === i) continue;
				var sum = input[i]+input[j]+input[k];

				if (sum === 0) return true;
			}
		}
	}

	return false;
}

(function shouldBeFalseWhenNot() {
	// arrange
	var arrayTest = [0, 3, 1, 2];

	// act
	var result = hasZeroSumNumber(arrayTest);
	 
	// assert
	console.assert(!result, 'should be false');
})();

(function shouldBeFalseWhenSmallArray() {
	// arrange
	var arrayTest = [0, 0];

	// act
	var result = hasZeroSumNumber(arrayTest);
	 
	// assert
	console.assert(!result, 'should be false when small');
})();

(function shouldBeTrueWithThreeElements() {
	// arrange
	var arrayTest = [0, 0, 0];

	// act
	var result = hasZeroSumNumber(arrayTest);
	 
	// assert
	console.assert(result, 'should be true with all zeros');
})();

(function shouldBeTrueWithFourElements() {
	// arrange
	var arrayTest = [0, 0, 0, 1];

	// act
	var result = hasZeroSumNumber(arrayTest);
	 
	// assert
	console.assert(result, 'should be true with zeros');
})();

(function shouldBeTrueWithNegatives() {
	// arrange
	var arrayTest = [-1, 0, 0, 1];

	// act
	var result = hasZeroSumNumber(arrayTest);
	 
	// assert
	console.assert(result, 'should be true with negatives');
})();

(function shouldBeTrueWithDecimals() {
	// arrange
	var arrayTest = [-1.2, 0, 0, 1.2];

	// act
	var result = hasZeroSumNumber(arrayTest);
	 
	// assert
	console.assert(result, 'should be true with negatives');
})();