import axios from "axios"
import { useEffect, useState } from "react"

const apiSingle = "https://course-api.com/react-store-single-product"

export const useFetchSingle = (id) => {
	const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState("")
	const [item, setItem] = useState({})

	const getItem = async () => {
		setLoading(true)
		try {
			const resp = await axios.get(`${apiSingle}?id=${id}`)
			const { data } = resp
			setItem(data)
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getItem()
	}, [id])

	return { loading: isLoading, item, error }
}
