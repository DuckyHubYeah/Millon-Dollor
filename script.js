body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
  padding: 20px;
  text-align: center;
}

.question {
  font-size: 20px;
  margin: 20px 0;
}

.options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 20px;
  justify-items: center;
}

.option {
  background-color: #4285f4;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 120px;
  font-size: 16px;
}

.option:hover {
  background-color: #365d8a;
}

.correct {
  border: 3px solid green;
  background-color: #e6ffe6;
  color: green;
}

.incorrect {
  border: 3px solid red;
  background-color: #ffe6e6;
  color: red;
}

.correct-circle {
  width: 10px;
  height: 10px;
  background-color: green;
  border-radius: 50%;
  display: inline-block;
  margin-left: 10px;
}

.timer {
  font-size: 18px;
  color: red;
  margin-top: 10px;
}

#pauseButton {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: orange;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
