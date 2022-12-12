const http = require('http')

const server = http.createServer((req, res) => {
	if (req.method === 'GET') {
		res.writeHead(200, {'Content-Type': 'text/html'})

		res.end(`
			<h2>Send name</h2>
			<form method="post" action="/">
				<input name="name" placeholder="Enter your name" />
				<button type="submit">Send name</button>
			</form>
		`)
	} else if (req.method === 'POST') {
		const body = []
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})

		req.on('data', data => {
			body.push(Buffer.from(data))
		})

		req.on('end', () => {
			const message = body.toString().split('=')[1]

			res.end(`Name successfully added: ${message}`)
		})
	}
})

server.listen(3000, () => {
	console.log('Server has been started on port: 3000')
})
