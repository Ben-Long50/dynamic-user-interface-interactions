import './styles/main.css';
import './styles/reset-css.css';

const navBarItems = [];

class NavBarItem {
  constructor(name, menuOptions) {
    this.name = name;
    this.menuOptions = menuOptions;
    navBarItems.push(this);
  }
}

// eslint-disable-next-line no-new
new NavBarItem('AR-15', [
  'Upper Receiver',
  'Lower Receiver',
  'Barrel',
  'Bolt Carrier Group (BCG)',
  'Charging Handle',
  'Handguard',
  'Stock',
  'Pistol Grip',
  'Trigger Group',
  'Magazine',
]);

console.log(navBarItems);
