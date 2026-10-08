import { Link } from "react-router";

const Footer = () => {
	return (
		<footer className="py-3 my-4">
			<ul className="nav justify-content-center border-bottom pb-3 mb-3">
				<li className="nav-item">
					<Link to="/" className="nav-link px-2 text-body-secondary">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/books" className="nav-link px-2 text-body-secondary">
						Book
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/team" className="nav-link px-2 text-body-secondary">
						Team
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact" className="nav-link px-2 text-body-secondary">
						Contact
					</Link>
				</li>
				<li className="nav-item"></li>
			</ul>
			<p className="text-center text-body-secondary">&copy; {new Date().getFullYear()} | Bookstore by NF Academy</p>
		</footer>
	);
};

export default Footer;
