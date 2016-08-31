var express = require('express');
var app = express();
var moment = require('moment');
//var fs = require('fs');

/*app.get('/', function (req, res) {
  //res.send({'unix': 123, 'natural': 'August 8, 2020'});
});*/

app.get('/:strdate', function (req, res) {
    var strdate = req.params.strdate;
    var date;
    if (/\d\D+\d/.test(strdate)) {
        date = moment(strdate, ["MM-DD-Y", "DD-MM-Y", "MMMM-DD-Y", "DD-MMMM-Y", "MMMM-Do-Y"]);
        res.json({
            unix: date.format("X"), 
            natural: date.format("MMMM Do, Y")
        })
    }
    else if (/\d{5,}/.test(strdate)) {
        date = moment(strdate, "X");
        res.json({
            unix: date.format("X"),
            natural: date.format("MMMM Do, Y")
        })
    }
    else {
        res.json({
            unix: null,
            natural: null
        });
    }
});

app.listen(process.env.PORT || 3500);