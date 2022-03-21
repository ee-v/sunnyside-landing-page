import 'normalize.css';
import './resources/css/style.css';

const toogleClass = (className, elem) => {
  if (elem.classList.contains(className)) {
    removeClass(className, elem);
  } else {
    addClass(className, elem);
  }
}

const addClass = (className, elem) => {
  elem.classList.add(className);
};
const removeClass = (className, elem) => {
  elem.classList.remove(className);
};

const cleanClass = (className, list) => {
  for (let elem of list) {
    removeClass(className, elem.firstChild);
  }
}

const checkSection = (hash) => {
  if (hash) {
    for (let elem of menu.children) {
      if (elem.firstChild.hash === hash) {
        cleanClass('active', menu.children);
        addClass('active', elem.firstChild)
      }
    }
  }
}

const menuCollapseBtn = document.getElementById('nav-collapse');
const menu = document.getElementById('nav-menu');
const socialLinks = document.getElementById('social-links');

menuCollapseBtn.addEventListener('click', (e) => {
  const _this = e.target;
  toogleClass('active', _this);
  toogleClass('hide', menu);
});

for (let elem of menu.children) {
  elem.addEventListener('click', (e) => {
    const _this = e.target;
    cleanClass('active', menu.children);
    addClass('active', _this);
    addClass('hide', menu);
    removeClass('active', menuCollapseBtn);
  });
}

socialLinks.addEventListener('click', (e) => {
  checkSection(e.target.hash);
});

const hash = window.location.hash;
checkSection(hash);