import React from "react"
import styles from "./loading.module.scss"
import { BiLoaderAlt } from "react-icons/bi"

export const Loading = () => {
	return (
		<div className={styles["loading"]}>
			<BiLoaderAlt />
		</div>
	)
}
