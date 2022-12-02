import React from "react"
import { Field, Form, Formik, useFormik } from "formik"
import { useState } from "react"
import { useCartContext } from "../../AppProvider"

export const Actions = ({ colors, item }) => {
	const [amount, setAmount] = useState(1)
	const { addItemToCart } = useCartContext()
	const handleAddToCard = (values) => {
		addItemToCart({ ...item, ...values, amount })
	}

	return (
		<Formik
			initialValues={{
				color: colors[0],
			}}
			onSubmit={async (values) => {
				handleAddToCard(values)
			}}
		>
			{({ values }) => (
				<Form
					className="actions"
					onChange={() => {
						console.log(values)
					}}
				>
					<Colors colors={colors} values={values} />
					<Count
						amount={amount}
						setAmount={setAmount}
						max={item.stock}
					/>

					<button type="submit" className="btn">
						add to cart
					</button>
				</Form>
			)}
		</Formik>
	)
}

export const Count = ({ amount, setAmount, max }) => {
	const handleAdd = () => {
		setAmount((prev) => Math.min(prev + 1, max))
	}
	const handleRemove = () => {
		setAmount((prev) => prev - 1)
	}
	return (
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
			<button type="button" className="btn--amount" onClick={handleAdd}>
				+
			</button>
		</div>
	)
}

const Colors = ({ colors, values }) => {
	return (
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
								values.color === color ? "active" : ""
							}`}
							style={{ "--bg-color": color }}
						/>
					)
				})}
			</div>
		</div>
	)
}
