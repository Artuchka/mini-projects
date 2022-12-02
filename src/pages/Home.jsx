import React from "react"
import { InfoCard } from "../components/InfoCard"
import { Product } from "./../components/Product"
import { Link } from "react-router-dom"

import "./styles/home.scss"
import { Footer } from "../components/Footer"
import { useProductsContext } from "../AppProvider"
import { Loading } from "../components/Loading"

export const Home = () => {
	const {
		items,
		isAllLoading: loading,
		errorAll: error,
	} = useProductsContext()
	if (loading) {
		return <Loading />
	}

	if (error.code !== "") {
		console.log(error)
		return (
			<h1>
				Error occured: {error.message} {error.code}
			</h1>
		)
	}
	return (
		<main className="main">
			<div className="hero">
				<h1 className="title">
					<div className="part">Design Your</div>
					<div className="part">Comfort Zone</div>
				</h1>
				<div className="text">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Iusto, at sed omnis corporis doloremque possimus velit!
					Repudiandae nisi odit, aperiam odio ducimus, obcaecati
					libero et quia tempora excepturi quis alias?
				</div>
				<Link to="/products" className="btn btn--small">
					shop now
				</Link>
			</div>

			<section className="featured-products">
				<h1 className="title">Featured Products</h1>
				<div className="list">
					{items.slice(0, 3).map((item) => {
						return <Product {...item} key={item.id} />
					})}
				</div>
				<Link to="/products" className="btn btn--small">
					all products
				</Link>
			</section>

			<section className="highlighted">
				<h2 className="title">
					<div className="part">Custom Furniture</div>
					<div className="part">Built Only For You</div>
				</h2>
				<div className="text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Saepe dolorum debitis consectetur reprehenderit non aliquam
					voluptates dolore aut vero consequuntur.
				</div>

				<div className="list">
					<InfoCard />
					<InfoCard />
					<InfoCard />
				</div>
			</section>

			<section className="join-section">
				<h2 className="title">Join our newsletter and get 20% off</h2>
				<div className="text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Placeat sint unde quaerat ratione soluta veniam provident
					adipisci cumque eveniet tempore?
				</div>
				<form action="" className="form">
					<input type="text" placeholder="enter email" />
					<button className="btn">subscribe</button>
				</form>
			</section>
		</main>
	)
}
