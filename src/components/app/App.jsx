import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage, Shop, AboutBrand, Contacts } from "../../pages";
import AppHeader from "../appHeader/AppHeader";
import AppFooter from "../appFooter/AppFooter";

import styles from "./app.module.scss";




import {useHttp} from '../../hooks/http.hook';

const App = () => {
	const {request} = useHttp();

	console.log(request('https://api.escuelajs.co/api/v1/products?limit=3&offset=1'));

	return(
		<Router>
			<AppHeader />
			<main className={styles.main}>
				<Routes>
					<Route path="/" element={<MainPage/>}/>
					<Route path="/shop" element={<Shop/>}/>
					<Route path="/about" element={<AboutBrand/>}/>
					<Route path="/contacts" element={<Contacts/>}/>
				</Routes>
			</main>
			<AppFooter />
		</Router>
	)
}

export default App;
