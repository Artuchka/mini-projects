import React from "react"
import styled from "styled-components"

import styles from "./info-card.module.scss"

export const InfoCard = () => {
	return (
		<div className={styles["info-card"]}>
			<div className={styles["image"]}></div>
			<h3>Mission</h3>
			<p className={styles["text"]}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
				velit autem unde numquam nisi
			</p>
		</div>
	)
}
