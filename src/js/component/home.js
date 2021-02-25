import React from "react";

import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { CardInfo } from "./card-info.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron
				title="A Warm Welcome!"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quam, provident iusto eos fugiat et quisquam delectus tempora est ullam autem nulla cupiditate doloremque eveniet dolor inventore, neque, modi maiores."
				buttonUrl="https://getbootstrap.com/docs/4.6/components/jumbotron/"
				buttonLabel="Call to action!"
			/>
			<CardInfo />
			<Footer />
		</div>
	);
}
