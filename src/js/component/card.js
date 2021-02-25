import React from "react";
import PropType from "prop-types";

export function Card(props) {
	return (
		<div className="card text-center mb-5">
			<img
				src={props.imageUrl}
				className="card-img-top"
				alt={props.alt}
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
			</div>
			<div className="card-footer">
				<small className="text-muted">
					<a
						target="_blank"
						href={props.buttonUrl}
						className="btn btn-primary">
						{props.buttonLabel}
					</a>
				</small>
			</div>
		</div>
	);
}

Card.propTypes = {
	alt: PropType.string,
	title: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
	imageUrl: PropType.string
};
