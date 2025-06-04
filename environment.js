// License tokens are stored in chrome.storage.local.
// Inspect them via Chrome extension tools:
//   chrome://extensions -> enable Developer mode -> "service worker" -> Application > Storage > Extension Storage.const whatsappNumber = "573961758817";  // Reemplazar con tu número de WhatsApp
localStorage.setItem("URL", `https://api-licenciasz-1.onrender.com`);  // URL de tu API de validación
localStorage.setItem(
  "URL_REDIRECT",
  `https://wa.me/${whatsappNumber}?text=Hola, desinstalé la extensión por error`  // Enlace de redirección con el número de WhatsApp
);
