
const hostname = '127.0.0.1';

const port = 3001;


var express = require("express");

var app = express();
app.listen(port , () => {
 console.log("Server running on port 3001");
});

app.get("/getForexRates", (req, res, next) => {
res.header("Content-Type", "application/json");
 res.json({"rates":{"CAD":1.4467,"HKD":8.5666,"ISK":135.5,"PHP":56.806,"DKK":7.4665,"HUF":334.05,"CZK":25.739,"AUD":1.6351,"RON":4.7491,"SEK":10.8118,"IDR":15516.78,"INR":77.8275,"BRL":4.5516,"RUB":71.2142,"HRK":7.415,"JPY":117.47,"THB":33.458,"CHF":1.094,"SGD":1.5137,"PLN":4.3698,"BGN":1.9558,"TRY":6.2595,"CNY":7.8096,"NOK":9.993,"NZD":1.7512,"ZAR":16.6627,"USD":1.0925,"MXN":21.6365,"ILS":3.8121,"GBP":0.8897,"KRW":1318.2,"MYR":4.5825},"base":"EUR","date":"2019-10-02"});
});