var cord;
		function success(position) {
  		var crd = position.coords;
  		cord=position.coords;
  		console.log(`Latitude : ${crd.latitude}`);
  		console.log(`Longitude: ${crd.longitude}`);
  		loadweather();
								};

		function error(err) {
 		console.warn(`ERROR(${err.code}): ${err.message}`);
							};
		navigator.geolocation.getCurrentPosition(success, error);

function loadweather(){
				
		$("#city_name").empty();
		$("#picture").empty();
		$("#descript").empty();
		$("#temperature1").empty();

	
	

		$.ajax({
			url: 'http://api.openweathermap.org/data/2.5/weather?lat='  + cord.latitude + '&lon=' + cord.longitude + "&units=metric" +
			"&APPID=d519ca02d2fcfd10e60f2eba1f2bafa2",
			type: "GET",
			dataType: 'json',
			success: function(data){
				$("#city_name").append(data.name + ", " + data.sys.country);
				$("#picture").append("<img src='./Weather_forecast/images/" + data.weather[0].icon + ".png'>");
				$("#descript").append("humidity: " +"<br>"+ data.main.humidity + " % " + "<br>" + "description: "+"<br>" + data.weather[0].description);
				$("#temperature1").append(Math.round(data.main.temp) + "&deg;C");
							
			}

		})
	

}


		
	