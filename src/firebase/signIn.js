import "./firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const auth = getAuth()

export const signIn = (credential, resolveCallback, rejectCallback) => {
	const { email, password } = credential
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			resolveCallback(userCredential["_tokenResponse"])
		})
		.catch((errorResp) => {
			const { code, name } = errorResp
			rejectCallback({ message: code, code, name })
		})
}
