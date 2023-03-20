// import * as oas from './includes/sum.js'

// console.log(oas.mySum(2, 10))
// console.log(oas.mySum(10, 5))

window.addEventListener('DOMContentLoaded', () => {
    // Set actual year
    const cYear = document.querySelector('.copyright span');
    cYear.innerHTML = new Date().getFullYear();

    // Countdown
    const days = document.querySelector('.daysDigits');
    const hours = document.querySelector('.hoursDigits');
    const minutes = document.querySelector('.minutesDigits');
    const seconds = document.querySelector('.secondsDigits');

    const dueDate = new Date('2023-04-01 00:00:00').getTime();

    const interval = setInterval(() => {
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
    }, 1000);
});
