import React from "react"
import { Link } from "react-router-dom"

import { AiOutlineMenu } from "react-icons/ai"
import { FaUserPlus, FaShoppingCart } from "react-icons/fa"
import { ImUserMinus } from "react-icons/im"

import imgLogo from "./../../assets/img/logo.svg"
import styles from "./header.module.scss"
import { useState } from "react"
import { navLinks } from "../../utils"
import { useCartContext } from "../../AppProvider"

export const Header = () => {
	const [isMenuOpen, setMenuOpen] = useState(false)
	const { userToken, handleLogOut } = useCartContext()
	console.log(userToken)

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
			<Link to="/">
				<img src={imgLogo} alt="" className="logo" />
			</Link>
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
					{userToken.email !== "" && (
						<Link
							to="/checkout"
							className={styles["menu-item"]}
							onClick={handleRouteClick}
						>
							checkout
						</Link>
					)}
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
						{userToken.email === "" && (
							<Link to="/login" onClick={handleRouteClick}>
								login <FaUserPlus />
							</Link>
						)}
						{userToken.email !== "" && (
							<div onClick={handleLogOut}>
								logout
								<ImUserMinus />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
