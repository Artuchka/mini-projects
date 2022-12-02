import React from "react"
import { useFormik, Formik, Field, Form } from "formik"
import { HiSquares2X2 } from "react-icons/hi2"
import { BsFilterSquare } from "react-icons/bs"
import style from "./sortform.module.scss"

const viewtypes = [
	{ icon: <HiSquares2X2 />, value: "tiles" },
	{ icon: <BsFilterSquare />, value: "list" },
]

const sorttypes = [
	{ value: "price_low", text: "Price(lowest)" },
	{ value: "price_high", text: "Price(highest)" },
	{ value: "name_az", text: "Name(A-Z)" },
	{ value: "name_za", text: "Name(Z-A)" },
]
export const SortForm = ({ className }) => {
	return (
		<Formik
			initialValues={{
				view: "tiles",
				sortBy: "price_low",
			}}
		>
			{(props) => (
				<Form
					onChange={() => {
						console.log(props.values)
					}}
					className={`${className} ${style["form"]}`}
				>
					<div className={style["view-container"]}>
						{viewtypes.map((view) => {
							return (
								<div key={view.value}>
									<Field
										type="radio"
										name="view"
										value={view.value}
										id={view.value}
									/>
									<label htmlFor={view.value}>
										{view.icon}
									</label>
								</div>
							)
						})}
					</div>

					<div className="found">{23} Products Found</div>
					<div className={style["line"]}></div>

					<div className={style["sortby-container"]}>
						<span>Sort By</span>
						<Field as="select" name="sortBy">
							{sorttypes.map((sort) => {
								return (
									<option value={sort.value} key={sort.value}>
										{sort.text}
									</option>
								)
							})}
						</Field>
					</div>
				</Form>
			)}
		</Formik>
	)
}
