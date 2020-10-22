'use strict';

console.log('funguje to!');

let kdoHraje = '';

const zjistiTridu = () => {
  if (kdoHraje === 'kolecko') {
    return 'hrajeKolecko';
  } else {
    return 'hrajeKrizek';
  }
};

const zmenHrace = () => {
  if (kdoHraje === 'kolecko') {
    kdoHraje = 'krizek';
    const hrajeElm = document.querySelector('.hraje');
    hrajeElm.innerHTML = `<h2>HRAJE:</h2><img class="kolecko" src="circle.svg" alt="kolečko" />`;
  } else {
    kdoHraje = 'kolecko';
    const hrajeElm = document.querySelector('.hraje');
    hrajeElm.innerHTML = `<h2>HRAJE:</h2><img class="krizek" src="cross.svg" alt="krizek" />`;
  }
};

const ctverecekKlik = (e) => {
  e.target.classList.add(zjistiTridu());
  e.target.disabled = true;
  zmenHrace();
};

document.querySelectorAll('.ctverecky button').forEach((item) => {
  item.addEventListener('click', ctverecekKlik);
});
