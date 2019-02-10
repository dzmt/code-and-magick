
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_GAP = 20;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var renderCloud = function(ctx, x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(times) {
    var maxElement = times[0];
    
for (var i = 1; i < times.length; i++) {
    if (times[i] > maxElement) {
        maxElement = times[i];
    };
};
    return maxElement;
};

var calculatePointX = function(fieldWidth, gap, width, fieldPointX) {
    var pointX = ((fieldWidth - (gap * 3 + width * 4)) / 2 + fieldPointX);
    return pointX;
};

window.renderStatistics = function(ctx, names, times) {
	renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
	renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
	ctx.font = '16px PT Mono';
	ctx.textBaseline = 'hanging';
	ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 4, CLOUD_Y + GAP);
	ctx.fillText('Список результатов:', CLOUD_X + GAP * 4, CLOUD_Y + GAP + TEXT_GAP);


var pointX = calculatePointX(CLOUD_WIDTH, BAR_GAP, BAR_WIDTH, CLOUD_X);

var maxTime = getMaxElement(times);


var getBlueRandom = function() {
  return "rgba(0, 0, 255, " + Math.random() + ")";
};

var winnerColor = '#ff0000';

for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], pointX + ((BAR_GAP + BAR_WIDTH) * i), CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), pointX + ((BAR_GAP + BAR_WIDTH) * i), CLOUD_HEIGHT - GAP * 2 - (BAR_HEIGHT * times[i]) / maxTime - TEXT_GAP);
    ctx.fillStyle = names[i] === 'Вы' ? winnerColor : getBlueRandom();
    ctx.fillRect(pointX + ((BAR_GAP + BAR_WIDTH) * i), CLOUD_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime - TEXT_GAP, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    };

};

