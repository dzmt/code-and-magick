
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_GAP = 20;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var WINNER_COLOR = '#ff0000';
var NAME_WINNER = 'Вы';
var COLOR_CLOUD = '#fff';
var SHADOW_COLOR_CLOUD = 'rgba(0, 0, 0, 0.7)';
var TEXT_STYLE = '#000';
var textWinnerX = CLOUD_X + GAP * 4;
var textWinnerY = CLOUD_Y + GAP;

var renderCloud = function(ctx, x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
    var maxElement = arr[0];
    
for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
        maxElement = arr[i];
    };
};
    return maxElement;
};

var calculatePointX = function(fieldWidth, gap, width, fieldPointX, position) {
    var pointX = ((fieldWidth - (gap * 3 + width * 4)) / 2 + fieldPointX + (gap + width) * position + 1);
       return pointX;
};

var calculateNamesPointY = function(height, gap) {
    var namesPointY = height - gap;
    return namesPointY;
};

var calculateTimesPointY = function(cloudHeight, gap, barHeight, timesArr, maxTime, textGap) {
    var timesPointY = cloudHeight - gap * 2 - (barHeight * timesArr) / maxTime - textGap;
    return timesPointY;
};

var calculateBarPointY = function(cloudHeight, barHeight, timesArr, maxTime, textGap) {
    var barPointY = cloudHeight - (barHeight * timesArr) / maxTime - textGap;
    return barPointY;
};

var calculateHeightBar = function(barHeight, timesArr, maxTime, textGap) {
    var heightBar = (barHeight * timesArr) / maxTime - textGap;
    return heightBar;
};

var getBlueRandom = function() {
  return "rgba(0, 0, 255, " + Math.random() + ")";
};

var playersColorColumn = function(arr, nameWinner, winnerColor, randomColor) {
    var players = arr === nameWinner ? winnerColor : randomColor;
    return players;
};

window.renderStatistics = function(ctx, names, times) {
	renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR_CLOUD);
	renderCloud(ctx, CLOUD_X, CLOUD_Y, COLOR_CLOUD);

    ctx.fillStyle = TEXT_STYLE;
	ctx.font = '16px PT Mono';
	ctx.textBaseline = 'hanging';
	ctx.fillText('Ура вы победили!', textWinnerX, textWinnerY);
	ctx.fillText('Список результатов:', textWinnerX, textWinnerY + TEXT_GAP);

var maxTime = getMaxElement(times);

for (var i = 0; i < names.length; i++) {
    var heightBar = calculateHeightBar(BAR_HEIGHT, times[i], maxTime, TEXT_GAP);
    var pointX = calculatePointX(CLOUD_WIDTH, BAR_GAP, BAR_WIDTH, CLOUD_X, i);
    var namesPointY = calculateNamesPointY(CLOUD_HEIGHT, GAP);
    var timesPointY = calculateTimesPointY(CLOUD_HEIGHT, GAP, BAR_HEIGHT, times[i], maxTime, TEXT_GAP);
    var barPointY = calculateBarPointY(CLOUD_HEIGHT, BAR_HEIGHT, times[i], maxTime, TEXT_GAP);
    var players = playersColorColumn(names[i], NAME_WINNER, WINNER_COLOR, getBlueRandom());
    ctx.fillText(names[i], pointX, namesPointY);
    ctx.fillText(Math.round(times[i]), pointX, timesPointY);
    ctx.fillStyle = players;
    ctx.fillRect(pointX, barPointY, BAR_WIDTH, heightBar);
    ctx.fillStyle = TEXT_STYLE;
    };

};



