function validerCode() {
  const code = document.getElementById("codeInput").value;
  const message = document.getElementById("message");

  // Tu peux changer les codes ici :
  if (code === "1234") {
    window.location.href = "https://www.google.com"; // catégorie A
  } else if (code === "5678") {
    window.location.href = "https://www.bing.com"; // catégorie B
  } else {
    message.textContent = "Code invalide. Veuillez réessayer.";
  }
}
