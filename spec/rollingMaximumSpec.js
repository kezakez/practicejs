describe("Rolling max function", function() {
    'use strict';
    var rollingMaximum = require('../rollingMaximum');

    it("should get max when the frame is the array size", function () {
        // arrange
        var arrayTest = [0, 3, 1, 2];

        // act
        var result = rollingMaximum(arrayTest, 4);

        // assert
        expect(result).toEqual([3]);
    });

    it("should get an equal array when the frame size is 1", function () {
        // arrange
        var arrayTest = [0, 3, 1, 2];

        // act
        var result = rollingMaximum(arrayTest, 1);

        // assert
        expect(result).toEqual([0, 3, 1, 2]);
    });

    it("should get the max for each frame when there is a small frame size", function () {
        // arrange
        var arrayTest = [0, 3, 1, 2];

        // act
        var result = rollingMaximum(arrayTest, 2);

        // assert
        expect(result).toEqual([3, 3, 2]);
    });

    it("should get max for each frame with decimals and negatives", function () {
        // arrange
        var arrayTest = [2, 3, 4, 1, 5, 1.2, 0.1, -1.2, 6, 7, 8, 0];

        // act
        var result = rollingMaximum(arrayTest, 4);

        // assert
        expect(result).toEqual([4, 5, 5, 5, 5, 6, 7, 8, 8]);
    });

    it("benchmarks", function() {
        // arrange
        var arrayTest = [];
        for(var i = 0; i < 1000000; i++) {
            arrayTest.push(2, 3, 4, 1, 5, 1, 6, 7, 8);
        }

        // act
        var timer = new jasmine.Timer();
        timer.start();
        rollingMaximum(arrayTest, 4);
        var elapsed = timer.elapsed();
        console.log(' (benchmark time '+elapsed+'ms)');
    });
});