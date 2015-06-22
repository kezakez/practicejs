//Given an array of numbers and a sliding window size, get the greatest numbers in each frame as it slides
function rollingMaximum(inputArray, windowSize) {
    if (!inputArray instanceof Array) throw "inputArray should be an array";
    if (!windowSize instanceof Number || !windowSize) throw "windowSize should be an integer";
    if (windowSize > inputArray.length || windowSize < 1) throw "windowSize should be less than inputArray length and greater than 1";

    var frames = (inputArray.length - windowSize) + 1;

    var result = [];
    for(var frameStart = 0; frameStart < frames; frameStart++) {
        var frameMax = inputArray[frameStart];
        for(var index = 1; index < windowSize; index++){
            var value = inputArray[index+frameStart];
            if (value > frameMax) frameMax = value;
        }
        result.push(frameMax);
    }
    return result;
}

module.exports = rollingMaximum;