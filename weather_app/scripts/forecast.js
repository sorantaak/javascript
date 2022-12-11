const key = "PsuiIsujnuGAzgmstRztGTZUyCQytTa4";

const getCity = async (city) => {
	const baseUrl =
		"http://dataservice.accuweather.com/locations/v1/cities/search";
	const query = `?apikey=${key}&q=${city}`;
	const response = await fetch(baseUrl + query);
	const data = await response.json();
	return data[0];
};

getCity("mahabad")
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err.message);
	});
