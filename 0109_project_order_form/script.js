const orderForm = document.querySelector("#orderForm");
const root = document.querySelector(".root");

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const oldButtons = document.querySelector(".tech-buttons");
  if (oldButtons) {
    oldButtons.remove();
  }

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("tech-buttons");

  const techBtn1 = document.createElement("button");
  const techBtn2 = document.createElement("button");
  const techBtn3 = document.createElement("button");
  techBtn1.textContent = "Payment has been received";
  techBtn2.textContent = "Order has been sent";
  techBtn3.textContent = "Order has been delivered";
  btnContainer.append(techBtn1, techBtn2, techBtn3);
  root.append(btnContainer);

  setTimeout(() => {
    const notification = document.createElement("div");
    notification.classList.add("message");

    const icon = document.createElement("span");
    icon.classList.add("icon");
    icon.textContent = "✔";

    const text = document.createElement("div");
    text.classList.add("text");
    text.innerHTML =
      "<strong>Order has been created</strong><br>We are waiting for you again!";

    const closeBtn = document.createElement("img");
    closeBtn.src = "assets/christ.png";
    closeBtn.classList.add("close");
    closeBtn.addEventListener("click", () => notification.remove());

    notification.append(icon, text, closeBtn);
    root.append(notification);
  }, 2000);
});

const oldBtns = document.querySelector(".tech-buttons");
if (oldBtns) oldBtns.remove();
