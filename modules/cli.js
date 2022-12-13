const logger = () => {
	const resp = {}

	for (let i = 2; i < process.argv.length; i++) {
		const arg = process.argv[i].split('=')
		resp[arg[0]] = arg[1] ? arg[1] : true
	}

	return resp
}

console.log(logger())
