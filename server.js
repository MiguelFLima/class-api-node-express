const http = require("http");
const port = 3000;

const rotas = {
  "/": "Curso de Node",
  "/livros": "Entrei na página de livros",
  "/autores": "listagem de autores",
  "/editores": "Página de editores",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
