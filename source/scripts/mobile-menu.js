const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');

const toggleMenu = () => {
  navToggle.addEventListener('click', () => {
    navMain.classList.toggle('navigation--open');
    navToggle.classList.toggle('navigation__toggle--close');
  });
};

export {toggleMenu};
