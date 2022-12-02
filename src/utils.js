export const navLinks = [
	{ url: "/", name: "home" },
	{ url: "/about", name: "about" },
	{ url: "/products", name: "products" },
]

export const formatPrice = (price) => {
	return Intl.NumberFormat({ currency: "USD" }).format(price / 100)
}
