const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
	if (req.method === 'GET') {
		res.writeHead(200, {'Content-Type': 'text/html'})

		if (req.url === '/') {
			fs.readFile(path.join(__dirname, 'templates', 'index.html'), 'utf-8', (err, conten) => {
				if (err) throw err
				res.end(conten)
			})
		} else if (req.url === '/about') {
			fs.readFile(path.join(__dirname, 'templates', 'about.html'), 'utf-8', (err, conten) => {
				if (err) throw err
				res.end(conten)
			})
		} else if (req.url === '/contact') {
			fs.readFile(path.join(__dirname, 'templates', 'contact.html'), 'utf-8', (err, conten) => {
				if (err) throw err
				res.end(conten)
			})
		} else if (req.url === '/api/admin') {
			res.writeHead(200, {'Content-Type': 'text/json'})
			const admin = {name: 'Samar', surname: 'Badriddinov', job: 'Full-Stack developer'}
			res.end(JSON.stringify(admin))
		}
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
