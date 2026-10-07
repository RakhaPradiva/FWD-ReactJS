const products = [
	{
		title: "Laut Bercerita",
		author: "Leila S. Chudori",
		category: "Fiksi",
		price: "Rp89.000",
		description: "Sebuah kisah tentang persahabatan, kehilangan, dan perjuangan mencari keadilan.",
		image: "https://picsum.photos/seed/laut-bercerita/640/420",
	},
	{
		title: "Filosofi Teras",
		author: "Henry Manampiring",
		category: "Pengembangan Diri",
		price: "Rp79.000",
		description: "Pengantar praktis filsafat Stoisisme untuk menjalani hidup dengan lebih tenang.",
		image: "https://picsum.photos/seed/filosofi-teras/640/420",
	},
	{
		title: "Bumi",
		author: "Tere Liye",
		category: "Fantasi",
		price: "Rp95.000",
		description: "Petualangan Raib dan kawan-kawan membuka pintu menuju dunia yang penuh rahasia.",
		image: "https://picsum.photos/seed/bumi-tere-liye/640/420",
	},
	{
		title: "Atomic Habits",
		author: "James Clear",
		category: "Produktivitas",
		price: "Rp110.000",
		description: "Panduan membangun kebiasaan baik melalui perubahan kecil yang konsisten.",
		image: "https://picsum.photos/seed/atomic-habits/640/420",
	},
	{
		title: "Laskar Pelangi",
		author: "Andrea Hirata",
		category: "Inspiratif",
		price: "Rp85.000",
		description: "Kisah hangat tentang mimpi, persahabatan, dan semangat belajar di Belitung.",
		image: "https://picsum.photos/seed/laskar-pelangi/640/420",
	},
	{
		title: "Sebuah Seni untuk Bersikap Bodo Amat",
		author: "Mark Manson",
		category: "Pengembangan Diri",
		price: "Rp99.000",
		description: "Sudut pandang lugas untuk memilih hal-hal yang benar-benar penting dalam hidup.",
		image: "https://picsum.photos/seed/seni-bodo-amat/640/420",
	},
];

const ProductList = () => {
	return (
		<>
			<section className="py-5 text-center container">
				<div className="row py-lg-4">
					<div className="col-lg-7 col-md-9 mx-auto">
						<h2 className="fw-semibold h2">Temukan Bacaan Favoritmu</h2>
						<p className="lead text-body-secondary">Pilihan buku populer untuk menemani hari, menambah wawasan, dan menginspirasi langkah baru.</p>
					</div>
				</div>
			</section>
			<section className="album py-5 bg-body-tertiary" aria-label="Daftar buku">
				<div className="container">
					<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
						{products.map((product) => (
							<div className="col" key={product.title}>
								<article className="card h-100 shadow-sm">
									<img className="card-img-top object-fit-cover" src={product.image} alt={`Sampul buku ${product.title}`} height="225" loading="lazy" />
									<div className="card-body d-flex flex-column">
										<div className="d-flex justify-content-between align-items-start gap-2 mb-2">
											<span className="badge text-bg-light">{product.category}</span>
											<span className="fw-semibold text-primary">{product.price}</span>
										</div>
										<h3 className="h5 card-title mb-1">{product.title}</h3>
										<p className="small text-body-secondary">oleh {product.author}</p>
										<p className="card-text text-body-secondary flex-grow-1 my-3">{product.description}</p>
										<button type="button" className="btn btn-outline-primary w-100">
											Beli Buku
										</button>
									</div>
								</article>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default ProductList;
