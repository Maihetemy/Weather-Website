// current weather
// http://api.weatherapi.com/v1/current.json?key=c9b78bcb02654430b9b180345232311&q=London

const apiKey = `c9b78bcb02654430b9b180345232311`;
const apiBase = `http://api.weatherapi.com/v1`;


const currentWeatherCard = document.getElementById('currentWeatherCard');
const weatherCards = document.querySelector('.weather-cards');


// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//   }



async function getWeather(city) {
    try {
        var respose = await fetch(`${apiBase}/current.json?key=${apiKey}&q=${city}`);
        var data = await respose.json();
        updateTime(data.location.localtime);
        //  displaycurrentWeather(data);
        console.log(data);
        // console.log(date);
        console.log(data.location.name);
    } catch (error) {

    }

}
getWeather('london');
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
function displaycurrentWeather(data, date) {
    var newCard = ``;
    newCard += `<div class="inner p-3 col-sm-12 col-md-6 col-lg-4 text-white">
    <div class=" weather-card " id="currentWeatherCard">
        <div class="d-flex justify-content-between card-head p-2">
            <p class="day ">${Date(data.current.last_updated)}</p>
            <p class="date">18 December</p>
        </div>
        <div class="card-body p-3">
            <p class="location my-3">${data.location.name}</p>
            <div class="temp d-flex flex-nowrap">
                <p>15.3<span>&#8451;</span></p>
                <img src="../imgs/296.webp" class="w-100" alt="">
            </div>
            <p class="condition mb-3">Partly cloudy</p>
            <div class="d-flex flex-nowrap">
                <div class="rain me-4"><img src="../imgs/icon-umberella.png" class="me-1" alt="">40%</div>
                <div class="wind me-4"><img src="../imgs/icon-wind.png" class="me-1" alt="">18km/h</div>
                <div class="direction me-4"><img src="../imgs/icon-compass.png" class="me-1" alt="">East</div>
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
        'dayOfWeek' : dayOfWeek,
        'month' : month,
        'dayOfMonth' : dayOfMonth,
    }
    console.log(dateObj);
    return dateObj;
}

// updateTime("2024-12-18 01:32");