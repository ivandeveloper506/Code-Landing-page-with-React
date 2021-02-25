import React from "react";
import PropType from "prop-types";

export function Jumbotron(props) {
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col">
					<div className="container mt-4"></div>
					<div className="jumbotron">
						<h1 className="display-4">{props.title}</h1>
						<p className="lead">{props.description}</p>
						<a
							target="_blank"
							className="btn btn-primary btn-lg"
							href={props.buttonUrl}
							role="button">
							{props.buttonLabel}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

Jumbotron.propTypes = {
	title: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string
};
