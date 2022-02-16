const form = document.querySelector("form");
const submitHandler = (event) => {
  event.preventDefault();
  const color = document.getElementById("dropdown");
  if (color.value === "blue") {
    form.style.backgroundColor = "blue";
  } 
  if (color.value === "pink") {
    form.style.backgroundColor = "pink";
  }
  if (color.value === "yellow") {
    form.style.backgroundColor = "yellow";
  }
  if (color.value === "green") {
    form.style.backgroundColor = "green";
  }
  if (color.value === "red") {
    form.style.backgroundColor = "red";
  } 
};
form.addEventListener("submit", submitHandler);