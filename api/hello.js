import faunadb, { query as q } from "faunadb"
import { each } from "svelte/internal"

const { FAUNADB_SECRET: secret } = process.env

let client

if (secret) {
	client = new faunadb.Client({ secret })
}

export default async (req, res) => {
	try {
		console.log(req, client, secret)

		let collections = []

		if (!client) {
			console.log(client)
			return res
				.status(500)
				.json({ error: new Error("Missing secret to connect to FaunaDB") })
		}

		await client.paginate(q.Collections()).map((ref) => q.Get(ref))
		each((page) => {
			collections = collections.concat(page)
		})

		res.status(200).json({ collections })
	} catch (error) {
		console.log("WORK!")
		res.status(500).json({ error })
	}
}
