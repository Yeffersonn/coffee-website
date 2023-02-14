import { Footer } from "./content/Footer";
import { Header } from "./content/header";
import { Main } from "./content/Main";

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<Footer />
			<a href="#" className="scrollup" id="scroll-up">
				<i class="ri-arrow-up-line"></i>
			</a>
		</div>
	);
}

export default App;
