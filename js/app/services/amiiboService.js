const externals = {};

const amiibos = await getAmiibos();

async function getAmiibos() {
	const url = "https://www.amiiboapi.com/api/amiibo/";
	const response = await fetch(url);
	const result = await response.json();
	return result.amiibo;
}

externals.getAmiibo = (index) => {
    return amiibos[index];
}

export default externals;