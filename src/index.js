import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import App from "./App"
import { AppProvider } from "./AppProvider"
import "./firebase/firebase"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>
)
