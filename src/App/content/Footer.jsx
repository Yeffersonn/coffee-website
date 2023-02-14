const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__bg">
				<img src="assets/img/coffee-beans-bg.png" alt="footer img" className="footer__bg-img" />
				<div className="footer__container container grid">
					<div className="footer__data grid">
						<div>
							<a href="#" className="footer__logo">
								<img src="assets/img/logo.png" alt="logo" />
								Coffetto
							</a>
							<h3 className="footer__title">
								Sign up for our newsletter
							</h3>
						</div>
						<form action="" className="footer__form grid">
							<input
								type="email"
								placeholder="Enter e-mail address"
								className="footer__input"
							/>
							<button className="button footer__button" type="submit">
								Subscribe <i className="ri-arrow-right-s-line "></i>
							</button>
							<p className="footer__description ">
								We care about your data. Read our
								<a href="#" className="footer__privacy ">
									Privacy Policy
								</a>
							</p>
						</form>
					</div>
					<div className="footer__content grid">
						<div className="footer__social">
							<a
								href="https://www.facebook.com/"
								target="_blank"
								className="footer__social-link"
							>
								<i class="ri-facebook-fill"></i>
							</a>
							<a
								href="https://www.instagram.com/"
								target="_blank"
								className="footer__social-link"
							>
								<i className="ri-instagram-fill"></i>
							</a>
							<a
								href="https://twitter.com/"
								target="_blank"
								className="footer__social-link"
							>
								<i className="ri-twitter-fill"></i>
							</a>
						</div>
						<span className="footer__copy">
							&#169; Copyright. All rights reserved
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
