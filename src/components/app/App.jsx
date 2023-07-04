import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage, Shop, AboutBrand, Contacts } from "../../pages";
import AppHeader from "../appHeader/AppHeader";
import AppFooter from "../appFooter/AppFooter";
import NotFound from "../../pages/404/NotFound";

import styles from "./app.module.scss";

const App = () => {
	return(
		<Router>
			<AppHeader />
			<main className={styles.main}>
				<Routes>
					<Route path="/" element={<MainPage/>}/>
					<Route path="/shop" element={<Shop/>}/>
					<Route path="/about" element={<AboutBrand/>}/>
					<Route path="/contacts" element={<Contacts/>}/>
					<Route path="*" element={<NotFound/>}/>
				</Routes>
			</main>
			<AppFooter />
		</Router>
	)
}

export default App;
