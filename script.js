'use strict';

console.log('funguje to!');

let kdoHraje = 'kolecko';

const zjistiTridu = () => {
  if (kdoHraje === 'kolecko') {
    return 'hrajeKolecko';
  } else {
    return 'hrajeKrizek';
  }
};

const ctverecekKlik = (e) => {
  e.target.classList.add(zjistiTridu());
};

document.querySelectorAll('.ctverecky button').forEach((item) => {
  item.addEventListener('click', ctverecekKlik);
});

const zmenHrace = () => {
  if (kdoHraje === 'kolecko') {
    kdoHraje = 'krizek';
  } else {
    kdoHraje = 'kolecko';
  }
};


