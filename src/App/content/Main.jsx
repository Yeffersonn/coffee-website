import { About } from "./About";
import { Home } from "./Home";
import { Products } from "./Products";
import { Steps } from "./Steps";
import { Testimonial } from "./Testimonial";

const Main = () => {
	return (
		<main className="main">
			<Home />
			<Products/>
			<About/>
			<Steps/>
			<Testimonial/>
		</main>
	);
};

export { Main };
