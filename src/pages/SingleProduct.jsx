import React from "react"
import { Link, useParams } from "react-router-dom"
import { ImageViewer } from "../components/ImageViewer"
import "./styles/singleProduct.scss"
import { useProductsContext } from "../AppProvider"
import { Actions } from "../components/Actions"
import { Loading } from "../components/Loading"
import { useEffect } from "react"

export const SingleProduct = () => {
	const { id } = useParams()
	const {
		singleItem: item,
		fetchSingle,
		isSingleLoading: loading,
		errorSingle: error,
	} = useProductsContext()

	useEffect(() => {
		fetchSingle(id)
	}, [id])

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

	const {
		images,
		name,
		category,
		reviews,
		stars,
		stock,
		colors,
		company,
		description,
		price,
		shipping,
	} = item
	return (
		<div className="single-product">
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
					<span>{stock}</span>
					<span>SKU</span>
					<span>{id}</span>
					<span>Brand</span>
					<span>{company}</span>
				</div>
			</div>
			{stock > 0 && <Actions colors={colors} item={item} />}
		</div>
	)
}
