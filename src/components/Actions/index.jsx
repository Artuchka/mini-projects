import React from "react"
import { Field, Form, Formik, useFormik } from "formik"
import { useState } from "react"

export const Actions = ({ colors }) => {
	const [amount, setAmount] = useState(1)
	const handleAddToCard = (values) => {
		console.log("kinda adding to cart")
		console.log({ ...values, amount })
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
					<Count amount={amount} setAmount={setAmount} />

					<button type="submit" className="btn">
						add to cart
					</button>
				</Form>
			)}
		</Formik>
	)
}

const Count = ({ amount, setAmount }) => {
	const handleAdd = () => {
		setAmount((prev) => prev + 1)
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
