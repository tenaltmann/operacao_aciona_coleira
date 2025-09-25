#include <Servo.h>

Servo meuServo;

void setup() {
  Serial.begin(9600);
  meuServo.attach(9);
  meuServo.write(0);

}

void loop() {
  if (Serial.available() > 0) {
    String cmd = Serial.readStringUntil('\n');
    cmd.trim();
    if (cmd == "RUN") {
      Serial.println("Comando recebido!");
      meuServo.write(90);
      delay(2500);
      meuServo.write(0);
      Serial.println("OK");
    }
  }
}
