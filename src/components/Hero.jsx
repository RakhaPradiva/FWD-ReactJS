import heroImage from "../assets/hero.webp";

const Hero = () => {
	return (
		<div className="container my-5">
			<div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
				<div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
					<h1 className="display-4 fw-bold lh-1 text-body-emphasis">Jalan Menuju Kesuksesan</h1>
					<p className="lead py-3">
						Buku pengembangan diri yang membahas berbagai langkah praktis untuk mencapai tujuan hidup dan karier. Buku ini membantu pembaca memahami cara menetapkan tujuan,
						membangun kebiasaan positif, mengelola waktu, serta menghadapi berbagai tantangan dalam perjalanan menuju kesuksesan.
					</p>
					<div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
						<button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
							Buy Now
						</button>
						<button type="button" className="btn btn-outline-secondary btn-lg px-4">
							Detail
						</button>
					</div>
				</div>
				<div className="col-lg-4 offset-lg-1 p-2 overflow-hidden shadow-lg">
					<img className="rounded-lg-3" src={heroImage} alt="Hero Image" height="500" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
