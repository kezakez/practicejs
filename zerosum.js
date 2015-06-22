// Given an array, please determine whether it contains three numbers whose sum equals to 0.
(function () {
    'use strict';
    function hasZeroSumNumber(input) {
        if (input.length < 3) {
            return false;
        }

        input.sort();

        for (var i = 0; i < input.length; i++) {
            var find = -input[i];
            if (findNumbersWithSum(input, find, i)) {
                return true;
            }
        }

        return false;
    }

    function findNumbersWithSum(data, sum, excludeIndex) {
        var found = false;
        var ahead = data.length - 1;
        var behind = 0;

        while (ahead > behind) {
            if (ahead === excludeIndex) {
                ahead--;
            }

            if (behind === excludeIndex) {
                behind++;
            }

            var curSum = data[ahead] + data[behind];

            if (floatEquality(curSum, sum)) {
                found = true;
                break;
            }
            else if (curSum > sum) {
                ahead--;
            }
            else {
                behind++;
            }
        }

        return found;
    }

    var epsilon = 0.000000000000001; //ES6: Number.EPSILON

    function floatEquality(num1, num2) {
        if (num1 === num2) {
            return true;
        }

        var diff = Math.abs(num1 - num2);
        return diff < epsilon;


    }

    module.exports = hasZeroSumNumber;
})();