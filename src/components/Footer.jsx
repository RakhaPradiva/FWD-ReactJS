const Footer = () => {
	return (
		<footer className="py-3 my-4">
			<ul className="nav justify-content-center border-bottom pb-3 mb-3">
				<li className="nav-item">
					<a href="#" className="nav-link px-2 text-body-secondary">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link px-2 text-body-secondary">
						Book
					</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link px-2 text-body-secondary">
						Team
					</a>
				</li>
				<li className="nav-item">
					<a href="#" className="nav-link px-2 text-body-secondary">
						Contact
					</a>
				</li>
				<li className="nav-item"></li>
			</ul>
			<p className="text-center text-body-secondary">&copy; {new Date().getFullYear()} | NF Academy</p>
		</footer>
	);
};

export default Footer;
