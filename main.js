"use strict";

function tick() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; //January is 0!
	var yyyy = today.getFullYear();
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var weekday = days[today.getDay()];
	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
	}
	var time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
	if (time == "4:20 PM") {
		time = "blaze it";
	}
	var element = React.createElement(
		"div",
		null,
		React.createElement(
			"h2",
			null,
			time,
			" "
		),
		React.createElement(
			"h1",
			null,
			weekday,
			" || ",
			dd + '/' + mm + '/' + yyyy
		)
	);
	ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);