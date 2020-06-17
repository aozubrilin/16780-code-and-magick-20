'use strict';

(function () {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 20;
  var BAR_GAP = 50;
  var IDENT_LEFT = 50;
  var IDENT_TOP = 25;
  var TIMES_GAP = 25;
  var BAR_HEIGHT = -150;
  var BAR_WIDTH = 40;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var renderText = function (ctx, text, x, y) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';
    ctx.fillText(text, x, y);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
    renderText(ctx, 'Ура вы победили!', CLOUD_X + IDENT_LEFT, CLOUD_Y + IDENT_TOP);
    renderText(ctx, 'Список результатов:', CLOUD_X + IDENT_LEFT, CLOUD_Y + IDENT_TOP * 2);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = window.color.getRandomSaturation();
      }

      ctx.fillRect(CLOUD_X + (BAR_WIDTH + BAR_GAP) * i + IDENT_LEFT, CLOUD_HEIGHT - FONT_GAP, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
      renderText(ctx, players[i], CLOUD_X + (BAR_WIDTH + BAR_GAP) * i + IDENT_LEFT, CLOUD_HEIGHT);
      renderText(ctx, Math.floor(times[i]), CLOUD_X + (BAR_WIDTH + BAR_GAP) * i + IDENT_LEFT, CLOUD_HEIGHT - TIMES_GAP + (BAR_HEIGHT * times[i]) / maxTime);
    }
  };
})();
