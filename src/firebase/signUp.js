import "./firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const auth = getAuth()

export const signUp = (credential, resolveCallback, rejectCallback) => {
	const { email, password } = credential
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			resolveCallback(userCredential["_tokenResponse"])
		})
		.catch((errorResp) => {
			const {
				_tokenResponse: { error },
			} = errorResp.customData
			rejectCallback(error)
		})
}
