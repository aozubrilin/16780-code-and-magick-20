'use strict';

(function () {
  var SETUP_STYLE_LEFT = 50 + '%';
  var SETUP_STYLE_TOP = 80 + 'px';

  var isEscEvent = window.util.isEscEvent;
  var isEnterEvent = window.util.isEnterEvent;

  var getRandomCoat = window.color.getRandomCoat;
  var getRandomEyes = window.color.getRandomEyes;
  var getRandomFierboll = window.color.getRandomFierboll;

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupUserName = document.querySelector('input[name="username"]');

  var wizardFireball = setup.querySelector('.setup-fireball-wrap');
  var form = setup.querySelector('.setup-wizard-form');

  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatInput = setup.querySelector('input[name="coat-color"]');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesInput = setup.querySelector('input[name="eyes-color"]');

  var wizardFireballInput = setup.querySelector('input[name="fireball-color"]');

  wizardCoat.addEventListener('click', function () {
    var newColor = getRandomCoat();
    wizardCoat.style.fill = newColor;
    wizardCoatInput.value = newColor;
    window.similar.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = getRandomEyes();
    wizardEyes.style.fill = newColor;
    wizardEyesInput.value = newColor;
    window.similar.onEyesChange(newColor);
  });

  wizardFireball.addEventListener('click', function () {
    var randomFierbollColor = getRandomFierboll();
    wizardFireball.style.background = randomFierbollColor;
    wizardFireballInput.value = randomFierbollColor;
  });

  var setupPopup = function () {

    var onPopupEscPress = function (evt) {
      if (isEscEvent && document.activeElement !== setupUserName) {
        evt.preventDefault();
        closePopup();
      }
    };

    var openPopup = function () {
      setup.classList.remove('hidden');
      setup.style.top = SETUP_STYLE_TOP;
      setup.style.left = SETUP_STYLE_LEFT;

      form.addEventListener('submit', submitHandler);
      document.addEventListener('keydown', onPopupEscPress);
    };

    var closePopup = function () {
      setup.classList.add('hidden');

      document.removeEventListener('keydown', onPopupEscPress);
    };

    setupOpen.addEventListener('click', function () {
      openPopup();

    });

    setupOpen.addEventListener('keydown', function () {
      if (isEnterEvent) {
        openPopup();
      }
    });

    setupClose.addEventListener('click', function () {
      closePopup();
    });

    setupClose.addEventListener('keydown', function () {
      if (isEnterEvent) {
        closePopup();
      }
    });

    var submitHandler = function (evt) {
      window.backend.save(new FormData(form), function () {
        closePopup();
      });
      evt.preventDefault();
    };

  };

  setupPopup();
})();
