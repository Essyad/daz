'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

function openPopup(tourId) {
    document.getElementById(tourId).style.display = "block";
  }
  
  function closePopup(tourId) {
    document.getElementById(tourId).style.display = "none";
  }

  const headers = document.querySelectorAll('.group-subhead');

  // Add click event listeners
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isVisible = content.style.display === 'block';

      // Hide all other content
      document.querySelectorAll('.group-text, .group-highlight').forEach(section => {
        section.style.display = 'none';
      });

      // Reset all headers
      headers.forEach(h => h.classList.remove('active'));

      // Toggle the clicked section
      if (!isVisible) {
        content.style.display = 'block';
        header.classList.add('active');
      }
    });
  });