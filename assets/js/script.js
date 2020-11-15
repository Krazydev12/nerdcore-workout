// //let userInput = document.getElementById("textarea1").textContent;

// //const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://edamam-recipe-search.p.rapidapi.com/search?q=" + userInput + "diet=" + radio,
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "9d3fc1b0e6mshf2a5aae79eb7bb6p179335jsnf7cabbb320b3",
// 		"x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

$("#form").submit(function (event) {
	let userInput = $("#textarea1").val();
	console.log("input" + userInput);
	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://edamam-recipe-search.p.rapidapi.com/search?q=" + userInput + "&diet=" + "balanced",
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "9d3fc1b0e6mshf2a5aae79eb7bb6p179335jsnf7cabbb320b3",
			"x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com"
		}
	};
	$.ajax(settings).done(function (response) {
		console.log(response);
	});

	event.preventDefault();
});

// for (i = 0; i <= json.length; i++) {
// 	var data1 = json.ETA, data2 = json.MMSI;
$('#results').append("cucumber");



// var unirest = require("unirest");

// var req = unirest("GET", "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote");

// req.query({
//     "token": "ipworld.info"
// });

// req.headers({
//     "x-rapidapi-key": "",
//     "x-rapidapi-host": "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
//     "useQueryString": true
// });


// req.end(function (res) {
//     if (res.error) throw new Error(res.error);

//     console.log(res.body);
// });



// var unirest = require("unirest");

// var req = unirest("GET", "https://edamam-recipe-search.p.rapidapi.com/search");

// req.query({
//     "q": "cucumber"
// });

// req.headers({
//     "x-rapidapi-key": "",
//     "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
//     "useQueryString": true
// });


// req.end(function (res) {
//     if (res.error) throw new Error(res.error);

//     console.log(res.body);
// });


