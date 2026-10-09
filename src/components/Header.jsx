import { Link } from "react-router";

const Header = () => {
	return (
		<header className="px-3 navbar navbar-expand-md sticky-top bg-body py-3 mb-4 shadow-sm border-bottom">
			<Link to="/" className="navbar-brand d-inline-flex align-items-center link-body-emphasis text-decoration-none">
				<i
					className="fa-solid fa-book fa-xl"
					style={{
						color: "#26a1ff",
					}}
					aria-hidden="true"
				></i>
				<span className="ms-2 fs-4 fw-bold">bookstore</span>
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#bookstore-navbar"
				aria-controls="bookstore-navbar"
				aria-expanded="false"
				aria-label="Menu"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse my-2" id="bookstore-navbar">
				<nav className="mx-md-auto px-3 py-sm-2">
					<ul className="navbar-nav text-sm-center">
						<li className="nav-item">
							<Link to="/" className="nav-link px-md-3 header-nav-link">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/books" className="nav-link px-md-3 header-nav-link">
								Book
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/team" className="nav-link px-md-3 header-nav-link">
								Team
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-link px-md-3 header-nav-link">
								Contact
							</Link>
						</li>
					</ul>
				</nav>
				<div className="d-flex flex-column flex-md-row mx-2 gap-2 mt-3 mt-md-0">
					<Link to="/login">
					<button type="button" className="btn btn-outline-primary">
						Login
					</button>
					</Link>
					<Link to="/register">
					<button type="button" className="btn btn-primary">
						Register
					</button>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
