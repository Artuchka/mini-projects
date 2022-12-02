import React from "react"
import { Link } from "react-router-dom"

import { AiOutlineMenu } from "react-icons/ai"
import { FaUserPlus, FaShoppingCart } from "react-icons/fa"

import imgLogo from "./../../assets/img/logo.svg"
import styles from "./header.module.scss"
import { useState } from "react"
import { navLinks } from "../../utils"

export const Header = () => {
	const [isMenuOpen, setMenuOpen] = useState(false)
	const handleMenuOpen = () => {
		setMenuOpen(true)
	}
	const handleMenuClose = () => {
		setMenuOpen(false)
	}

	const handleRouteClick = () => {
		handleMenuClose()
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
					{navLinks.map((link) => {
						return (
							<li key={link.url}>
								<Link
									to={link.url}
									className={styles["menu-item"]}
									onClick={handleRouteClick}
								>
									{link.name}
								</Link>
							</li>
						)
					})}
				</ul>
				<div className={styles["icons"]}>
					<div className={styles["cart-icon"]}>
						<Link to="/cart" onClick={handleRouteClick}>
							cart
							<span>
								<FaShoppingCart />
								<small>{0}</small>
							</span>
						</Link>
					</div>
					<div className={styles["login-icon"]}>
						<Link to="/login" onClick={handleRouteClick}>
							login <FaUserPlus />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
