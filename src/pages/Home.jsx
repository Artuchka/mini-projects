import React from "react"
import { InfoCard } from "../components/InfoCard"
import { Product } from "./../components/Product"
import { Link } from "react-router-dom"

import "./styles/home.scss"

export const Home = () => {
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
					<Product />
					<Product />
					<Product />
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

			<footer className="footer">
				<div>
					<div className="copyright">© 2022 ComfySloth</div>
					<div className="rights">All rights reserved</div>
				</div>
			</footer>
		</main>
	)
}
