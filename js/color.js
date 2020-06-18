'use strict';

(function () {

  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIERBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getRandomItem = window.util.getRandomItem;

  var getRandomCoatColor = function () {
    return getRandomItem(COAT_COLORS);
  };

  var getRandomEyesColor = function () {
    return getRandomItem(EYES_COLOR);
  };

  var getRandomFierbollColor = function () {
    return getRandomItem(FIERBALL_COLORS);
  };

  var getRandomSaturationColor = function () {
    var saturation = Math.floor(Math.random() * 100);
    return 'hsla(240, ' + saturation + '%' + ', 50%, 1)';
  };

  window.color = {
    getRandomCoat: getRandomCoatColor,
    getRandomEyes: getRandomEyesColor,
    getRandomFierboll: getRandomFierbollColor,
    getRandomSaturation: getRandomSaturationColor,
  };

})();
