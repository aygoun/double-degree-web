document.addEventListener("DOMContentLoaded", () => {
  const qrContainer = document.getElementById("qrcode");
  const currentURL = window.location.href;

  if (typeof QRCode !== "undefined") {
    new QRCode(qrContainer, {
      text: currentURL,
      width: 128,
      height: 128,
      colorDark: "#000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M,
    });
  }
});
