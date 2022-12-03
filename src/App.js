import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "./Layout"
import { About } from "./pages/About"
import { Cart } from "./pages/Cart"
import { Checkout } from "./pages/Checkout"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Products } from "./pages/Products"
import { SingleProduct } from "./pages/SingleProduct"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="cart" element={<Cart />} />
					<Route path="login" element={<Login />} />
					<Route path="products" element={<Products />} />
					<Route path="checkout" element={<Checkout />} />
					<Route path="products/:id" element={<SingleProduct />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
