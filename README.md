                        [OPERAÇÃO SOSSEGA MILA !!!!]


Necessidade:

    - Arduino UNO
    - MicroServo 9G
    - Colar eletrônico de adestramento


Codigo de acionamento do Arduino = 
    
    "acionamento_remoto.ino"







Sistemas usados :

Arduino CLI         # Compilar o scketh e realizar o upload por linha de comando 
    https://docs.arduino.cc/arduino-cli/installation/

NGROCK
    https://ngrok.com/download/windows

    EXECUÇÃO NO TERMINAL:
        cd C:\Users\caminho\Desktop\ngrok-v3-stable-windows-amd64
        .\ngrok.exe config add-authtoken SEU_AUTHTOKEN                  #Verificar token no perfil após criar conta no ngrok
        .\ngrok.exe http 3000                                           # Executar na porta que voce configurou

        

comando que será usado no terminal para acionamento do Arduino

    #arduino-cli upload -p COM9 --fqbn arduino:avr:uno C:\Users\riyck\Desktop\www\acionamento_remoto