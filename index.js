const inputs = document.querySelectorAll("input");
const celsiusEl = document.getElementById("celsius");
const fehrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    if (e.target.value !== "") {
      const temp = +e.target.value;
      getConvertedTemp(e.target, temp);
    }
  });
});

function getConvertedTemp(target, temp) {
  switch (target.id) {
    case "celsius":
      fehrenheitEl.value = (temp * 9) / 5 + 32;
      kelvinEl.value = temp + 273.15;
      console.log(kelvinEl.value);
      break;
    case "fahrenheit":
      celsiusEl.value = ((temp - 32) * 5) / 9;
      kelvinEl.value = ((temp - 32) * 5) / 9 + 273.15;
      break;
    case "kelvin":
      celsiusEl.value = temp - 273.15;
      fehrenheitEl.value = ((temp - 273.15) * 9) / 5 + 32;
      break;

    default:
      break;
  }
}
