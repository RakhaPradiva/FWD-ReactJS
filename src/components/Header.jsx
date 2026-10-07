const Header = () => {
	return (
		<header className="px-3 navbar navbar-expand-md sticky-top bg-body py-3 mb-4 shadow-sm border-bottom">
			<a href="/" className="navbar-brand d-inline-flex align-items-center link-body-emphasis text-decoration-none">
				<i
					className="fa-solid fa-book fa-xl"
					style={{
						color: "#26a1ff",
					}}
					aria-hidden="true"
				></i>
				<span className="ms-2 fs-4 fw-bold">bookstore</span>
			</a>
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
					<ul className="navbar-nav">
						<li className="nav-item">
							<a href="#" className="nav-link px-md-3">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link px-md-3">
								Book
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link px-md-3">
								Team
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link px-md-3">
								Contact
							</a>
						</li>
					</ul>
				</nav>
				<div className="d-flex flex-column flex-md-row mx-2 gap-2 mt-3 mt-md-0">
					<button type="button" className="btn btn-outline-primary">
						Login
					</button>
					<button type="button" className="btn btn-primary">
						Register
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
