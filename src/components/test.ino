int color = 0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  color = 1; // Change color to 1 for green
  
  if (color == 1) {
    Serial.println("green"); // Send "green" over serial if color is green
  }
  
  delay(10);
}
