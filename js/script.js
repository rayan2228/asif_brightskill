// preloader

setTimeout(function () {
  $("#pre").fadeToggle();
}, 2500);
// back to top
(function () {
  $(document).ready(function () {
    return (
      $(window).scroll(function () {
        return $(window).scrollTop() > 200
          ? $("#back-to-top").addClass("show")
          : $("#back-to-top").removeClass("show");
      }),
      $("#back-to-top").click(function () {
        return $("html,body").animate({
          scrollTop: "0",
        });
      })
    );
  });
}.call(this));
// body bg
// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 80;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}
// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12,
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` },
    ],
    {
      duration: (Math.random() + 1) * 3000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out",
    }
  );
});

// active menu
$(document).ready(function () {
  $(".nav_link").click(function () {
    $(".nav_link").removeClass("active_nav");
    $(this).addClass("active_nav");
  });
});
// scrool nav
window.addEventListener("scroll", function () {
  let navBar = this.document.querySelector("nav");
  if (this.window.pageYOffset >= 600) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
});

// typed js
var typed3 = new Typed(".type", {
  strings: [
    "Let's make ourselves <br> <i>efficient</i>",
    "Let's make ourselves <br> <strong>skilled</strong>",
    "Let's make ourselves <br> expert",
  ],
  typeSpeed: 60,
  backSpeed: 60,
  smartBackspace: true, // this is a default
  loop: true,
});

var navMenu = document.getElementById("menu");
function showMenu() {
  m1.style.marginLeft = "0";
  m2.style.marginLeft = "7px";
  m3.style.marginLeft = "0";
  m4.style.marginLeft = "9px";
  m5.style.marginLeft = "0";
  m6.style.marginLeft = "7px";
  bar.style.top = "-100px";
  hide.style.right = "20px";
}
function hideMenu() {
  m1.style.marginLeft = "300px";
  m2.style.marginLeft = "300px";
  m3.style.marginLeft = "300px";
  m4.style.marginLeft = "300px";
  m5.style.marginLeft = "300px";
  m6.style.marginLeft = "300px";
  bar.style.top = "10px";
  hide.style.right = "-200px";
}

//nav button effect

var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("nav_btn");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}
// slider
// venobox

new VenoBox({
  selector: ".my-video-links",
});

// counter
$(".count_up").counterUp({
  delay: 5,
  time: 800,
});

// counter
// aos
AOS.init();

// testimoni slider

jQuery(document).ready(function ($) {
  var feedbackSlider = $(".feedback-slider");
  feedbackSlider.owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    autoplay: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    navText: [
      "<i class='fa fa-long-arrow-left'></i>",
      "<i class='fa fa-long-arrow-right'></i>",
    ],
    responsive: {
      // breakpoint from 767 up
      767: {
        nav: true,
        dots: false,
      },
    },
  });

  feedbackSlider.on("translate.owl.carousel", function () {
    $(".feedback-slider-item h3")
      .removeClass("animated fadeIn")
      .css("opacity", "0");
    $(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
      .removeClass("animated zoomIn")
      .css("opacity", "0");
  });

  feedbackSlider.on("translated.owl.carousel", function () {
    $(".feedback-slider-item h3")
      .addClass("animated fadeIn")
      .css("opacity", "1");
    $(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
      .addClass("animated zoomIn")
      .css("opacity", "1");
  });
  feedbackSlider.on("changed.owl.carousel", function (property) {
    var current = property.item.index;
    var prevThumb = $(property.target)
      .find(".owl-item")
      .eq(current)
      .prev()
      .find("img")
      .attr("src");
    var nextThumb = $(property.target)
      .find(".owl-item")
      .eq(current)
      .next()
      .find("img")
      .attr("src");
    var prevRating = $(property.target)
      .find(".owl-item")
      .eq(current)
      .prev()
      .find("span")
      .attr("data-rating");
    var nextRating = $(property.target)
      .find(".owl-item")
      .eq(current)
      .next()
      .find("span")
      .attr("data-rating");
    $(".thumb-prev").find("img").attr("src", prevThumb);
    $(".thumb-next").find("img").attr("src", nextThumb);
    $(".thumb-prev")
      .find("span")
      .next()
      .html(prevRating + '<i class="fa fa-star"></i>');
    $(".thumb-next")
      .find("span")
      .next()
      .html(nextRating + '<i class="fa fa-star"></i>');
  });
  $(".thumb-next").on("click", function () {
    feedbackSlider.trigger("next.owl.carousel", [300]);
    return false;
  });
  $(".thumb-prev").on("click", function () {
    feedbackSlider.trigger("prev.owl.carousel", [300]);
    return false;
  });
}); //end ready

// swiper contact
var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
});
