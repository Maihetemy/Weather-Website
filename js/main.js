// current weather
// http://api.weatherapi.com/v1/current.json?key=c9b78bcb02654430b9b180345232311&q=London

const apiKey = `c9b78bcb02654430b9b180345232311`;
const apiBase = `http://api.weatherapi.com/v1`;


const currentWeatherCard = document.getElementById('currentWeatherCard');
const weatherCards = document.querySelector('.weather-cards');
const search = document.getElementById('search');


search.addEventListener('keyup', function(event){
    getWeather(event.target.value);
    // console.log(event.target.value);
    
})

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



async function getWeather(city) {
    try {
        var respose = await fetch(`${apiBase}/current.json?key=${apiKey}&q=${city}`);
        var data = await respose.json();
        // updateTime(data.location.localtime);
        displaycurrentWeather(data);
        console.log(data);
        console.log(data.location.name);
    } catch (error) {

    }

}
getWeather('port said');

function displaycurrentWeather(data) {
    var date = updateTime(data.location.localtime);
    var newCard = ``;
    newCard += `<div class="inner p-3 col-sm-12 col-md-6 col-lg-4 text-white">
    <div class=" weather-card " id="currentWeatherCard">
        <div class="d-flex justify-content-between card-head p-2">
            <p class="day ">${date.dayOfWeek}</p>
            <p class="date">${date.dayOfMonth} ${date.month}</p>
        </div>
        <div class="card-body p-3">
            <p class="location my-3">${data.location.name}</p>
            <div class="temp row">
            <p class="col-7">${data.current.temp_c}<span>&#8451;</span></p>
            <img src="${data.current.condition.icon}" class="col-5" alt="">
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