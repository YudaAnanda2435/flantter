import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

// swiper slide start
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-container", {
    centeredSlides: true,
    spaceBetween: 24,
    loop: true,
    slideToClickedSlide: false,
    slideActiveClass: "active",
    autoplay: {
      delay: 5000, // Delay in milliseconds (1000 ms = 1 second)
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

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
// show toggle end

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

  if (window.innerWidth > 768) {
    // Hanya berlaku untuk layar di atas 768px
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
    // Reset aturan untuk layar di bawah 768px
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
const menuToggled = document.querySelector(".menu-toggle");
const navbar = document.querySelector("nav ul");

menuToggled.addEventListener("click", function () {
  if (navbar.style.display === "none" || navbar.style.display === "") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
});
// nav opacity scroll

// asked start
document.querySelectorAll(".option-asked > div").forEach(function (asked) {
  const icon = asked.querySelector(".fa-solid");
  const paragraph = asked.querySelector("p");

  icon.addEventListener("click", function () {
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
const headings = document.querySelectorAll(".paragraf-banner > div h4");
let currentIndex = 1;

function toggleParagraph(index) {
  const parentDiv = headings[index].parentElement;
  const paragraph = parentDiv.querySelector("p");

  document.querySelectorAll(".paragraf-banner > div p").forEach(function (p) {
    p.classList.remove("show");
    p.parentElement.classList.remove("active");
  });
  paragraph.classList.add("show");
  parentDiv.classList.add("active");
}

function autoPlay() {
  toggleParagraph(currentIndex);

  currentIndex = (currentIndex + 1) % headings.length;
}
setInterval(autoPlay, 5000);
// p banner

// banner slider start
const imageWrapper = document.querySelector(".img-wrapper");
const imageItems = document.querySelectorAll(".img-wrapper > *");
const imageLength = imageItems.length;
const perView = 1;
let totalScroll = 0;
const delay = 5000;

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
