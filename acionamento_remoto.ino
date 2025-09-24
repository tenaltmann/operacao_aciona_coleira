#include <Servo.h>

Servo meuServo;  // cria objeto do tipo Servo

void setup() {
  meuServo.attach(9); // define que o sinal está no pino 9
}

void loop() {
  meuServo.write(90);   // vai para 90 graus
  delay(2500);          
  meuServo.write(0);  // vai para 180 graus
  while (true);       // congela o código aqui
}

