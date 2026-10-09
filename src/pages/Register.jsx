import { Link } from "react-router";

const Register = () => {
	return (
		<main className="container py-5">
			<div className="row justify-content-center">
				<section className="col-12 col-md-9 col-lg-7 col-xl-6" aria-labelledby="register-title">
					<div className="modal-content border-0 rounded-4 shadow">
						<header className="p-4 p-sm-5 pb-3 border-0">
							<h1 id="register-title" className="mb-0 fw-bold fs-2">
								Buat akun baru
							</h1>
						</header>

						<div className="px-4 px-sm-5 pb-5">
							<form>
								<div className="form-floating mb-3">
									<input
										type="text"
										className="form-control rounded-3"
										id="registerName"
										placeholder="Nama lengkap"
										autoComplete="name"
									/>
									<label htmlFor="registerName">Nama lengkap</label>
								</div>

								<div className="form-floating mb-3">
									<input
										type="email"
										className="form-control rounded-3"
										id="registerEmail"
										placeholder="nama@contoh.com"
										autoComplete="email"
									/>
									<label htmlFor="registerEmail">Alamat email</label>
								</div>

								<div className="form-floating mb-3">
									<input
										type="password"
										className="form-control rounded-3"
										id="registerPassword"
										placeholder="Kata sandi"
										autoComplete="new-password"
									/>
									<label htmlFor="registerPassword">Kata sandi</label>
								</div>

								<div className="form-floating mb-3">
									<input
										type="password"
										className="form-control rounded-3"
										id="confirmPassword"
										placeholder="Ulangi kata sandi"
										autoComplete="new-password"
									/>
									<label htmlFor="confirmPassword">Ulangi kata sandi</label>
								</div>

								<button className="btn btn-primary btn-lg w-100 mb-2 rounded-3" type="submit">
									Daftar
								</button>
								<p className="mt-3 mb-0 text-center text-body-secondary">
									Sudah punya akun? <Link to="/login">Login</Link>
								</p>

								<hr className="my-4" />
								<h2 className="mb-3 fw-bold fs-5">Atau daftar dengan akun lain</h2>

								<button
									className="btn btn-outline-secondary w-100 py-2 mb-2 rounded-3"
									type="button"
								>
									Daftar dengan Google
								</button>
							</form>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Register;
