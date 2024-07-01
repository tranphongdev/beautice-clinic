const handleMobileBars = () => {
  const menu = document.querySelector(".menu-mobile");
  menu.classList.toggle("show");
};

// Lắng nghe sự kiện khi scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var btnScrollToTop = document.getElementById("btnScrollToTop");

  // Hiển thị nút khi scroll xuống 20px từ đầu trang
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnScrollToTop.style.display = "flex";
  } else {
    btnScrollToTop.style.display = "none";
  }
}

// Xử lý sự kiện click vào nút scroll lên đầu trang
function scrollToTop() {
  // document.body.scrollTop = 0;  Safari
  document.documentElement.scrollTop = 0;
}
