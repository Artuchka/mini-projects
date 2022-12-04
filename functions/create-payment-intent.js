// http://localhost:8888/.netlify/functions/create-payment-intent

const stripe = require("stripe")(
	"sk_test_51MAxWLBjYPBxkDu0F5giJjXsQorKYBLkDrhVFdgCrdb7W140cucAxZlMNHCICf4pMik8Hq6wNoeQYphpBQreY1Rj00jCSyIBC4"
)

exports.handler = async (event, context) => {
	if (event.body) {
		// console.log("event = ", event)
		const { totalAmount } = JSON.parse(event.body)
		const calculateAmount = () => {
			return totalAmount + 12
		}

		try {
			const paymentIntent = await stripe.paymentIntents.create({
				amount: calculateAmount(),
				currency: "usd",
			})
			return {
				statusCode: 200,
				body: JSON.stringify({
					clientSecret: paymentIntent.client_secret,
				}),
			}
		} catch (error) {
			return {
				statusCode: 500,
				body: JSON.stringify({ error: error.message }),
			}
		}
	}
	return {
		statusCode: 200,
		body: "create payment intent",
	}
}
