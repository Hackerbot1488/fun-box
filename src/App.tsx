import React from "react";
import { Card } from "./components/Card";
import { CardProps } from "./components/Card";
const cards: CardProps[] = [
	{
		taste: "с фуа-гра",
		weight: "0,5",
		pieces: 10,
		mouses: 1,
		moreInfo: "",
		disabled: false,
		activeText: "Печень утки разварная с артишоками.",
	},
	{
		taste: "с рыбой",
		weight: "2",
		pieces: 40,
		mouses: 2,
		moreInfo: "",
		disabled: false,
		activeText: "Головы щучьи с чесноком да свежайшая сёмгушка.",
	},
	{
		taste: "с курой",
		weight: "5",
		pieces: 100,
		mouses: 5,
		moreInfo: "заказчик доволен",
		disabled: true,
		activeText: "Филе из цыплят с трюфелями в бульоне.",
	},
];
export const App: React.FC<{}> = () => {
	console.log(document.documentElement.clientWidth);
	return (
		<div className="wrap-container">
			<p className="title">Ты сегодня покормил кота?</p>
			<div className="container">
				{/* {cards.map((card: CardProps, index: number) => {
					return <Card {...card} key={card.taste} />;
				})} */}
				<Card {...cards[0]} />
				<div className="container">
					<Card {...cards[1]} />
					<Card {...cards[2]} />
				</div>
			</div>
		</div>
	);
};
