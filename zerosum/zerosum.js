// Given an array, please determine whether it contains three numbers whose sum equals to 0.

function hasZeroSumNumber(input) {
    if (input.length < 3) return false;

    input.sort();

    for (var i = 0; i < input.length; i++) {
        var find = -input[i];
        if (findNumbersWithSum(input, find, i)) return true;
    }

    return false;
}

    function findNumbersWithSum(data, sum, excludeIndex)
    {
        var found = false;
        var ahead = data.length - 1;
        var behind = 0;

        while(ahead > behind)
        {
            if(ahead == excludeIndex)
                ahead--;
            if(behind == excludeIndex)
                behind++;

            var curSum = data[ahead] + data[behind];

            if(curSum == sum)
            {
                found = true;
                break;
            }
            else if(curSum > sum)
                ahead--;
            else
                behind++;
        }

        return found;
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
    console.assert(result, 'should be true with negative decimals');
})();

(function shouldBeTrueWithOutOfOrder() {
    // arrange
    var arrayTest = [2, 3, 4, 1, 5, -1.2, 0.2];

    // act
    var result = hasZeroSumNumber(arrayTest);

    // assert
    console.assert(result, 'should be true with out of order');
})();