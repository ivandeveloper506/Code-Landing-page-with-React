/********************************************************************************/
/* Fecha Creación:  25 Febrero 2021.                                            */
/* Autor:           Iván Fonseca Castro                                         */
/*                                                                              */
/* Descripción:     Archivo principal de componente Footer.                     */
/********************************************************************************/

import React from "react";
import PropType from "prop-types";

export function Footer(props) {
	return (
		<div>
			<footer className="footer p-3 bg-dark text-center">
				<div className="container">
					<span className="text-white">{props.copyright}</span>
				</div>
			</footer>
		</div>
	);
}

Footer.propTypes = {
	copyright: PropType.string
};
