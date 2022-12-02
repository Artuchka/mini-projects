import React from "react"
import { useFormik, Formik, Field, Form } from "formik"

import style from "./filter-form.module.scss"
import { useProductsContext } from "../../AppProvider"
import { useEffect } from "react"
import { useState } from "react"
import { Loading } from "../Loading"

// let categoryList = ["all", "office", "living room"]
// let companyList = ["all", "marcos", "liddy", "ikea"]
// let colorsList = ["all", "red", "green", "violet", "gray", "orange"]

const initialFilters = {
	search: "",
	company: "all",
	category: "all",
	color: "any",
	price: "1200",
	"free-shipping": "false",
}
export const FilterForm = ({ className }) => {
	const {
		setFilters,
		items,
		isAllLoading: loading,
		errorAll: error,
	} = useProductsContext()

	useEffect(() => {
		Object.keys(initialFilters).map((name) => {
			setFilters({ name, value: initialFilters[name] })
		})
	}, [])
	const [categoryList, setcategoryList] = useState([])
	const [companyList, setcompanyList] = useState([])
	const [colorsList, setcolorsList] = useState([])

	useEffect(() => {
		const obj = items.reduce(
			(total, curr) => {
				total.categorySet.add(curr.category)
				total.companySet.add(curr.company)
				total.colorsSet.add(...curr.colors)
				return total
			},
			{
				categorySet: new Set(),
				companySet: new Set(),
				colorsSet: new Set(),
			}
		)
		// { categorySet, companySet, colorsSet } = obj

		setcategoryList(Array.from(["all", ...obj.categorySet]))
		setcompanyList(Array.from(["all", ...obj.companySet]))
		setcolorsList(Array.from(obj.colorsSet))
	}, [items])

	if (loading) {
		return <Loading />
	}

	if (error.code !== "") {
		const { message, code, name } = error
		console.log(error)
		return (
			<h1>
				Error occured: {message} {code}
			</h1>
		)
	}
	const resetForm = () => {
		console.log("reseting")
	}
	return (
		<form
			onChange={(e) => {
				if (e.target.name === "free-shipping") {
					setFilters({ name: e.target.name, value: e.target.checked })
					console.log(`${e.target.name} ${e.target.checked}`)
					return
				}
				setFilters({ name: e.target.name, value: e.target.value })
				console.log(`${e.target.name} ${e.target.value}`)
			}}
			className={`${className} ${style["form"]}`}
		>
			<input
				type="text"
				name="search"
				className={style["search"]}
				placeholder="search"
				defaultValue={initialFilters.search}
			/>

			<div className="category">
				<div className={style["title"]}>category</div>
				<div className={style["category-list"]}>
					{categoryList.map((cat) => {
						return (
							<div className={style["category-item"]} key={cat}>
								<input
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

				<select
					as="select"
					name="company"
					className={style["company-list"]}
				>
					{companyList.map((comp) => (
						<option value={comp} key={comp}>
							{comp}
						</option>
					))}
				</select>
			</div>

			<div className="color">
				<div className={style["title"]}>color</div>

				<div className={style["colors-list"]}>
					<div
						className={`${style["colors-item"]} ${style["colors-item-any"]}`}
					>
						<input type="radio" id="any" value="any" name="color" />
						<label htmlFor="any">Any</label>
					</div>

					{colorsList.map((color) => (
						<div className={style["colors-item"]} key={color}>
							<input
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
				<input type="range" name="price" max={5000} />
			</div>
			<div className={style["free-shipping"]}>
				<label htmlFor="shipping" className={style["title"]}>
					free shipping
				</label>
				<input name="free-shipping" id="shipping" type="checkbox" />
			</div>
			<button
				type="button"
				className="btn btn--small btn--red"
				onClick={resetForm}
			>
				clear filters
			</button>
		</form>
	)
}
