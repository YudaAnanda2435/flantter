import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

// swiper slide start
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-container", {
    centeredSlides: true,
    spaceBetween: 24,
    loop: true,
    slideToClickedSlide: true,
    slideActiveClass: "active",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      700: {
        slidesPerView: 3,
      },
      200: {
        slidesPerView: 1,
      },
    },
  });
});
// swiper slide end

// show toggle start
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
const body = document.body;

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
  body.classList.toggle("no-scroll");
});
// show toggle end

// dropdown mobile
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const toggleBtn = document.querySelector(".dropdown > i");

  function toggleDropdown() {
    if (window.innerWidth <= 768) {
      dropdown.classList.toggle("active");

      toggleBtn.classList.toggle("rotated");
    }
  }

  function handleResize() {
    if (window.innerWidth > 768) {
      dropdown.classList.remove("active");
      toggleBtn.classList.remove("rotated");
    }
  }

  if (dropdown && toggleBtn) {
    dropdown.addEventListener("click", toggleDropdown);
    window.addEventListener("resize", handleResize);
    handleResize();
  }
});

// dropdown mobile

// nav opacity scroll start
window.addEventListener("scroll", function () {
  const nav = document.getElementById("nav");
  const blog = document.getElementById("blog");
  const pricing = document.getElementById("pricing");
  const contact = document.getElementById("contact");
  const features = document.getElementById("resource");
  const li = document.querySelector(".nav-links .li");
  const liA = document.querySelector(".li a");
  const loginToggle = document.querySelector(".login-togle a");
  const threshold = 100;
  let scrollTimeout;

  if (window.innerWidth > 768) {
    if (window.scrollY >= threshold) {
      nav.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
      nav.style.backdropFilter = "blur(5px)";
      li.style.color = "black";
      loginToggle.style.color = "black";
      features.style.color = "black";
      blog.style.color = "black";
      pricing.style.color = "black";
      contact.style.color = "black";
      nav.style.display = "flex";
      nav.style.justifyContent = "space-between";

       clearTimeout(scrollTimeout);

       scrollTimeout = setTimeout(() => {
         nav.style.background = "transparent";
         nav.style.backdropFilter = "blur(0)";
       }, 10000);
    } else {
      blog.style.color = "";
      loginToggle.style.color = "var(--primary-gray)";
      pricing.style.color = "";
      features.style.color = "";
      contact.style.color = "";
      li.style.color = "var(--primary-gray)";
      nav.style.backgroundColor = "transparent";
      nav.style.backdropFilter = "blur(0)";
      nav.style.paddingBlock = "12px";
    }
  } else {
    nav.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    nav.style.backdropFilter = "blur(5px)";
    li.style.color = "";
    loginToggle.style.color = "";
    features.style.color = "";
    blog.style.color = "";
    pricing.style.color = "";
    contact.style.color = "";
    liA.style.color = "";
  }
});
// nav opacity scroll end

// hidden toogle
// const menuToggled = document.querySelector(".menu-toggle");
// const navbar = document.querySelector("nav ul");

// menuToggled.addEventListener("click", function () {
//   if (navbar.style.display === "none" || navbar.style.display === "") {
//     navbar.style.display = "block";
//   } else {
//     navbar.style.display = "none";
//   }
// });
// nav opacity scroll

// asked start
document.querySelectorAll(".option-asked > div").forEach(function (asked) {
  asked.addEventListener("click", function () {
    const icon = asked.querySelector(".fa-solid");
    const paragraph = asked.querySelector("p");

    document.querySelectorAll(".option-asked p").forEach(function (p) {
      if (p !== paragraph) {
        p.classList.remove("show");
      }
    });

    document.querySelectorAll(".fa-solid").forEach(function (otherIcon) {
      if (otherIcon !== icon) {
        otherIcon.classList.remove("rotate");
      }
    });

    // Toggle kelas untuk menampilkan jawaban dan memutar ikon
    paragraph.classList.toggle("show");
    icon.classList.toggle("rotate");
  });
});
// asked end

// chose pricing start
document
  .getElementById("switch-toggle")
  .addEventListener("change", function () {
    var yearlyParagraph = document.getElementById("yearly");
    var monthlyParagraph = document.getElementById("monthly");
    var priceElement = document.getElementById("price");
    var priceElement1 = document.getElementById("price1");
    var priceElement2 = document.getElementById("price2");
    var priceDuration = document.getElementById("price-duration");

    if (this.checked) {
      yearlyParagraph.classList.add("active");
      monthlyParagraph.classList.remove("active");
      priceElement.innerHTML = "$100/ <span id='price-duration'>year</span>";
      priceElement1.innerHTML = "$250/ <span id='price-duration'>year</span>";
      priceElement2.innerHTML = "$300/ <span id='price-duration'>year</span>";
    } else {
      monthlyParagraph.classList.add("active");
      yearlyParagraph.classList.remove("active");
      priceElement.innerHTML = "$10/ <span id='price-duration'>month</span>";
      priceElement1.innerHTML = "$25/ <span id='price-duration'>month</span>";
      priceElement2.innerHTML = "$50/ <span id='price-duration'>month</span>";
    }
  });
// chose pricing end

// menu toggle start
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("bg-white");
  });
});
// menu toggle start

// p banner
function showParagraph(id, duration) {
  const paragraph = document.getElementById(id);
  paragraph.classList.add("show");
  setTimeout(() => {
    paragraph.classList.remove("show");
  }, duration);
}

function startCycle() {
  setTimeout(() => showParagraph("pb1", 20400), 0);
  setTimeout(() => showParagraph("pb2", 14900), 5500);
  setTimeout(() => showParagraph("pb3", 9200), 11400);
  setTimeout(() => showParagraph("pb4", 3900), 16800);
  setTimeout(startCycle, 22000);
}

// Mulai pertama kali
startCycle();
// p banner

// garis merosot start
function resetAnimation() {
  const elements = document.querySelectorAll(".paragraf-banner > div");
  elements.forEach((el) => {
    el.classList.remove("reset");
  });
  void document.body.offsetWidth;

  setTimeout(() => {
    elements.forEach((el) => {
      el.classList.add("reset");
    });
  }, 100);
}
resetAnimation();
setInterval(resetAnimation, 22000);
// garis merosot end

// banner slider start
const imageWrapper = document.querySelector(".img-wrapper");
const imageItems = document.querySelectorAll(".img-wrapper > *");
const imageLength = imageItems.length;
const perView = 1;
let totalScroll = 0;
const delay = 5500;

imageWrapper.style.setProperty("--per-view", perView);
for (let i = 0; i < perView; i++) {
  imageWrapper.insertAdjacentHTML("beforeend", imageItems[i].outerHTML);
}

let autoScroll = setInterval(scrolling, delay);

function scrolling() {
  totalScroll++;
  if (totalScroll == imageLength + 1) {
    clearInterval(autoScroll);
    totalScroll = 1;
    imageWrapper.style.transition = "0s";
    imageWrapper.style.left = "0";
    autoScroll = setInterval(scrolling, delay);
  }
  const widthEl =
    document.querySelector(".img-wrapper > :first-child").offsetWidth + 24;
  imageWrapper.style.left = `-${totalScroll * widthEl}px`;
  imageWrapper.style.transition = ".5s";
}
// banner slider end

function showParagraphs() {
  const paragraphs = document.querySelectorAll(".line p");
  paragraphs.forEach((p, index) => {
    setTimeout(() => {
      p.classList.add("show");
    }, index * 500);
  });
}

document.querySelector(".line").classList.add("show");
setTimeout(showParagraphs, 100);
