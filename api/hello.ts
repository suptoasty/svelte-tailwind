import { VercelRequest, VercelResponse } from "@vercel/node"

export default (request: VercelRequest, response: VercelResponse) => {
	const { name = "world" } = request.query
	response.status(200).send(`Hello ${name}!`)
}
