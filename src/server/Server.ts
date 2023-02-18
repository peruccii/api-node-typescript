import express from 'express';

const server = express();

//Construindo uma rota de GET
server.get('/', (req, res) => {
  return res.send('Felipe')
});

export { server } 