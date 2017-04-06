$(document).ready(function(){

	$('#btn').click(function(){

	var city1 = $("#city").val();

	$("#city_name").empty();
		$("#picture").empty();
		$("#descript").empty();
		$("#temperature1").empty();
		$("#first").empty();
		$("#second").empty();
		$("#third").empty();
		$("#fourth").empty();
		$("#fifth").empty();

	var city1 = $("#city").val();

	if(city1 != ''){

		$.ajax({

			url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city1 + "&units=metric" + "&cnt=5" +
			"&APPID=d519ca02d2fcfd10e60f2eba1f2bafa2",
			type: "GET",
			dataType: 'json',
			success: function(data){
				$("#city_name").append(data.city.name + ", " + data.city.country);
				$("#picture").append("<img src='./Weather_forecast/images/" + data.list[0].weather[0].icon + ".png'>");
				$("#descript").append("humidity: " +"<br>"+ data.list[0].humidity + " % " + "<br>" + "description: "+"<br>" + data.list[0].weather[0].description);
				$("#temperature1").append(Math.round(data.list[0].temp.day) + "&deg;C");
				

				$("#first").append("<h3>" + timeConvert(data.list[0].dt) + "</h3>" +"<img src='./Weather_forecast/images/" + data.list[0].weather[0].icon + ".png'>"+"<br>" +  "<span>" + Math.round(data.list[0].temp.day) + "&deg;C" + "</span>");
				$("#second").append("<h3>" + timeConvert(data.list[1].dt) + "</h3>" +"<img src='./Weather_forecast/images/" + data.list[1].weather[0].icon + ".png'>"+"<br>" +"<span>" + Math.round(data.list[1].temp.day) + "&deg;C" + "</span>");
				$("#third").append("<h3>" + timeConvert(data.list[2].dt) + "</h3>" + "<img src='./Weather_forecast/images/" + data.list[2].weather[0].icon + ".png'>"+"<br>" + "<span>" + Math.round(data.list[2].temp.day) + "&deg;C" + "</span>");
				$("#fourth").append("<h3>" + timeConvert(data.list[3].dt) + "</h3>"+ "<img src='./Weather_forecast/images/" + data.list[3].weather[0].icon + ".png'>"+"<br>" + "<span>" + Math.round(data.list[3].temp.day) + "&deg;C" + "</span>");
				$("#fifth").append("<h3>" + timeConvert(data.list[4].dt) + "</h3>" + "<img src='./Weather_forecast/images/" + data.list[4].weather[0].icon + ".png'>"+"<br>"+ "<span>" + Math.round(data.list[4].temp.day) + "&deg;C" + "</span>");
				
				
				$("#city").val('');
			}

		})
	}else{
		 alert("Please input city name!");
	}

})
});

function timeConvert(unix_time){
				var a = new Date(unix_time * 1000);
  				var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  				var year = a.getFullYear();
  				var month = months[a.getMonth()];
  				var date = a.getDate();
  				var hour = a.getHours();
  				var min = a.getMinutes();
  				var sec = a.getSeconds();
  				var result = date + "/" + month + "/" + year;
  				return result;
 			 	}
	