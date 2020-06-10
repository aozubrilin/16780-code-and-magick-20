'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATS_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIERBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var OBJECTS_QUANTITY = 4;

var userDialog = document.querySelector('.setup');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * Math.floor(array.length - 1))];
};

var createWizards = function (wizardsQuantity) {
  var wizardsList = [];

  for (var i = 0; i < wizardsQuantity; i++) {
    var wizard = {
      name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
      coatColor: getRandomElement(COATS_COLOR),
      eyesColor: getRandomElement(EYES_COLOR)
    };
    wizardsList.push(wizard);
  }

  return wizardsList;
};

var fragment = document.createDocumentFragment();

var renderWizards = function (wizards) {
  for (var i = 0; i < wizards.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

    fragment.appendChild(wizardElement);
  }
};

var wizards = createWizards(OBJECTS_QUANTITY);
renderWizards(wizards);

similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');

var wizardFireball = setup.querySelector('.setup-fireball-wrap');

var customizationWizard = function () {

  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatInput = setup.querySelector('input[name="coat-color"]');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesInput = setup.querySelector('input[name="eyes-color"]');

  var wizardFireballInput = setup.querySelector('input[name="fireball-color"]');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = getRandomElement(COATS_COLOR);
    wizardCoatInput.value = wizardCoat.style.fill;
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = getRandomElement(EYES_COLOR);
    wizardEyesInput.value = wizardEyes.style.fill;
  });

  wizardFireball.addEventListener('click', function () {
    var randomFierbollColor = getRandomElement(FIERBALL_COLORS);
    wizardFireball.style.background = randomFierbollColor;
    wizardFireballInput.value = randomFierbollColor;
  });

};

var setupPopup = function () {

  var onPopupEscPress = function (evt) {
    evt.preventDefault();
    if (evt.key === 'Escape') {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();

  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      closePopup();
    }
  });

};

customizationWizard();
setupPopup();
