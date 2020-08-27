import React, { useState } from "react";
import "./Card.scss";
import Cat from "../images/Cat.png";
import classNames from "class-names";
export interface CardProps {
	taste?: string;
	weight?: string | number;
	pieces?: number;
	mouses?: number;
	moreInfo?: string;
	disabled?: boolean;
	isSelected?: boolean;
	activeText?: string;
}
const mouseForm = (count: number): string => {
	const end = count % 10;
	return end === 1 ? "мышь" : end > 1 && end < 5 ? "мыши" : "мышей";
};
const pieceForm = (count: number): string => {
	const end = count % 10;
	return end === 1 ? "порция" : end > 1 && end < 5 ? "порции" : "порций";
};
export const Card: React.FC<CardProps> = ({
	taste,
	weight,
	pieces,
	mouses,
	moreInfo,
	disabled,
	isSelected,
	activeText,
}) => {
	const [selected, setSelected] = useState(!!isSelected);
	const [title, setTitle] = useState("Сказочное заморское яство");
	const classes = classNames(
		"card",
		{ card_disabled: disabled },
		{ card_selected: selected }
	);
	let clicked: boolean = false;
	const onClickHandler = () => {
		clicked = true;
	};
	const onLeaveHandler = () => {
		selected && setTitle("Сказочное заморское яство");
		if (!selected && clicked) {
			clicked = false;
			setSelected(true);
		} else if (selected && clicked) {
			clicked = false;
			setSelected(false);
		}
	};
	return (
		<div className="card-wrap">
			<div
				className={classes}
				onClick={() => !disabled && onClickHandler()}
				onMouseLeave={() => !disabled && onLeaveHandler()}
				onMouseEnter={() =>
					!disabled && selected && setTitle("Котэ не одобряет?")
				}
			>
				<div className="head">
					<div className="head__angle"></div>
					<div className="head__end">
						<p className="card__title">{title}</p>
					</div>
				</div>
				<div className="body">
					<p className="card__name">Нямушка</p>
					<p className="card__taste">{taste}</p>
					<p className="card__text">
						<span style={{ fontWeight: "bold" }}>{pieces}&nbsp;</span>
						{pieceForm(pieces!)}
					</p>
					{mouses! > 0 && (
						<p className="card__text">
							{mouses! > 1 ? (
								<span style={{ fontWeight: "bold" }}>{mouses}&nbsp;</span>
							) : null}
							{mouseForm(mouses!)} в подарок
						</p>
					)}
					{moreInfo && <p className="card__text">{moreInfo}</p>}
					<div className="card__container">
						<img src={Cat} alt="Cat" className="card__image" />
					</div>
					<div className="card__ellipse">
						<span className="card__weight">{weight}</span>
						<br></br>
						кг
					</div>
				</div>
			</div>
			{disabled ? (
				<p className="description description_yellow">
					Печалька, {taste} закончился.
				</p>
			) : selected ? (
				<p className="description">{activeText}</p>
			) : (
				<p className="description">
					Чего сидишь? Порадуй котэ,&nbsp;
					<span
						className="description__link"
						onClick={setSelected.bind(null, true)}
					>
						купи.
					</span>
				</p>
			)}
		</div>
	);
};
Card.defaultProps = {
	taste: "c фуа-гра",
	weight: "0,5",
	mouses: 1,
	pieces: 10,
	moreInfo: "",
	disabled: false,
	isSelected: true,
	activeText: "Печень утки разварная с артишоками.",
};
