"use strict";

var url = "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=48657322376449b5b7c0a49c5562a665";

var req = new XMLHttpRequest();
req.open("GET", url, false);
req.send();

req = JSON.parse(req.responseText);

var News = React.createClass({
		displayName: "News",

		render: function render() {
				return React.createElement(
						"div",
						null,
						React.createElement(
								"h3",
								null,
								"Latest stories:"
						),
						React.createElement("br", null),
						React.createElement(
								"p",
								null,
								React.createElement(
										"a",
										{ href: req.articles[0].url },
										req.articles[0].title
								)
						),
						React.createElement("br", null),
						React.createElement(
								"p",
								null,
								React.createElement(
										"a",
										{ href: req.articles[1].url },
										req.articles[1].title
								)
						),
						React.createElement("br", null),
						React.createElement(
								"p",
								null,
								React.createElement(
										"a",
										{ href: req.articles[2].url },
										req.articles[2].title
								)
						),
						React.createElement("br", null),
						React.createElement(
								"p",
								null,
								React.createElement(
										"a",
										{ href: req.articles[3].url },
										req.articles[3].title
								)
						),
						React.createElement("br", null),
						React.createElement(
								"p",
								null,
								React.createElement(
										"a",
										{ href: req.articles[4].url },
										req.articles[4].title
								)
						),
						React.createElement("br", null),
						React.createElement(
								"p",
								null,
								React.createElement(
										"a",
										{ href: req.articles[5].url },
										req.articles[5].title
								)
						),
						React.createElement("br", null),
						React.createElement("br", null),
						React.createElement(
								"h4",
								null,
								"Source: Google News"
						)
				);
		}
});

ReactDOM.render(React.createElement(News, null), document.getElementById('news'));