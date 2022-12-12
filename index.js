const http = require('http')

const server = http.createServer((request, response) => {
	// request - so'rov
	// response - javob
	console.log(request.url)

	response.write('<h1>Hello world 3</h1>')
	response.write('<h1>Hello world 1</h1>')
	response.end()
})

server.listen(3000, () => {
	console.log('Server has been started on port: 3000')
})
