import React from "react"
import { useState } from "react"
import styles from "./Card.module.scss"
console.log(styles)
export const Card = ({ id, imgSrc, title, text, handleDelete }) => {
	const [opened, setOpened] = useState(false)

	return (
		<div className={styles.card}>
			<img src={imgSrc} alt="" className={styles.cardImage} />
			<div className={styles.cardInfo}>
				<div className={styles.cardHeader}>
					<h1 className={styles.cardTitle}>{title}</h1>
					<div className={styles.cardPrice}>$1,995</div>
				</div>
				<div className={styles.cardText}>
					<div
						style={
							opened
								? {}
								: {
										display: "-webkit-box",
										WebkitLineClamp: 3,
										WebkitBoxOrient: "vertical",
										overflow: "hidden",
								  }
						}
					>
						{text}
					</div>
					<span onClick={() => setOpened((prev) => !prev)}>
						{opened ? "Show Less" : "Read More"}
					</span>
				</div>
				<button
					className={styles.cardClose}
					onClick={() => handleDelete(id)}
				>
					not interested
				</button>
			</div>
		</div>
	)
}
