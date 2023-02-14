const Home = () => {
	return (
		<section className="home section" id="home">
			<div className="home__container container grid">
				<div className="home__data">
					<h3 className="home__subtitle">EXCEPTIONAL QUALITY</h3>
					<h1 className="home__title ">
						It's time for a <br /> good coffee
						<img src="assets/img/home-coffee-title.png" alt="" />
					</h1>
					<p className="home__description ">
						Each select coffee bean reflects our commitment to Peruvian
						coffee growers, who bring the best select coffee to your
						table.
					</p>
					<a href="#" className="button">
						Get Started <i className="ri-arrow-right-s-line "></i>
					</a>
				</div>
				<img src="assets/img/home-coffee.png" className="home__img" alt="" />
			</div>
		</section>
	);
};

export { Home };
