(function (){
function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	//calling function to updateWeather
	weatherService.getWeather(updateWeather)

	//Function to update DOM for weather
	function updateWeather(data){
		var results = JSON.parse(data);
		var weatherElem = $('#weather');
		var kelvin = results.main.temp;
		var fahrenheit = kelvin *(9/5) - 459.67;
		fahrenheit = Math.floor(fahrenheit)
		var celsius = (fahrenheit -32) * (5/9)
		celsius = Math.floor(celsius)
		var weatherTemplate = ''
		weatherTemplate += `
		<div class="weatherCard">
			<p>${results.name}</p>
			<p>${fahrenheit} &#8457</p>
			<p>${celsius} &#8451</p>
			<img src="http://openweathermap.org/img/w/${results.weather[0].icon}.png">
			<p>${results.weather[0].description}</p>
		</div>
		`
		weatherElem.append(weatherTemplate);
	}

} //closes WeatherController

WeatherController()

}()) //closes iife
