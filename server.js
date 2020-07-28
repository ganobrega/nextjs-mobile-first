const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const device = require('device');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
        const parsedUrl = parse(req.url, true)

        const _device = device(req.headers['user-agent']);

        req.device = _device.type;

        handle(req, res, parsedUrl)
    }).listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})