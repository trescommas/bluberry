"use strict";

var startDay = "7:30";
var endDay = "24:00";
var now = new Date();
var startHour = parseInt(startDay.split(":")[0]);
var endHour = parseInt(endDay.split(":")[0]);

var startMin = parseInt(startDay.split(":")[1]);
var endMin = parseInt(endDay.split(":")[1]);
var difference = 0;
startMin = startMin / 60;
endMin = endMin / 60;

startDay = parseInt(startHour + startMin);
endDay = parseInt(endHour + endMin);

var intDiff = endDay - startDay;

var time = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
var timeHour = parseInt(time.split(":")[0]);
var timeMin = parseInt(time.split(":")[1]);
timeMin = timeMin / 60;

time = parseInt(timeHour + timeMin);
if (timeMin > 24 && timeMin <= 7.5) {
  difference = 0;
} else {
  difference = 100 - Math.round((endDay - time) / intDiff * 100);
}

var year = now.getFullYear();
var year_days = 366;

function isLeap(y) {
  if (y % 4 && y % 400) {
    return true;
  } else {
    return false;
  }
}

if (isLeap(year) == true) {
  year_days = 365;
}

var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

var year_left = (day / year_days * 100).toFixed(1);

var Stats = React.createClass({
  displayName: "Stats",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h4",
        null,
        "We are Now Through"
      ),
      React.createElement(
        "h1",
        null,
        difference,
        "%"
      ),
      React.createElement(
        "p",
        null,
        "of your day"
      ),
      React.createElement("br", null),
      React.createElement(
        "h1",
        null,
        year_left,
        "%"
      ),
      React.createElement(
        "p",
        null,
        "of the year"
      )
    );
  }
});

ReactDOM.render(React.createElement(Stats, null), document.getElementById('stats'));