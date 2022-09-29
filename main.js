// This is how to importa data from a json
import data from './data.json' assert {
    type: 'json'
};

const dailyArray = data.map(item => item.timeframes.daily);
const weeklyArray = data.map(item => item.timeframes.weekly);
const monthlyArray = data.map(item => item.timeframes.monthly);

console.log(dailyArray);

const dailyBtn = document.getElementById('daily');
const weeklyBtn = document.getElementById('weekly');
const monthlyBtn = document.getElementById('monthly');
const reportSection = document.querySelector('.report-section');

const bgColorArray = [
    "hsl(15, 100%, 70%)",
    "hsl(195, 74%, 62%)",
    "hsl(348, 100%, 68%)",
    "hsl(145, 58%, 55%)",
    "hsl(264, 64%, 52%)",
    "hsl(43, 84%, 65%)"
]



const drawElements = (array) => {
    reportSection.innerHTML = '';

    array.forEach((element, index) => {
        let title = data[index].title;
        let titleLowerCase = title.toLowerCase();
        let titleNoSpace = titleLowerCase.replace(' ', '-');
        reportSection.innerHTML += `
        <div class="card" style="background-color:${bgColorArray[index]}; background-image:url(./images/icon-${titleNoSpace}.svg);">
        <div class="card__details">
          <div class="card__activity">
            <p class="card__title">
              ${title}
            </p>
            <img class="card__btn" src="./images/icon-ellipsis.svg" alt="three-points">
          </div>
          <div class="card__time">
            <p class="card__hours">${element.current}hrs</p>
            <p class="card__previous-hours">Previous - ${element.previous}hrs</p>
          </div>
        </div>
      </div>`
    })
}

drawElements(dailyArray);


dailyBtn.addEventListener('click', () => {
    drawElements(dailyArray);
    weeklyBtn.classList.remove('main-card__frequency--active');
    monthlyBtn.classList.remove('main-card__frequency--active');
    dailyBtn.classList.add('main-card__frequency--active');
});
weeklyBtn.addEventListener('click', () => {
    drawElements(weeklyArray);
    weeklyBtn.classList.add('main-card__frequency--active');
    monthlyBtn.classList.remove('main-card__frequency--active');
    dailyBtn.classList.remove('main-card__frequency--active');
});
monthlyBtn.addEventListener('click', () => {
    drawElements(monthlyArray);
    weeklyBtn.classList.remove('main-card__frequency--active');
    monthlyBtn.classList.add('main-card__frequency--active');
    dailyBtn.classList.remove('main-card__frequency--active');
});