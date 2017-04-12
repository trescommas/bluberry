"use strict";

var request = new XMLHttpRequest();
request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=HongKong&appid=1ba7a9ad5f5acbb9b6aadb838987864f&units=metric", false);
request.send();

request = JSON.parse(request.responseText);

var MainPage = React.createClass({
  displayName: "MainPage",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        React.createElement(
          "u",
          null,
          "Hong Kong"
        )
      ),
      React.createElement(
        "h1",
        null,
        request.main.temp,
        "\xB0C"
      )
    );
  }
});

ReactDOM.render(React.createElement(MainPage, null), document.getElementById('container'));