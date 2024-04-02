const elements = document.querySelectorAll("button,a");
const button = document.querySelector("button");

elements.forEach(function (element) {
  element.addEventListener("focus", (e) => {
    console.log(`Element ${e.currentTarget} is focused`);
  });
});

button.addEventListener("click", () => {
  console.log("Button clicked");
});