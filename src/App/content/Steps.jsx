const Steps = () => {
	return (
		<section className="steps" id="steps">
			<div className="steps__bg section">
				<h2 className="section__title">
					Steps of manufacturing our products
				</h2>
				<div className="steps__container container grid">
					<img src="assets/img/coffee-beans-bg.png" alt="" className="steps__bg-img" />
					<div className="steps__content">
						<img src="assets/img/steps-curve-line.svg" alt="steps image" className="steps__border" />
						<div className="steps__card">
							<div className="steps__circle">
								<div className="steps__subcircle">01</div>
								<img
									className="steps__img"
									src="assets/img/steps-green-coffee.png"
									alt="steps image"
								/>
							</div>
							<p className="steps__description">
								Harvest occurs annually when the coffee beans reach
								maturity and are collected for processing.
							</p>
						</div>
						<div className="steps__card steps__card-move">
							<div className="steps__circle">
								<div className="steps__subcircle">02</div>
								<img
									className="steps__img"
									src="assets/img/steps-coffee-beans.png"
									alt="steps image"
								/>
							</div>
							<p className="steps__description">
								The beans are dried using a wet or dry technique,
								depending on the taste we want to obtain.
							</p>
						</div>
						<div className="steps__card">
							<div className="steps__circle">
								<div className="steps__subcircle">03</div>
								<img
									className="steps__img"
									src="assets/img/steps-ground-coffee.png"
									alt="steps image"
								/>
							</div>
							<p className="steps__description">
								The coffee is roasted and acquires its flavor by
								processing the grain in ovens.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export { Steps };
