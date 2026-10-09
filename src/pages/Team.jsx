import { Footer, Header } from "../components";
import teams from "../utils/teams";

const Team = () => {
	return (
		<>
			<Header />
			<section id="team" className="container py-5" aria-labelledby="team-title">
				<div className="row py-lg-4 text-center">
					<div className="col-lg-7 col-md-9 mx-auto">
						<h2 id="team-title" className="fw-semibold h2 my-2">
							Tim Kami
						</h2>
						<p className="lead text-body-secondary">Kenali orang-orang di balik pilihan bacaan kami.</p>
					</div>
				</div>
				<div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
					{teams.map((team) => (
						<div className="col" key={team.name}>
							<article className="card h-100 text-center shadow-sm">
								<div className="card-body py-4">
									<div
										className="rounded-circle bg-primary-subtle text-primary d-flex align-items-center justify-content-center mx-auto mb-3"
										style={{ width: "5rem", height: "5rem" }}
									>
										<i className="fa-solid fa-user fa-2x" aria-hidden="true" />
									</div>
									<h3 className="h5 card-title">{team.name}</h3>
									<p className="card-text text-body-secondary mb-0">{team.role}</p>
								</div>
							</article>
						</div>
					))}
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Team;
