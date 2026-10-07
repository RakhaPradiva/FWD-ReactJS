import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Contact from "./pages/Contact";
import Team from "./pages/Team";

const App = () => {
	return (
		<>
			<Header />
			<div className="container">
				<Hero />
				<ProductList />
				<Team />
				<Contact />
			</div>
			<Footer />
		</>
	);
};

export default App;
