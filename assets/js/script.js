var unirest = require("unirest");

var req = unirest("GET", "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote");

req.query({
    "token": "ipworld.info"
});

req.headers({
    "x-rapidapi-key": "47597a0f1amsh4c6d796c707295ap1c950cjsndad9ba7fb44c",
    "x-rapidapi-host": "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
    "useQueryString": true
});


req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});