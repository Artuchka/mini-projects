import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./Layout"
import { Home } from "./pages/Home"
import { Products } from "./pages/Products"
import { SingleProduct } from "./pages/SingleProduct"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="products" element={<Products />} />
					<Route path="products/:id" element={<SingleProduct />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
