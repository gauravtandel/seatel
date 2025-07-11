function trackOrder() {
  const orderId = document.getElementById("order-id").value;
  const statusEl = document.getElementById("order-status");

  if (orderId === "12345") {
    statusEl.innerText = "Your order is shipped!";
  } else {
    statusEl.innerText = "Order not found.";
  }
}

document.getElementById("login-btn").addEventListener("click", () => {
  alert("Login system goes here (Google/Facebook/email)");
});