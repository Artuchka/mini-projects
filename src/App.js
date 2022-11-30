import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./Layout"
import { Home } from "./pages/Home"
import { Products } from "./pages/Products"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="products" element={<Products />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
