// current weather
// http://api.weatherapi.com/v1/current.json?key=c9b78bcb02654430b9b180345232311&q=London
// ${apiBase}/forecast.json?key=${apiKey}&q=${city}&days=3
const apiKey = `c9b78bcb02654430b9b180345232311`;
const apiBase = `https://api.weatherapi.com/v1`;
const fullDirections = {
    N: "North",
    NNE: "North-Northeast",
    NE: "Northeast",
    ENE: "East-Northeast",
    E: "East",
    ESE: "East-Southeast",
    SE: "Southeast",
    SSE: "South-Southeast",
    S: "South",
    SSW: "South-Southwest",
    SW: "Southwest",
    WSW: "West-Southwest",
    W: "West",
    WNW: "West-Northwest",
    NW: "Northwest",
    NNW: "North-Northwest"
};


const currentWeatherCard = document.getElementById('currentWeatherCard');
const weatherCards = document.querySelector('.weather-cards');
const search = document.getElementById('search');


search.addEventListener('keyup', function (event) {
    getWeather(event.target.value);
    console.log(event.target.value);

})




async function getWeather(city) {
    try {
        var respose = await fetch(`${apiBase}/forecast.json?key=${apiKey}&q=${city}&days=3`);
        var data = await respose.json();
        // updateTime(data.location.localtime);
        displaycurrentWeather(data);
        console.log(respose);
        console.log(data);
        console.log(data.location.name);
    } catch (error) {

    }

}


function displaycurrentWeather(data) {
    console.log(data);
    
    var currentDate = updateTime(data.location.localtime);
    var forecastDate1 = updateTime(data.forecast.forecastday[1].date);
    var forecastDate2 = updateTime(data.forecast.forecastday[2].date);
    var newCard = ``;
    newCard += `<div class="inner p-3 col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch text-white">
    <div class=" weather-card flex-grow-1" id="currentWeatherCard">
        <div class="d-flex justify-content-between card-head p-2">
            <p class="day ">${currentDate.dayOfWeek}</p>
            <p class="date">${currentDate.dayOfMonth} ${currentDate.month}</p>
        </div>
        <div class="card-body p-3">
            <p class="location my-3">${data.location.name}</p>
            <div class="temp row">
            <p class="col-7">${data.current.temp_c}&#8451;</p>
            <img src="${data.current.condition.icon}" class="col-5 ps-2" alt="">
        </div>
            <p class="condition mb-3">${data.current.condition.text}</p>
            <div class="row justify-content-between">
            <div class="rain col-4">
                <img src="../imgs/icon-umberella.png" class="me-1" alt="">
                <p>${data.current.wind_degree}%</p>
            </div>
            <div class="wind col-4">
                <img src="../imgs/icon-wind.png" class="me-1" alt="">
                <p>${data.current.wind_kph}km/h</p>
            </div>
            <div class="direction col-4">
                <img src="../imgs/icon-compass.png" class="me-1" alt="">
                <p>${fullDirections[data.current.wind_dir]}</p>
            </div>
        </div>
        </div>
    </div>
        </div>`;
    newCard += `<div class="inner p-3 col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch text-white">
            <div class="weather-card flex-grow-1 text-center " id="currentWeatherCard">
                <div class="d-flex justify-content-center card-head p-2">
                    <p class="day ">${forecastDate1.dayOfWeek}</p>
                </div>
                <div class="card-body p-5">
                    <img src="${data.forecast.forecastday[1].day.condition.icon}" class="ps-2" alt="">
                    <p class="my-2">${data.forecast.forecastday[1].day.maxtemp_c}&#8451;</p>
                    <p class="my-2 mb-3">${data.forecast.forecastday[1].day.mintemp_c}&#8451;</p>
                    <p class="condition my-2">${data.forecast.forecastday[1].day.condition.text}</p>
                </div>
            </div>
        </div>`;
    newCard += `<div class="inner p-3 col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch text-white">
            <div class="weather-card flex-grow-1 text-center " id="currentWeatherCard">
                <div class="d-flex justify-content-center card-head p-2">
                    <p class="day ">${forecastDate2.dayOfWeek}</p>
                </div>
                <div class="card-body p-5">
                    <img src="${data.forecast.forecastday[2].day.condition.icon}" class="ps-2" alt="">
                    <p class="my-2">${data.forecast.forecastday[2].day.maxtemp_c}&#8451;</p>
                    <p class="my-2 mb-3">${data.forecast.forecastday[2].day.mintemp_c}&#8451;</p>
                    <p class="condition my-2">${data.forecast.forecastday[2].day.condition.text}</p>
                </div>
            </div>
        </div>`;
    weatherCards.innerHTML = newCard;
}

function updateTime(date) {
    const dayNames = ["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"]
    const monthNames = ["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"];

    var newDate = new Date(date);

    var dayOfWeek = dayNames[newDate.getDay()];
    var month = monthNames[newDate.getMonth()];
    var dayOfMonth = newDate.getDate();

    var dateObj = {
        'dayOfWeek': dayOfWeek,
        'month': month,
        'dayOfMonth': dayOfMonth,
    }
    console.log(dateObj);
    return dateObj;
}

// updateTime("2024-12-18 01:32");


// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//   }
// var currentWeather = {
//     'day': '',
//     'localtime': '',
//     'name': '',
//     'temp_c': '',
//     'condition': {
//         'text': '',
//         'icon': '',
//     }
// }