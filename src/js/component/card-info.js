import React from "react";
import { Card } from "./card.js";

export function CardInfo() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-6 col-lg-3">
					<Card
						alt="Card Image 1"
						title="Card Title 1"
						description="Card Description 1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ipsum hic velit cupiditate saepe quidem."
						buttonUrl="https://getbootstrap.com/docs/4.0/components/card/"
						buttonLabel="Find Out More!"
						imageUrl="https://www.hawaiimasonsunion.org/sites/default/files/page/featured/650-413.png"
					/>
				</div>
				<div className="col-sm-6 col-lg-3">
					<Card
						alt="Card Image 2"
						title="Card Title 2"
						description="Card Description 2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ipsum hic velit cupiditate saepe quidem."
						buttonUrl="https://getbootstrap.com/docs/4.0/components/card/"
						buttonLabel="Find Out More!"
						imageUrl="https://www.hawaiimasonsunion.org/sites/default/files/page/featured/650-413.png"
					/>
				</div>
				<div className="col-sm-6 col-lg-3">
					<Card
						alt="Card Image 3"
						title="Card Title 3"
						description="Card Description 3. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ipsum hic velit cupiditate saepe quidem."
						buttonUrl="https://getbootstrap.com/docs/4.0/components/card/"
						buttonLabel="Find Out More!"
						imageUrl="https://www.hawaiimasonsunion.org/sites/default/files/page/featured/650-413.png"
					/>
				</div>
				<div className="col-sm-6 col-lg-3">
					<Card
						alt="Card Image 4"
						title="Card Title 4"
						description="Card Description 4. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ipsum hic velit cupiditate saepe quidem."
						buttonUrl="https://getbootstrap.com/docs/4.0/components/card/"
						buttonLabel="Find Out More!"
						imageUrl="https://www.hawaiimasonsunion.org/sites/default/files/page/featured/650-413.png"
					/>
				</div>
			</div>
		</div>
	);
}
