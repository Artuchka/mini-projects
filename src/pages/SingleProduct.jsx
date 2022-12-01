import React from "react"
import { Link, useParams } from "react-router-dom"
import { Sugar } from "../components/Sugar"
import { ImageViewer } from "../components/ImageViewer"
import "./styles/singleProduct.scss"
import { useGlobalContext } from "../AppProvider"
import defImg1 from "./../assets/img/singleProduct/1.jpeg"
import defImg2 from "./../assets/img/singleProduct/2.jpeg"
import defImg3 from "./../assets/img/singleProduct/3.jpeg"
import defImg4 from "./../assets/img/singleProduct/4.jpeg"
import { Field, Form, Formik, useFormik } from "formik"
import { useState } from "react"

export const SingleProduct = () => {
	const { id } = useParams()
	const { items } = useGlobalContext()
	const item = items.find((obj) => obj.id === id)
	const [amount, setAmount] = useState(1)

	const handleAdd = () => {
		setAmount((prev) => prev + 1)
	}
	const handleRemove = () => {
		setAmount((prev) => prev - 1)
	}
	const handleAddToCard = () => {
		console.log("kinda adding to cart")
	}

	const formik = useFormik({
		initialValues: {
			color: "",
		},
		onSubmit(values) {
			console.log(values)
		},
		onChange(values) {
			console.log(values)
		},
	})

	if (!item) {
		return <h1>sorry could find your item</h1>
	}

	const { image, name, colors, company, description, price, shipping } = item
	const images = [image, defImg1, defImg2, defImg3, defImg4]
	return (
		<div className="single-product">
			<Sugar />
			<div className="main">
				<Link to="/products" className="btn">
					back to products
				</Link>
				<ImageViewer images={images} />

				<div className="info">
					<h2 className="name">{name}</h2>
					<div className="price">
						${new Intl.NumberFormat().format(price / 100)}
					</div>
					<div className="desc">{description}</div>
					<div className="grid-info">
						<span>Available</span>
						<span>In Stock</span>
						<span>SKU</span>
						<span>{id}</span>
						<span>Brand</span>
						<span>{company}</span>
					</div>
				</div>
				<Formik
					initialValues={{
						picked: "",
					}}
					onSubmit={async (values) => {
						await new Promise((r) => setTimeout(r, 500))
						alert(JSON.stringify(values, null, 2))
					}}
				>
					{({ values }) => (
						<Form
							className="actions"
							onChange={() => {
								console.log(values)
							}}
						>
							<div className="colors-input">
								<h4>Colors: </h4>
								<div className="colors">
									{colors.map((color) => {
										return (
											<Field
												key={color}
												type="radio"
												name="color"
												value={color}
												className={`color-radio ${
													values.color === color
														? "active"
														: ""
												}`}
												style={{ "--bg-color": color }}
											/>
										)
									})}
								</div>
							</div>

							<div className="count">
								<button
									onClick={handleRemove}
									disabled={amount <= 1}
									type="button"
									className="btn--amount"
								>
									-
								</button>
								<span>{amount}</span>
								<button
									type="button"
									className="btn--amount"
									onClick={handleAdd}
								>
									+
								</button>
							</div>

							<button type="submit" className="btn">
								add to cart
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}
