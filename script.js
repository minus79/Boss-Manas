
function generateCode() {
  const number = document.getElementById("numberInput").value;
  if (!number) return alert("Please enter your WhatsApp number!");
  const code = "pair-code-" + Math.floor(Math.random() * 1000000);
  document.getElementById("codeOutput").innerText = code;
}

function copyCode() {
  const code = document.getElementById("codeOutput").innerText;
  navigator.clipboard.writeText(code);
  alert("Code copied: " + code);
}
