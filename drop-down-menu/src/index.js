/* eslint-disable no-new */
import './styles/main.css';
import './styles/reset-css.css';
import { generateNavItems, getNavItems } from './renderDom';

const weaponList = [];

export default weaponList;

class Weapon {
  constructor(name, options) {
    this.name = name;
    this.options = options;
    weaponList.push(this);
  }
}

new Weapon('Assault Rifles', [
  'AK-47',
  'M16/M4',
  'FN SCAR',
  'Steyr AUG',
  'Heckler & Koch G36',
  'SIG SG 550',
  'FAMAS',
  'QBZ-95',
  'Galil ACE',
  'CZ Bren 2',
]);

new Weapon('Sniper Rifles', [
  'Accuracy International Arctic Warfare',
  'Barrett M82/M107',
  'Sako TRG',
  'Remington 700',
  'Dragunov SVD',
  'CheyTac Intervention',
  'Steyr SSG',
  'Heckler & Koch PSG1',
  'Springfield M1903',
  'Mauser SP66',
]);

new Weapon('Submachine Guns', [
  'Heckler & Koch MP5',
  'Uzi',
  'MAC-10',
  'FN P90',
  'Heckler & Koch UMP',
  'Steyr TMP',
  'PP-19 Bizon',
  'MP7',
  'MP9',
  'Scorpion EVO 3',
]);

new Weapon('Pistols', [
  'Glock 17',
  'SIG Sauer P226',
  'Beretta 92/M9',
  'Smith & Wesson M&P',
  'Heckler & Koch USP',
  'CZ 75',
  'FN Five-seveN',
  'Walther PPK',
  'Colt M1911',
  'Browning Hi-Power',
]);

generateNavItems();
getNavItems();
