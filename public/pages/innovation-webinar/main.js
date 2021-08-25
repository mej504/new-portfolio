'use strict';

(function () {

    var hamMenu = document.getElementById('ham-menu');
    var xBtn = document.getElementById('x-svg');
    var heroSubHed = document.querySelector('.hero-copy');
    var fullScreenMenu = document.querySelector('.full-screen-menu');

    var mainHead = {
        isSplit: false,
        split: '<span style="color:#bad532">Big Ideas</span> Accelerating Change in HEOR,<br>RWE and Health Technology',
        notSplit: '<span style="color:#bad532">Big Ideas</span> Accelerating Change in HEOR, RWE and Health Technology'

        // ANIMATION TRIGGERS

    };var fadeIn = function fadeIn(el) {

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

    // EVENT LISTENERS

    document.onload = function () {

        // Updates state of subhead in hero section
        if (window.innerWidth <= 545) {
            heroSubHed.querySelector('h2').innerHTML = mainHead.notSplit;
            mainHead.isSplit = false;
        } else {
            heroSubHed.querySelector('h2').innerHTML = mainHead.split;
            mainHead.isSplit = true;
        }
    }();

    hamMenu.addEventListener('click', function () {

        if (!fullScreenMenu.classList.contains('hidden')) {
            return;
        } else {
            fadeIn(fullScreenMenu);
        }
    });

    xBtn.addEventListener('click', function () {

        if (fullScreenMenu.classList.contains('hidden')) {
            return;
        } else {
            fadeOut(fullScreenMenu);
        }
    });

    window.addEventListener('resize', function (e) {

        if (window.innerWidth < 545 && mainHead.isSplit) {

            heroSubHed.querySelector('h2').innerHTML = mainHead.notSplit;
            mainHead.isSplit = false;
        } else if (window.innerWidth > 545 && !mainHead.isSplit) {

            heroSubHed.querySelector('h2').innerHTML = mainHead.split;
            mainHead.isSplit = true;
        }
    });
})();
