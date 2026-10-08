import { Route, Routes } from "react-router";

import { Books, Contact, Home, Team } from "./pages";
import { Footer, Header } from "./components";

const App = () => {
	return (
		<>
			<Header />
			<div className="container">
				<Routes>
					<Route index element={<Home />} />
					<Route path="/books" element={<Books />} />
					<Route path="/team" element={<Team />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
};

export default App;
