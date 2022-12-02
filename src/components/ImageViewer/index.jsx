import React from "react"
import { useState } from "react"
import styles from "./image-viewer.module.scss"

export const ImageViewer = ({ images }) => {
	const [activeIndex, setActiveIndex] = useState(0)

	console.log(images)
	const { url, width } = images[activeIndex]
	return (
		<div className={styles["image-viewer"]}>
			<img
				src={url}
				className={styles["active-image"]}
				style={
					{
						// width: width,
					}
				}
				alt="image"
			/>

			<div className={styles["images-container"]}>
				{images.map((img, index) => {
					const {
						thumbnails: {
							large: { url },
						},
					} = img
					return (
						<img
							key={index}
							src={url}
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
