import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { MainLayout } from "./layouts/MainLayout"
import { About } from "./pages/About"
import { SingleItem } from "./pages/SingleItem"
import { ErrorPage } from "./pages/ErrorPage"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/item/:itemId" element={<SingleItem />} />
					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
