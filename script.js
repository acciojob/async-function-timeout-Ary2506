//your JS code here. If required.
const btn = document.getElementById("btn");

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

btn.addEventListener("click", async function () {
  const text = document.getElementById("text").value;
  const delay = parseInt(document.getElementById("delay").value);
  const output = document.getElementById("output");

  output.textContent = "";

  await wait(delay);

  output.textContent = text;
});