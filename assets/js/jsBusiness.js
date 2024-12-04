window.addEventListener("scroll", function () {
  const header = document.querySelector(".top-header");
  const backText = document.querySelector(".back-text");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
    backText.classList.add("hidden"); // Ẩn văn bản khi cuộn xuống
  } else {
    header.classList.remove("scrolled");
    backText.classList.remove("hidden"); // Hiện văn bản khi ở trên cùng
  }
});
document.getElementById("toggleLink").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default action of the link
  const moreText = document.getElementById("moreText");
  const link = document.getElementById("toggleLink");
  
  if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      link.textContent = "Ẩn bớt"; // Change link text to "Hide" when showing more text
  } else {
      moreText.style.display = "none";
      link.textContent = "Xem thêm"; // Change link text back to "Read more" when hiding
  }
});
