import http from 'node:http';

const port = Number(process.env.PORT || ${{ values.port }});
const service = '${{ values.componentId }}';

const server = http.createServer((request, response) => {
  if (request.url === '/healthz' && request.method === 'GET') {
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify({ status: 'ok', service }));
    return;
  }

  response.writeHead(200, { 'content-type': 'application/json' });
  response.end(JSON.stringify({ service, message: 'golden-path service is running' }));
});

server.listen(port, () => {
  console.log(JSON.stringify({ event: 'service_started', service, port }));
});
