// let navbar = document.querySelector(".navbar");

// document.querySelector("#menu-btn").onclick = () => {
//   navbar.classList.toggle("active");
//   searchForm.classList.remove("active");
//   cartItem.classList.remove("active");
// };

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
});
