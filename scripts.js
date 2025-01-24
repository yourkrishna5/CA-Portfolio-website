// Menu Toggle Functionality
const menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

const toggleMenu = () => {
  menuList.style.maxHeight = menuList.style.maxHeight === "0px" ? "300px" : "0px";
};

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = anchor.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Debounced Resize Event Listener for Future Enhancements (Optional)
const debounce = (func, delay = 200) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

window.addEventListener(
  "resize",
  debounce(() => {
    console.log("Window resized - implement your responsive logic here!");
  })
);
