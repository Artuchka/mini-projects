import axios from "axios"
import { useEffect, useState } from "react"

const api = "https://course-api.com/react-store-products"

export const useFetch = () => {
	const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState("")
	const [items, setItems] = useState([])

	const getItems = async () => {
		setLoading(true)
		try {
			const resp = await axios.get(api)
			const { data } = resp
			setItems(data)
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getItems()
	}, [])

	return { isLoading, items, error }
}
