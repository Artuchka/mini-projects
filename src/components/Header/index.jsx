import React from "react"
import { Link } from "react-router-dom"

import { AiOutlineMenu } from "react-icons/ai"
import { FaUserPlus, FaShoppingCart } from "react-icons/fa"

import imgLogo from "./../../assets/img/logo.svg"
import styles from "./header.module.scss"
import { useState } from "react"
console.log(styles)
export const Header = () => {
	const [isMenuOpen, setMenuOpen] = useState(false)
	const handleMenuOpen = () => {
		setMenuOpen(true)
	}
	const handleMenuClose = () => {
		setMenuOpen(false)
	}

	return (
		<div className={styles.header}>
			<img src={imgLogo} alt="" className="logo" />
			<AiOutlineMenu className={styles.menu} onClick={handleMenuOpen} />

			<div
				className={`${styles["menu-mobile"]} ${
					isMenuOpen ? styles["open"] : ""
				}`}
			>
				<div className={styles.heading}>
					<img src={imgLogo} alt="" className="logo" />
					<div className={styles.close} onClick={handleMenuClose}>
						&times;
					</div>
				</div>
				<ul className={styles["menu-list"]}>
					<li>
						<Link to="/" className={styles["menu-item"]}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/about" className={styles["menu-item"]}>
							About
						</Link>
					</li>
					<li>
						<Link to="/products" className={styles["menu-item"]}>
							Products
						</Link>
					</li>
				</ul>
				<div className={styles["icons"]}>
					<div className={styles["cart-icon"]}>
						cart
						<span>
							<FaShoppingCart />
							<small>{0}</small>
						</span>
					</div>
					<div className="login-icon">
						login <FaUserPlus />
					</div>
				</div>
			</div>
		</div>
	)
}
