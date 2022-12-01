import React from "react"
import { Link, useLocation } from "react-router-dom"
import style from "./sugar.module.scss"

export const Sugar = () => {
	const { pathname } = useLocation()
	const links = pathname.split("/").filter((item) => !!item)
	const activePath = links.at(-1)
	return (
		<div className={style.sugar}>
			<Link to="/" className={style["sugar-link"]}>
				Home
			</Link>
			{links.map((link, index) => {
				return (
					<Link
						key={link}
						className={`${style["sugar-link"]} ${
							activePath === link ? style["active"] : ""
						}`}
						to={`/${links.slice(0, index + 1).join("/")}`}
					>
						{" "}
						/ {link}
					</Link>
				)
			})}
		</div>
	)
}
