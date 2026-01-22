
const inputField = document.getElementById("display");

const buttons = document.querySelector(".buttons");
const children = buttons.children;
console.log(children);

Array.from(children).forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (button.classList.contains("number")) {
      inputField.value = inputField.value === "0" ? value : inputField.value + value;
    } else if (button.classList.contains("operator")) {
      inputField.value += ` ${value} `;
    } else if (button.classList.contains("equal")) {
      calculate();
    }
  });
});

const calculate = () => {
  inputField.value = eval(inputField.value.replace(/×/g, "*").replace(/÷/g, "/"));
};
