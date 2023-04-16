import amiiboController from "../controllers/amiiboController.js";

const externals = {};

const elements = {};

const buildCard = (amiibo, amiiboIndex) => {
	return `<div id="card">
                <img src="${amiibo.image}" id="image">
                <div id="card-content">
                    <h3>Character: </h3>
                    <p>${amiibo.character}</p>
                    <h3>Release date: </h3> 
                    <p>${amiibo.release.eu || amiibo.release.na || amiibo.release.jp}</p>
                    <h3>Game: </h3>
                    <p>${amiibo.amiiboSeries}</p>
                    <p id="amiibo-index">Amiibo ${amiiboIndex} of 837</p>
                </div>
            </div>`
};

const renderCard = (amiibo, amiiboIndex) => {
	if (elements.card) {
		elements.card.remove();
	}

	elements.card = $(buildCard(amiibo, amiiboIndex));
	elements.app.append(elements.card);
};

const renderSearch = () => {
	if (elements.search) {
		return;
	}

	elements.search = $(
		`<form id="amiiboSearch">
		<label for="amiiboSearch">Enter an index (from 1 to 837) to search:
		<input type="search" id="amiiboSearchInput" name="amiiboSearchInput">
		<input type="submit">
		</form>`
	);
	elements.search.submit((event) => {
		amiiboController.formHandler($("#amiiboSearchInput").val());
		$("#amiiboSearchInput").val("");
		event.preventDefault();
	});
	elements.app.append(elements.search);
};

const renderPreviousButton = () => {
	if (elements.previousButton) {
		elements.previousButton.remove();
	}

	elements.previousButton = $("<button id='previous'>Previous Amiibo</button>");
	elements.previousButton.click((event) => {
		amiiboController.previousButtonHandler();
	});
	elements.app.append(elements.previousButton);
};

const renderNextButton = () => {
	if (elements.nextButton) {
		elements.nextButton.remove();
	}

	elements.nextButton = $("<button id='next'>Next Amiibo</button>");
	elements.nextButton.click((event) => {
		amiiboController.nextButtonHandler();
	});
	elements.app.append(elements.nextButton);
};

externals.render = (amiibo, amiiboIndex) => {
	elements.app = $("#app");
	renderSearch();

	if (amiibo) {
		renderCard(amiibo, amiiboIndex);
		renderPreviousButton();
		renderNextButton();
	}
};

export default externals;
