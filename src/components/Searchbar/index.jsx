import React from "react"
import { AiOutlineSearch } from "react-icons/ai"

import "./search-bar.scss"

export const Searchbar = () => {
	const handleSubmit = (e) => {
		e.preventDefault()
	}
	return (
		<form className="search-bar" onSubmit={handleSubmit}>
			<div className="input-area">
				<AiOutlineSearch />
				<input type="text" placeholder="enter github user" />
				<button className="btn">search</button>
			</div>
			<div className="req-stats">Requests : 54 / 60</div>
		</form>
	)
}
