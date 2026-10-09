import { Footer, Header } from "../components";

const Contact = () => {
	return (
		<>
			<Header />
			<section id="contact" className="container py-5" aria-labelledby="contact-title">
				<div className="row py-lg-4 text-center">
					<div className="col-lg-7 col-md-9 mx-auto">
						<h2 id="contact-title" className="fw-semibold h2 my-2">
							Hubungi Kami
						</h2>
						<p className="lead text-body-secondary">Ada pertanyaan atau masukan? Kirim pesan kepada kami.</p>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-8 col-xl-7">
						<form>
							<div className="mb-3">
								<label htmlFor="contact-name" className="form-label">
									Nama
								</label>
								<input id="contact-name" name="name" type="text" className="form-control" autoComplete="name" required />
							</div>
							<div className="mb-3">
								<label htmlFor="contact-email" className="form-label">
									Email
								</label>
								<input id="contact-email" name="email" type="email" className="form-control" autoComplete="email" required />
							</div>
							<div className="mb-3">
								<label htmlFor="contact-message" className="form-label">
									Pesan
								</label>
								<textarea
									id="contact-message"
									name="message"
									className="form-control"
									rows="5"
									required
									style={{
										resize: "none",
									}}
								/>
							</div>
							<div className="mb-3">
								<button className="btn btn-primary">Kirim Pesan</button>
							</div>
						</form>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Contact;
