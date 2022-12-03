export const navLinks = [
	{ url: "/", name: "home" },
	{ url: "/about", name: "about" },
	{ url: "/products", name: "products" },
]

export const formatPrice = (price) => {
	return Intl.NumberFormat({ currency: "USD" }).format(price / 100)
}

const app_key = "React_E-commerce"
export const saveToLS = (name, data) => {
	const jsoned = JSON.stringify(data)
	localStorage.setItem(`${app_key}${name}`, jsoned)
}

export const getFromLS = (name) => {
	const jsoned = localStorage.getItem(`${app_key}${name}`)
	const data = JSON.parse(jsoned)
	console.log(data)
	return data
}
