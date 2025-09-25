const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Endpoint chamado pelo botão
app.get('/upload', (req, res) => {
  // Comando que vai enviar o sketch para o Arduino
  const cmd = 'arduino-cli upload -p COM9 --fqbn arduino:avr:uno C:/Users/riyck/Desktop/www/acionamento_remoto';

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro: ${error.message}`);
      return res.send(`Erro: ${error.message}`);
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return res.send(`Stderr: ${stderr}`);
    }
    console.log(`Stdout: ${stdout}`);
    res.send('Upload executado com sucesso! Servo acionado.');
  });
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));