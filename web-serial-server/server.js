const express = require('express');
const http = require('http');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

const SERIAL_PORT = 'COM9'; // ajuste para sua porta
const BAUD = 9600;

app.use(express.static('public'));

io.on('connection', socket => {
  console.log('💻 Cliente conectado');

  let port; // SerialPort vai ser criado só no clique

  socket.on('command', async cmd => {
    if (cmd === 'RUN') {
      // Se ainda não abriu a Serial, abra agora
      if (!port) {
        port = new SerialPort({ path: SERIAL_PORT, baudRate: BAUD });
        const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));
        parser.on('data', line => console.log('Arduino:', line));
        await new Promise(res => setTimeout(res, 1000)); // espera 1s para Arduino resetar
        console.log('✅ Porta serial aberta');
      }

      // Envia o comando
      port.write('RUN\n', err => {
        if (err) console.error('❌ Erro ao enviar comando serial:', err);
      });
    }
  });

  socket.on('disconnect', () => console.log('❌ Cliente desconectado'));
});

const PORT = 3000;
server.listen(PORT, () => console.log(`🚀 Servidor rodando em http://localhost:${PORT}`));
