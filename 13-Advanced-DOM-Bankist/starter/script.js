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

// const h1 = document.querySelector('h1');

// // h1.addEventListener('mouseenter', function (e) {
// //   alert('addEventListener: Great, you are reading the heading!');
// // });

// const alertH1 = function (e) {
//   alert('addEventListener: Great, you are reading the heading!');
// };

// h1.addEventListener('mouseenter', alertH1);

// // h1.onmouseenter = function (e) {
// //   alert('addEventListener: Great, you are reading the heading!');
// // };

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

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

// 205. DOM Traversing

const h1 = document.querySelector('h1');

// Going downwards: child

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orange';

console.log(h1.parentNode);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

// 206. Building a Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Bad Practice (Will create the same amount of callbacks as the amount of tabs)
// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));

// Using Event Delegation
tabsContainer.addEventListener('click', function (e) {
  // const clicked = e.target // will target the element specifically
  // use closest() to search for the closest parent
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  // clicked.classList.add('operations__tab--active'); // will cause an error because null is the parent
  // add guard clause
  if (!clicked) return;
  // THEN add the classlist.add:

  // Remove Active Classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // activate tab
  clicked.classList.add('operations__tab--active');
  // const tab_content = document.querySelector('.operations__content--2');
  // console.log(tab_content);
  console.log(clicked.dataset.tab);
  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
