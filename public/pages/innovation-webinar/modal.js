'use strict';

(function () {

    var fullScreenModal = document.querySelector('.full-screen-modal');
    var modalBtn = document.querySelector('.modal-btn');
    var domBody = document.querySelector('body');

    var fadeIn = function fadeIn(el) {

        el.classList.remove('hidden');
        el.classList.add('fade-in');
    };

    var fadeOut = function fadeOut(el) {

        el.classList.remove('fade-in');
        el.classList.add('fade-out');
        setTimeout(function () {
            el.classList.add('hidden');
            el.classList.remove('fade-out');
        }, 150);
    };

    modalBtn.addEventListener('click', function () {

        if (domBody.classList.contains('noOverflow')) {
            domBody.classList.remove('noOverflow');
            fadeOut(fullScreenModal);
        }
    });

    document.onload = function () {
        if (fullScreenModal) {
            setTimeout(function () {
                fadeIn(fullScreenModal);
                domBody.classList.add('noOverflow');
            }, 300);
        }
    }();
})();
