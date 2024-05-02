for (var i of document.querySelectorAll(".ios-btn")) {
  i.addEventListener("click", function () {
    var btn = this;
    btn.classList.add("ios-clicked");
    setTimeout(function () {
      btn.classList.remove("ios-clicked");
    }, 100);
  });
}

for (var i of document.querySelectorAll(".mac-btn")) {
  i.addEventListener("click", function () {
    var btn = this;
    btn.classList.add("mac-clicked");
    setTimeout(function () {
      btn.classList.remove("mac-clicked");
    }, 100);
  });
}
