import "./style.css";

import { convertToUnicode } from "./converter";

import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

// This function is triggered every time the user types
function handleInputChange() {
  const preetiInput = document.getElementById("preetiInput").value;
  const unicodeOutput = document.getElementById("unicodeOutput");

  // console.log("Preeti Input: ", preetiInput); // Debugging the input

  // Convert the Preeti text to Unicode
  const convertedText = convertToUnicode(preetiInput);

  // Set the converted text in the unicodeOutput textarea
  unicodeOutput.value = convertedText;
}

// Add event listener to the textarea element
document
  .getElementById("preetiInput")
  .addEventListener("input", handleInputChange);
