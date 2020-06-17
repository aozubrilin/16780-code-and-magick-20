'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var getRandomItem = function (array) {
    return array[Math.floor(Math.random() * Math.floor(array.length - 1))];
  };

  var isEscEvent = function (evt, action) {
    if (evt.keyCode === ESC_KEYCODE) {
      action();
    }
  };

  var isEnterEvent = function (evt, action) {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  };

  window.util = {
    getRandomItem: getRandomItem,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
  };

})();
