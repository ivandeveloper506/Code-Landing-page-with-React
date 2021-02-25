/********************************************************************************/
/* Fecha Creación:  25 Febrero 2021.                                            */
/* Autor:           Iván Fonseca Castro                                         */
/*                                                                              */
/* Descripción:     Archivo principal de Home, este componente Home actualiza y */
/*                  renderiza todos los componentes a mostrar en el sitio web.  */
/********************************************************************************/

import React from "react";

import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { CardInfo } from "./card-info.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<div>
			{/* Se invoca el componente Navbar */}
			<Navbar />
			{/* Se invoca el componente Jumbotron */}
			<Jumbotron
				title="A Warm Welcome!"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quam, provident iusto eos fugiat et quisquam delectus tempora est ullam autem nulla cupiditate doloremque eveniet dolor inventore, neque, modi maiores."
				buttonUrl="https://getbootstrap.com/docs/4.6/components/jumbotron/"
				buttonLabel="Call to action!"
			/>
			{/* Se invoca el componente CardInfo */}
			<CardInfo />
			{/* Se invoca el componente Footer */}
			<Footer copyright="Copyright © My First React Website 2021" />
		</div>
	);
}
