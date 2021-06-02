$(document).ready(function () {
	$(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll <= 10) {
            $(".header").removeClass("header--scroll");
        } else {
            $(".header").addClass("header--scroll");
        }
    });
    const menuBtn = document.querySelector(".menu-btn");
    let menuOpen = false;
    menuBtn.addEventListener("click", () => {
        if (!menuOpen) {
            menuBtn.classList.add("open");
            menuOpen = true;
        } else {
            menuBtn.classList.remove("open");
            menuOpen = false;
        }
    });
    $('#family').selectric();
    $('#size').selectric();
    $('#color').selectric();
    
    //modal
    document.getElementById('btn-modal').addEventListener('click', function() {
        document.getElementById('overlay').classList.add('is-visible');
        document.getElementById('modal').classList.add('is-visible');
      });
      
      document.getElementById('close-btn').addEventListener('click', function() {
        document.getElementById('overlay').classList.remove('is-visible');
        document.getElementById('modal').classList.remove('is-visible');
      });
      document.getElementById('overlay').addEventListener('click', function() {
        document.getElementById('overlay').classList.remove('is-visible');
        document.getElementById('modal').classList.remove('is-visible');
      });
});


