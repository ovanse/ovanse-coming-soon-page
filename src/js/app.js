import translate from './includes/translate.js';

window.addEventListener('DOMContentLoaded', () => {
    // Set actual year
    const copyrightYear = document.querySelector('.copyright span');
    copyrightYear.innerHTML = new Date().getFullYear();

    // Countdown
    const days = document.querySelector('.daysDigits');
    const hours = document.querySelector('.hoursDigits');
    const minutes = document.querySelector('.minutesDigits');
    const seconds = document.querySelector('.secondsDigits');

    const dueDate = new Date('2023-04-01 00:00:00').getTime();

    const intervalTimer = setInterval(() => {
        const now = new Date().getTime();

        const distance = dueDate - now;
        const countDays = Math.floor(distance / (1000 * 60 * 60 * 24));
        const countHours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const countMinutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const countSeconds = Math.floor((distance % (1000 * 60)) / 1000);

        days.innerHTML = countDays >= 10 ? countDays : '0' + countDays;
        hours.innerHTML = countHours >= 10 ? countHours : '0' + countHours;
        minutes.innerHTML =
            countMinutes >= 10 ? countMinutes : '0' + countMinutes;
        seconds.innerHTML =
            countSeconds >= 10 ? countSeconds : '0' + countSeconds;

        if (distance < 0) {
            clearInterval(intervalTimer);
            days.innerHTML = '00';
            hours.innerHTML = '00';
            minutes.innerHTML = '00';
            seconds.innerHTML = '00';
        }
    }, 1000);

    // Dynamic wallpaper
    /*  let currentWP = 1;
    const countWP = 8;
    const body = document.querySelector('body');
    body.style.background = `url(../img/${currentWP++}.webp) 50% 50% / cover no-repeat fixed`;
    const intervalBackground = setInterval(() => {
        if (currentWP == countWP) {
            currentWP = 1;
        }
        body.style.background = `url(../img/${++currentWP}.webp) 50% 50% / cover no-repeat fixed`;
    }, 10000); */

    // Translate
    const language =
        (navigator.language || navigator.userLanguage).split('-')[0] != 'ru'
            ? 'en'
            : 'ru';
    document.querySelector('html').setAttribute('lang', language);
    document.querySelector('title').innerHTML =
        translate['k_pageTitle'][language];
    document.querySelectorAll('[data-translate]').forEach((elem) => {
        const languageKey = elem.getAttribute('data-lang');
        elem.innerHTML = translate[languageKey][language];
    });
});
