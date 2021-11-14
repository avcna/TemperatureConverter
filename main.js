const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("fahrenheit");
const reamurInput = document.getElementById("reamur");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function (e) {
    let value = e.target.value;

    switch (e.target.name) {
      case "celcius":
        fahrenheitInput.value = (value* 1.8) + 32;
        reamurInput.value = (value*4/5);
      break;
      case "fahrenheit":
        celciusInput.value = (value-32)*5/9;
        reamurInput.value = 4/9*(value-32);
      break;
      case "reamur":
        celciusInput.value =  (value*5/4);
        fahrenheitInput.value = 9/4*value+32;
      break;
      default:

    }
  });
}
