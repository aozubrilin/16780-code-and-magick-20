'use strict';

(function () {

  var setup = document.querySelector('.setup');

  var similarListElement = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

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

  var wizards = window.data.createWizards();
  renderWizards(wizards);
  similarListElement.appendChild(fragment);
  setup.querySelector('.setup-similar').classList.remove('hidden');

})();
