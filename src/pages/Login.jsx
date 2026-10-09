import { Link } from "react-router";

const Login = () => {
	return (
		<main className="container py-5">
			<div className="row justify-content-center">
				<section className="col-12 col-md-9 col-lg-7 col-xl-6" aria-labelledby="login-title">
					<div className="modal-content border-0 rounded-4 shadow">
						<header className="d-flex align-items-start justify-content-between p-4 p-sm-5 pb-3 border-0">
							<h1 id="login-title" className="mb-0 fw-bold fs-2">
								Masuk ke akun Anda
							</h1>
						</header>

						<div className="px-4 px-sm-5 pb-5">
							<form>
								<div className="form-floating mb-3">
									<input type="email" className="form-control rounded-3" id="loginEmail" placeholder="nama@contoh.com" />
									<label htmlFor="loginEmail">Alamat email</label>
								</div>

								<div className="form-floating mb-3">
									<input type="password" className="form-control rounded-3" id="loginPassword" placeholder="Kata sandi" />
									<label htmlFor="loginPassword">Kata sandi</label>
								</div>

								<button className="btn btn-primary btn-lg w-100 mb-2 rounded-3" type="submit">
									Masuk
								</button>
								<p className="mt-3 mb-0 text-center text-body-secondary">
									Belum punya akun? <Link to="/register">Register</Link>
								</p>

								<hr className="my-4" />
								<h2 className="mb-3 fw-bold fs-5">Atau masuk dengan akun lain</h2>

								<button className="btn btn-outline-secondary w-100 py-2 mb-2 rounded-3" type="button">
									Masuk dengan Google
								</button>
							</form>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Login;
