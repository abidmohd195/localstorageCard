const textarea = document.getElementById("textarea");

function saveInput() {
  localStorage.setItem("savedText", textarea.value);
}

if (localStorage.getItem("savedText")) {
  textarea.value = localStorage.getItem("savedText");
}

textarea.addEventListener("input", saveInput);
