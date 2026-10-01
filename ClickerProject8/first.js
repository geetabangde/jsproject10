const body = document.body;
const colors = ["red", "blue", "yellow", "pink"];

body.addEventListener("click", (e) => {
  if (e.target !== body) return;

  const circleElement = document.createElement("div");
    circleElement.classList.add("circle");
    circleElement.textContent = ('hi');

  circleElement.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];

  circleElement.style.left = `${e.clientX - 25}px`;
  circleElement.style.top = `${e.clientY - 25}px`;

  body.appendChild(circleElement);

  setTimeout(() => {
    circleElement.remove();
  }, 500);
});
