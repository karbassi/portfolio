/*menu show*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};

showMenu('nav-toggled', 'nav-menu-open');

/*animated headlines */

// OVERLAY

//Cursor

const mouseCursor = document.querySelector('.cursor');
const navLinks = document.querySelectorAll('.l-header a');
const socialIcons = document.querySelectorAll('.hero-social ion-icon');

//customized cursor
window.addEventListener(
  'mousemove',
  (cursor = (e) => {
    mouseCursor.style.top = `${e.pageY}px`;
    mouseCursor.style.left = `${e.pageX}px`;
  })
);

//header hover effect
navLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add('link-grow');
    link.classList.add('hovered-link');
  });
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('link-grow');
    link.classList.remove('hovered-link');
  });
});

//social icon hover effect
socialIcons.forEach((icon) => {
  icon.addEventListener('mouseover', () => {
    mouseCursor.classList.add('link-grow');
    icon.classList.add('hovered-icon');
  });
  icon.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('link-grow');
    icon.classList.remove('hovered-icon');
  });
});
