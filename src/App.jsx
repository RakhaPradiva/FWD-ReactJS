import { Route, Routes } from "react-router";

import { Books, Contact, Home, Team, Login, Register } from "./pages";

const App = () => {
	return (
		<>
			<div className="container">
				<Routes>
					<Route index element={<Home />} />
					<Route path="/books" element={<Books />} />
					<Route path="/team" element={<Team />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
