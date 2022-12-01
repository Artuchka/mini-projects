import React from "react"
import { useState } from "react"
import styles from "./image-viewer.module.scss"

export const ImageViewer = ({ images }) => {
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<div className={styles["image-viewer"]}>
			<img
				src={images[activeIndex]}
				className={styles["active-image"]}
				alt="image"
			/>

			<div className={styles["images-container"]}>
				{images.map((img, index) => {
					return (
						<img
							key={index}
							src={img}
							className={styles["images-container-item"]}
							alt="image"
							onClick={() => setActiveIndex(index)}
						/>
					)
				})}
			</div>
		</div>
	)
}
