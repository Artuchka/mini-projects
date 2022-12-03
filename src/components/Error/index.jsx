import React, { useEffect } from "react"
import { useCartContext } from "../../AppProvider"
import style from "./error.module.scss"

export const Error = () => {
	const { error, disableError } = useCartContext()

	useEffect(() => {
		const id = setTimeout(() => {
			disableError()
		}, 3000)
		return () => clearTimeout(id)
	}, [error.message])

	return (
		<div
			className={`${style["error"]} ${error.active ? style["open"] : ""}`}
		>
			{error.message}
		</div>
	)
}
