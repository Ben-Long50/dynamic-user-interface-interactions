import weaponList from '.';

const navBarContainer = document.querySelector('#navbar-container');

// eslint-disable-next-line import/prefer-default-export
export function generateNavItems() {
  weaponList.forEach((item) => {
    const navItem = document.createElement('ul');
    navItem.classList.add('nav-item');
    navItem.textContent = item.name;
    navBarContainer.appendChild(navItem);
    for (let i = 0; i < item.options.length; i++) {
      const menuItem = document.createElement('li');
      menuItem.textContent = item.options[i];
      menuItem.classList.add('menu-item');
      menuItem.classList.add('hidden');
      navItem.appendChild(menuItem);
    }
  });
}

export function getNavItems() {
  const navItems = document.querySelectorAll('.nav-item');
  const navItemArray = Array.from(navItems);
  navItemArray.forEach((item) => {
    const menuItems = item.querySelectorAll('.menu-item');
    const menuItemArray = Array.from(menuItems);
    item.addEventListener('mouseover', () => {
      menuItemArray.forEach((element) => {
        element.classList.remove('hidden');
        element.classList.add('visible');
      });
    });
    item.addEventListener('mouseleave', () => {
      menuItemArray.forEach((element) => {
        element.classList.remove('visible');
        element.classList.add('hidden');
      });
    });
  });
}
