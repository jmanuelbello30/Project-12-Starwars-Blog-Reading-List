const getState = ({ getState, getStore, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			favorites: [],
			planets: []
		},
		
		actions: {

			addFavorites: (url) => {
				const store = getStore();
				let favorite = "";

				const favorite_exist = store.favorites.find((favorite_exist, j) => favorite_exist.url === url);

				if (!favorite_exist) {
					const characters_favorite = store.characters.find((character, j) => character.url === url);
					const planets_favorite = store.planets.find((planet, j) => planet.url === url);
					const vehicle_favorite = store.vehicles.find((vehicle, j) => vehicle.url === url);

					if (characters_favorite) {
						favorite = characters_favorite

					} else if (planets_favorite) {
						favorite = planets_favorite

					} else if (vehicle_favorite) {
						favorite = vehicle_favorite
					}

					if (favorite !== "") {
						setStore({
							favorites: [...store.favorites, favorite]
						})
					}
				}

				return store.favorites
			},

			existUrl(url) {
				const store = getStore();
				let favorite_exist = "";

				if (store.favorites) {
					favorite_exist = store.favorites.find((favorite_exist, j) => favorite_exist.url === url);
				}

				return (favorite_exist && favorite_exist !== "");
			},

			getPeople() {
				fetch("https://swapi.co/api/people/")
					.then(response => response.json())
					.then(data => {
						setStore({
							characters: data.results
						})
					});
				const store = getStore();
				return store.characters
			},

			getVehicles() {
				fetch("https://swapi.co/api/vehicles/")
					.then(response => response.json())
					.then(data => {

						setStore({
							vehicles: data.results
						})
					});
				const store = getStore();
				return store.vehicles
			},

			getPlanets() {
				fetch("https://swapi.co/api/planets/")
					.then(response => response.json())
					.then(data => {

						setStore({
							planets: data.results
						})
					});
				const store = getStore();
				return store.planets
			},
		}
	};
};

export default getState;
