import http from 'http';

const port = 3000;
const host = '0.0.0.0';

console.log(`Attempting to start server on ${host}:${port}...`);

try {
    const server = http.createServer((req, res) => {
        console.log(`Received request from ${req.socket.remoteAddress}`);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Diagnostic Success!</h1><p>Your system networking is working. The issue is with the main app configuration.</p>');
    });

    server.listen(port, host, () => {
        console.log(`Server is running! Open http://localhost:${port} in your browser.`);
    });

    server.on('error', (e) => {
        console.error('Server error:', e);
    });

} catch (err) {
    console.error('Fatal startup error:', err);
}
