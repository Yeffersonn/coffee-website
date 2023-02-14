const Testimonial = () => {
	return (
		<section className="testimonial" id="testimonial">
			<div className="testimonial__bg section">
				<div className="testimonial__container container grid">
					<div className="testimonial__data">
						<h2 className="section__title">
						Coffee is the best drink in the morning, it keeps you focused.
						</h2>
						<span className="testimonial__name">Jhon Doe</span>
					</div>
					<img src="assets/img/testimonial-coffee.png" alt="testimonial__image" className="testimonial__img" />
				</div>
			</div>
		</section>
	);
};

export { Testimonial };
