'use strict';
(function () {

  var OBJECTS_QUANTITY = 4;
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var getRandomItem = window.util.getRandomItem;
  var getRandomCoat = window.color.getRandomCoat;
  var getRandomEyes = window.color.getRandomEyes;

  var createWizards = function () {
    var wizardsList = [];

    for (var i = 0; i < OBJECTS_QUANTITY; i++) {
      var wizard = {
        name: getRandomItem(WIZARD_NAMES) + ' ' + getRandomItem(WIZARD_SURNAMES),
        coatColor: getRandomCoat(),
        eyesColor: getRandomEyes(),
      };
      wizardsList.push(wizard);
    }

    return wizardsList;
  };

  window.data = {
    createWizards: createWizards
  };

})();
