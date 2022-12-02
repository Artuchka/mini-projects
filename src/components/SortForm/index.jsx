import React from "react"
import { HiSquares2X2 } from "react-icons/hi2"
import { BsFilterSquare } from "react-icons/bs"
import style from "./sortform.module.scss"
import { useProductsContext } from "../../AppProvider"
import { useEffect } from "react"

export const viewtypes = [
	{ icon: <HiSquares2X2 />, value: "tiles" },
	{ icon: <BsFilterSquare />, value: "list" },
]

export const sorttypes = [
	{ value: "price_low", text: "Price(lowest)" },
	{ value: "price_high", text: "Price(highest)" },
	{ value: "name_az", text: "Name(A-Z)" },
	{ value: "name_za", text: "Name(Z-A)" },
]
export const SortForm = ({ className, amount }) => {
	const { setSort } = useProductsContext()

	const handleChange = (e) => {
		setSort({ name: e.target.name, value: e.target.value })
	}

	useEffect(() => {
		setSort({ name: "sortBy", value: "price_low" })
		setSort({ name: "view", value: "tiles" })
	}, [])

	return (
		<form
			onChange={(e) => {
				handleChange(e)
			}}
			className={`${className} ${style["form"]}`}
		>
			<div className={style["view-container"]}>
				{viewtypes.map((view) => {
					return (
						<div key={view.value}>
							<input
								type="radio"
								name="view"
								value={view.value}
								id={view.value}
							/>
							<label htmlFor={view.value}>{view.icon}</label>
						</div>
					)
				})}
			</div>

			<div className="found">{amount} Products Found</div>
			<div className={style["line"]}></div>

			<div className={style["sortby-container"]}>
				<span>Sort By</span>
				<select as="select" name="sortBy">
					{sorttypes.map((sort) => {
						return (
							<option value={sort.value} key={sort.value}>
								{sort.text}
							</option>
						)
					})}
				</select>
			</div>
		</form>
	)
}
