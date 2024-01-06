const inputs = document.querySelectorAll("input");
const celsiusEl = document.getElementById("celsius");
const fehrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    if (e.target.value !== "") {
      const userInput = +e.target.value;
      getConverteduserInput(e.target, userInput);
    } else {
      [celsiusEl, fehrenheitEl, kelvinEl].map((e) => {
        e.value = "";
      });
    }
  });
});

function getConverteduserInput(target, userInput) {
  switch (target.id) {
    case "celsius":
      fehrenheitEl.value = (userInput * 1.8 + 32).toFixed(2);
      kelvinEl.value = (userInput + 273.15).toFixed(2);
      break;
    case "fahrenheit":
      celsiusEl.value = ((userInput - 32) * (5 / 9)).toFixed(2);
      kelvinEl.value = ((userInput - 32) * (5 / 9) + 273.15).toFixed(2);
      break;
    case "kelvin":
      celsiusEl.value = (userInput - 273.15).toFixed(2);
      fehrenheitEl.value = ((userInput - 273.15) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}
