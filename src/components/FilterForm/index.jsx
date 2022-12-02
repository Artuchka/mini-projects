import React from "react"
import { useFormik, Formik, Field, Form } from "formik"

import style from "./filter-form.module.scss"

const categoryList = ["all", "office", "living room"]
const companyList = ["all", "marcos", "liddy", "ikea"]
const colorsList = ["all", "red", "green", "violet", "gray", "orange"]

export const FilterForm = ({ className }) => {
	return (
		<Formik
			initialValues={{
				search: "sofa",
				company: "all",
				category: "all",
				color: "red",
				price: "1200",
				"free-shipping": "false",
			}}
		>
			{(props) => (
				<Form
					onChange={() => {
						console.log(props.values)
					}}
					className={`${className} ${style["form"]}`}
				>
					<Field
						type="text"
						name="search"
						className={style["search"]}
						placeholder="Search"
					/>

					<div className="category">
						<div className={style["title"]}>category</div>
						<div className={style["category-list"]}>
							{categoryList.map((cat) => {
								return (
									<div
										className={style["category-item"]}
										key={cat}
									>
										<Field
											type="radio"
											name="category"
											value={cat}
											className="radiobtn"
											id={cat}
										/>
										<label htmlFor={cat}>{cat}</label>
									</div>
								)
							})}
						</div>
					</div>

					<div className="company">
						<div className={style["title"]}>company</div>

						<Field
							as="select"
							name="company"
							className={style["company-list"]}
						>
							{companyList.map((comp) => (
								<option value={comp} key={comp}>
									{comp}
								</option>
							))}
						</Field>
					</div>

					<div className="color">
						<div className={style["title"]}>color</div>

						<div className={style["colors-list"]}>
							{colorsList.map((color) => (
								<div
									className={style["colors-item"]}
									key={color}
								>
									<Field
										type="radio"
										id={color}
										value={color}
										name="color"
									/>
									<label
										htmlFor={color}
										style={{ backgroundColor: color }}
									></label>
								</div>
							))}
						</div>
					</div>

					<div className="price">
						<div className={style["title"]}>price</div>
						<Field type="range" name="price" max={3000} />
					</div>
					<div className={style["free-shipping"]}>
						<div className={style["title"]}>free shipping</div>
						<Field name="free-shipping" type="checkbox" />
					</div>
					<button
						type="button"
						className="btn btn--small btn--red"
						onClick={props.resetForm}
					>
						clear filters
					</button>
				</Form>
			)}
		</Formik>
	)
}
