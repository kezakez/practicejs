describe("Zero Sum function", function() {
    var hasZeroSumNumber = require('../zerosum/zerosum');

    it("should be false when not found", function() {
        // arrange
        var arrayTest = [0, 3, 1, 2];

        // act
        var result = hasZeroSumNumber(arrayTest);

        // assert
        expect(result).toBe(false);
    });

    it("should be false when small array", function() {
        // arrange
        var arrayTest = [0, 0];

        // act
        var result = hasZeroSumNumber(arrayTest);

        // assert
        expect(result).toBe(false);
    });

    it("should be true with all zeros", function() {
        // arrange
        var arrayTest = [0, 0, 0];

        // act
        var result = hasZeroSumNumber(arrayTest);

        // assert
        expect(result).toBe(true);
    });

    it("should be true with an extra element", function() {
        // arrange
        var arrayTest = [0, 0, 0, 1];

        // act
        var result = hasZeroSumNumber(arrayTest);

        // assert
        expect(result).toBe(true);
    });

    it("should be true with negatives", function() {
        // arrange
        var arrayTest = [0, 1, 0, -1];

        // act
        var result = hasZeroSumNumber(arrayTest);

        // assert
        expect(result).toBe(true);
    });

    it("should be true with decimals", function() {
        // arrange
        var arrayTest = [0, 1.1, 0.1, -1.2];

        // act
        var result = hasZeroSumNumber(arrayTest);

        // assert
        expect(result).toBe(true);
    });

    it("should be true with elements out of order", function(done) {
        // arrange
        var arrayTest = [2, 3, 4, 1, 5, 1.2, 0.1, -1.2, 6, 7, 8, 0];

        // act
        var result = hasZeroSumNumber(arrayTest);

        // assert
        expect(result).toBe(true);
        done();
    });

    it("benchmark", function() {
        // arrange
        var arrayTest = [];
        for(var i = 0; i < 100; i++) {
            arrayTest.push(2, 3, 4, 1, 5, 1, 6, 7, 8);
        }
        arrayTest.push(1, 0, 0, 0, 1);
        for(var i = 0; i < 100; i++) {
            arrayTest.push(2, 3, 4, 1, 5, 6, 7, 8, 1);
        }

        // act
        var timer = new jasmine.Timer();
        timer.start();
        var result = hasZeroSumNumber(arrayTest);
        var elapsed = timer.elapsed();
        console.log(' (benchmark time '+elapsed+'ms)');

        // assert
        expect(result).toBe(true);
    });
});