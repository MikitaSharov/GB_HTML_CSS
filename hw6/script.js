document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu');

    burger.addEventListener('mouseenter', function () {
        menu.classList.add('visible');
    });

    burger.addEventListener('mouseleave', function () {
        setTimeout(function () {
            if (!menu.matches(':hover')) {
                menu.classList.remove('visible');
            }
        }, 200);
    });

    menu.addEventListener('mouseleave', function () {
        menu.classList.remove('visible');
    });

    menu.addEventListener('mouseenter', function () {
        menu.classList.add('visible');
    });
});
