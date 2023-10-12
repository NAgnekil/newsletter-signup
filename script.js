const button = document.getElementById("submit-btn");
const heading = document.getElementById("subscribe-header");
const text = document.getElementById("subscribe-desc");
const input = document.getElementById("input-wrapper");

function changeContent() {
  heading.innerHTML = "<h4>Bra val! Nu kan vi hålla dig uppdaterad!</h4>";
  heading.style.margin = "80px 0";
  input.style.display = "none";
  text.style.display = "none";
}

button.addEventListener("click", changeContent);
