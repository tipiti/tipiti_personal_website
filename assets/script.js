$(document).ready(function() {
  $(window).scroll(function() {
    if(this.scrollY > 20)
      $(".navbar").addClass("sticky");
    else
      $(".navbar").removeClass("sticky");
  });

  $(".menu-toggler").click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readmore-btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "đọc thêm";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "thu gọn";
    moreText.style.display = "inline";
  }
}