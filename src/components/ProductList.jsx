import { useState } from "react";
import books from "../utils/books";

const ProductList = () => {
	const [bookList, setBookList] = useState(books);
	const [formData, setFormData] = useState({
		title: "",
		author: "",
		year: "",
		description: "",
		image: "https://picsum.photos/seed/",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((currentFormData) => ({ ...currentFormData, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newBook = {
			...formData,
			id: Math.max(0, ...bookList.map((book) => book.id)) + 1,
			year: Number(formData.year),
		};

		setBookList((currentBooks) => [...currentBooks, newBook]);
		setFormData({ title: "", author: "", year: "", description: "", image: "" });
	};

	return (
		<>
			<div className="container pb-5">
				<form className="row g-3" onSubmit={handleSubmit}>
					<div className="col-12">
						<h2 className="h4">Tambah Buku</h2>
					</div>
					<div className="col-md-6">
						<label className="form-label" htmlFor="book-title">
							Judul buku
						</label>
						<input className="form-control" id="book-title" name="title" value={formData.title} onChange={handleChange} required />
					</div>
					<div className="col-md-6">
						<label className="form-label" htmlFor="book-author">
							Penulis
						</label>
						<input className="form-control" id="book-author" name="author" value={formData.author} onChange={handleChange} required />
					</div>
					<div className="col-md-6">
						<label className="form-label" htmlFor="book-year">
							Tahun terbit
						</label>
						<input className="form-control" id="book-year" name="year" type="number" min="1" step="1" value={formData.year} onChange={handleChange} required />
					</div>
					<div className="col-md-6">
						<label className="form-label" htmlFor="book-image">
							URL sampul buku
						</label>
						<input className="form-control" id="book-image" name="image" type="url" value={formData.image} onChange={handleChange} required />
					</div>
					<div className="col-12">
						<label className="form-label" htmlFor="book-description">
							Deskripsi
						</label>
						<textarea
							className="form-control"
							id="book-description"
							name="description"
							rows="3"
							value={formData.description}
							style={{
								resize: "none",
							}}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="col-12">
						<button className="btn btn-primary" type="submit">
							Tambah Buku
						</button>
					</div>
				</form>
			</div>
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
						{bookList.map((book) => (
							<div className="col" key={book.id}>
								<article className="card h-100 shadow-sm">
									<img className="card-img-top object-fit-cover" src={book.image} alt={`Sampul buku ${book.title}`} height="225" loading="lazy" />
									<div className="card-body d-flex flex-column">
										<div className="d-flex align-items-start gap-2 mb-2">
											<span className="fw-semibold text-primary">{book.year}</span>
										</div>
										<h3 className="h5 card-title mb-1">{book.title}</h3>
										<p className="small text-body-secondary">oleh {book.author}</p>
										<p className="card-text text-body-secondary flex-grow-1 my-3">{book.description}</p>
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
