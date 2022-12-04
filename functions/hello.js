const items = [{ id: 1, name: "temka" }]

exports.handler = async (event, context) => {
	return {
		statusCode: 200,
		body: JSON.stringify(items),
	}
}
