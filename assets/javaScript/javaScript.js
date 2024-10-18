function choosenFileOnClick() {
  const realFileBtn = document.getElementById("intput_file_chatbot");
  const customeBtn = document.getElementById("custom-button");
  const customeTxt = document.getElementById("custom-text");

  customeBtn.addEventListener("click", function () {
    realFileBtn.click();
  });
  realFileBtn.addEventListener("change", function () {
    if (realFileBtn.value) {
      customeTxt.innerHTML = realFileBtn.value.match(
        /[\/\\]([\w\d\s\.\-\(\)]+)$/
      )[1];
    } else {
      customeTxt.innerHTML = "No file chosen, yet.";
    }
  });
}
