'use strict';

(function () {

  var MAX_SIMILAR_WIZARD_COUNT = 4;

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderWizard = function (wizard) {

    var wizardElement = similarWizardTemplate.cloneNode(true);


    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    wizardElement.querySelector('.setup-similar-label').innerText = wizard.name;

    return wizardElement;
  };

  var setup = document.querySelector('.setup');
  var similarListElement = setup.querySelector('.setup-similar-list');

  window.render = function (wizards) {
    var fragment = document.createDocumentFragment();
    var takeNumber = 0;

    if (wizards.length > MAX_SIMILAR_WIZARD_COUNT) {
      takeNumber = MAX_SIMILAR_WIZARD_COUNT;
    } else {
      takeNumber = wizards.length;
    }
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    setup.querySelector('.setup-similar').classList.remove('hidden');
  };

})();
