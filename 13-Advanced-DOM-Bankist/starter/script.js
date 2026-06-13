'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// 196. PROJECT: "Bankist" Website

// 198. Selecting, Creating, and Deleting Elements

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('#section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); // When DOM changes, this is automatically updated

document.getElementsByClassName('btn');

// Creating and inserting elements

// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.'
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // prepend message from being first
header.append(message); // to append to last.

// header.append(message.cloneNode(true));

header.before(message);
// header.after(message);

// Delete elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// 199. Styles, Attributes and Classes
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); // style only works for inline styles like background properties
console.log(message.style.backgroundColor);

// use getComputedStyle

console.log(getComputedStyle(message).color); // "Computed" style from the browser
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// CSS Custom properties

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer); // doesn't work
console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'Bankist');
console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href')); // use this for the absolute url

// Data attributes
// the element has to start with data-, e.g. data-version-number
console.log(logo.dataset.versionNumber); // the name MUST be in camelCase

// classes

logo.classList.add(); // add a class
logo.classList.remove(); // remove a class
logo.classList.toggle('c'); // toggle a class
logo.classList.contains('c'); // similar to 'includes' in arrays

// don't use this:

logo.className = 'jonas';

// 200. Implementing Smooth Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect(); // Relative to the visible viewport
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());

//   console.log('Current Scroll (X/Y)', window.pageXOffset, window.pageYOffset);

//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth,
//   );

//   // window.scrollTo(
//   //   s1coords.left + window.pageXOffset, // current position + current scroll
//   //   s1coords.top + window.pageYOffset,
//   // ); // relative to VIEWPORT, not document. Adding the offset (top of the page) fixes this.

//   // Smoothing (Old way)
//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset, // current position + current scroll
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   // Smoothing (new way, modern browsers)
//   section1.scrollIntoView({
//     behavior: 'smooth',
//   });
// });

// 201. Types of Events and Event Handlers

const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great, you are reading the heading!');
// });

const alertH1 = function (e) {
  alert('addEventListener: Great, you are reading the heading!');
};

h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great, you are reading the heading!');
// };

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// 204. Event Delegation: Implementing Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});
