console.log("Hello World!");

const myName = "Mahabir Gupta";
console.log(myName);

const h1 = document.querySelector(".heading-primary");
console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;

//   // to manipulate the CSS
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

///////////////////////////////////////////////////////////
// Set current year
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// Make mobile navigation work

const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open"); //write name of class .nav-open without the dot
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");
// use .querySelectorAll if want to select more than 1 element
// use a:link selector to select all the href links

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // (e) stands for event
    e.preventDefault(); //prevent default from happening

    // to get the details of each link
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // Scroll to other links
    else if (href !== "#" && href.startsWith("#")) {
      const sectioneElement = document.querySelector(href);
      sectioneElement.scrollIntoView({ behavior: "smooth" });
    }

    // Close Mobile Navigation
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open"); //write name of class .nav-open without the dot
    }
  });
});

///////////////////////////////////////////////////////////
// Sticky Navigation
// Using intersection observer

const sectionHero = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    // 1 entries for each threshold value
    const ent = entries[0]; //(entries) are arrays
    console.log(ent);

    if (ent.isIntersecting === false) {
      // make the header sticky
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      // remove the header sticky
      document.body.classList.remove("sticky");
    }
  },
  {
    // null means In the viewport
    root: null, //viewing the hero-sectio inside of the view-port
    threshold: 0, //this will fire an event as soon as 0% of the hero-section is in the viewport
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero); //section-hero is the element that we want to observe

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
// function checkFlexGap() {
//   var flex = document.createElement("div");
//   flex.style.display = "flex";
//   flex.style.flexDirection = "column";
//   flex.style.rowGap = "1px";

//   flex.appendChild(document.createElement("div"));
//   flex.appendChild(document.createElement("div"));

//   // document.body.appendChild(flex);
//   var isSupported = flex.scrollHeight === 1;
//   // flex.parentNode.removeChild(flex);
//   console.log(isSupported);

//   // if (!isSupported) document.body.classList.add("no-flexbox-gap");
// }
// checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
