$(document).ready(function() {
  var thermostat = new Thermostat();
  refreshTemperature();
  displayWeather('London');

  $('#temp-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-switch').click(function() {
    var psm = thermostat.switchPSM();
    var buttonType = psm ? 'psm-button-in' : 'psm-button-out'
    $('#powersaving-switch').attr('class', buttonType)
    updateTemperature();
  })

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature + '°C');
    $('#temperature').attr('class', thermostat.showUsage());
    $.post('http://localhost:4567/temperature', `temperature=${thermostat.temperature}`)
  };
  function refreshTemperature() {
    var promise = new Promise(function(resolve, reject) {
      $.get('http://localhost:4567/temperature', function(response){
        resolve(response);
      })
    })
    promise.then(function(value){
      thermostat.temperature = parseInt(value, 10);
      $('#temperature').text(value + '°C');
      $('#temperature').attr('class', thermostat.showUsage());
    })
  };

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#local-outside-temp').text(Math.round(data.main.temp));
      $('#city').text(city);
    })
  };
});
