import React from "react";

const Header = () => {
	return (
		<header className="header" id="header">
			<div className="header__border"></div>
			<nav className="nav container">
				<a href="#" className="nav__logo">
					<img src="assets/img/logo.png" alt="logo" />
					Coffetto
				</a>
				<div className="nav__menu">
					<ul className="nav__list">
						<li className="nav__item">
							<a href="#home" className="nav__link">
								<i className="ri-home-5-fill"></i>
								<span>Home</span>
							</a>
						</li>
						<li className="nav__item">
							<a href="#about" className="nav__link">
								<i className="ri-award-fill"></i>
								<span>About</span>
							</a>
						</li>
						<li className="nav__item">
							<a href="#steps" className="nav__link">
								<i className="ri-compass-3-fill"></i>
								<span>Steps</span>
							</a>
						</li>
						<li className="nav__item">
							<a href="#testimonial" className="nav__link">
								<i className="ri-message-3-fill"></i>
								<span>Testimonial</span>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export { Header };
