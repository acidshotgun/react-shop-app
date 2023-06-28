import { useState, useEffect } from "react";
import testAxios from "../server";

const App = () => {
	const [films, setFilms] = useState([]);

	const onRequest = () => {
		testAxios().then(res => onFilmLoaded(res))
	}

	const onFilmLoaded = (newFilm) => {
		setFilms(films => [...films, ...newFilm])
	}

	const renderItems = (item) => {
		const films = item.map((item, i) => {
			return(
				<li key={i}>
					<h1>{item.name}</h1>
				</li>
			)
		})

		return films;
	}

	const newRenderItems = renderItems(films)

	return(
		<div>
			{newRenderItems}
			<button onClick={() => onRequest()}>ОБНОВИТЬ ФИЛЬМ</button>
		</div>
	)
}

export default App;