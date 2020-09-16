function date() {
    var d = new Date();
    var t = d.getDate();
    var e = d.getMonth();
    var g = d.getFullYear();
    var month = new Array(12);
    month[0] = 'JAN';
    month[1] = 'FEB';
    month[2] = 'MAR';
    month[3] = 'APR';
    month[4] = 'MAY';
    month[5] = 'JUN';
    month[6] = 'JUL';
    month[7] = 'AUG';
    month[8] = 'SEP';
    month[9] = 'OCT';
    month[10] = 'NOV';
    month[11] = 'DEC';
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    var x = month[d.getMonth()];
    document.getElementById("day").innerHTML = n + " "
        + t + ', ' + x + ', ' + g
}


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('minute').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
function getloco() {
    const city = document.getElementById('input').value;
    console.log(city);

}
function weatherBalloon(cityID) {
    var key = '2b6ce2d9d21ce43f8c9c41f8d608fabf';
    const city = document.getElementById('input').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + '&appid=' + key)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            const con = data.sys.country;
            const can = (country[con]);
            const gh = (data.weather[0].description);
            const { name, main, wind } = data;
            const { temp, humidity } = main;
            const kk = (document.getElementById('hum').innerHTML = 'HUMIDITY: ' + humidity + '%');
            const b = (temp);
            const rr = (document.getElementById('temp').innerHTML = b + '&deg;' + "C");
            const ss = (document.getElementById('location').innerHTML = name + ",");
            const st = (document.getElementById('country').innerHTML = can);
            const sl = (document.getElementById('wind').innerHTML = 'wind: ' + data.wind.speed + 'm/s');
            const city = document.getElementById('input').textContent;
            const dd = (document.getElementById('des').innerHTML = gh)
            console.log(data);
            if (data.weather[0].main == 'Clear') {
                document.body.style.backgroundImage = "url('images/clear.jpg')";

            } else if (data.weather[0].main == 'Clouds') {

                document.body.style.backgroundImage = "url('images/cloud.jpg')";

            } else if (data.weather[0].main == 'Haze') {

                document.body.style.backgroundImage = "url('images/cloud.jpg')";

            } else if (data.weather[0].main == 'Rain') {

                document.body.style.backgroundImage = "url('images/rain.jpg')";

            } else if (data.weather[0].main == 'Snow') {

                document.body.style.backgroundImage = "url('images/snow.jpg')";

            } else if (data.weather[0].main == 'Thunderstorm') {

                document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";

            }
        })
        .catch(function (params) {
            alert("ENTER A VALID CITY")
        })

}
var input = document.getElementById("input");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search").click();
        document.getElementById('input').value = '';

    }
});
