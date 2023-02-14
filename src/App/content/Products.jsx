const Products = () => {
	return (
		<section className="products">
			<div className="products__bg section ">
				<div className=" products__container container grid">
					<div className="products__data">
						<a href="#about" className=" products__button ">
							Scroll Down
							<i className="ri-arrow-down-s-line"></i>
						</a>
						<p class="products__description ">
							We strive to form deep partnerships with farmers from all
							over the world to create perspective together and form
							healthy working relationships built on trust and respect.
						</p>
					</div>
					<div className="products__content">
						<article className="products__card">
							<img src="assets/img/product-coffee-1.png" alt="" className="products__img" />
							<h3 className="products__name">Classic Coffee</h3>
							<span className="products__price">$17.90</span>
						</article>
						<article className="products__card">
							<img src="assets/img/product-coffee-2.png" alt="" className="products__img" />
							<h3 className="products__name">Black Coffee</h3>
							<span className="products__price">$24.90</span>
						</article>
						<article className="products__card">
							<img src="assets/img/product-coffee-3.png" alt="" className="products__img" />
							<h3 className="products__name">Strong Coffee</h3>
							<span className="products__price">$32.90</span>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export { Products };
