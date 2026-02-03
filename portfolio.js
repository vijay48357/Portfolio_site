document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const notification = document.getElementById("notification");

  notification.className = "alert d-none";
  
  if (name.length < 2) {
    showAlert("Please enter a valid name.", "danger");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showAlert("Please enter a valid email address.", "danger");
    return;
  }
  showAlert("Message validated! Opening email app…", "success");

  const mailtoLink = `mailto:yourname@example.com?subject=Contact from ${encodeURIComponent(
    name
  )}&body=${encodeURIComponent(message)}%0A%0AFrom: ${email}`;

  setTimeout(() => {
    window.location.href = mailtoLink;
  }, 1500);
});

function showAlert(message, type) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.classList.remove("d-none");
  notification.classList.add(`alert-${type}`);
}
