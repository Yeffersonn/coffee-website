const About = () => {
	return (
		<section className="about" id="about">
			<div className="about__bg section">
				<div className="about__container container grid">
					<div className="about__data">
						<h2 className="section__title ">Our History</h2>
						<p className="about__description ">
							We make and grow the best coffee in Peru, accompanying
							families since 1930, with professional workers who harvest,
							collect and select the coffee with quality work, thus
							providing exquisite coffee to enjoy together as a family.
						</p>
					</div>
					<img src="assets/img/about-coffee.png" alt="about image" className="about__img" />
				</div>
			</div>
		</section>
	);
};

export { About };
