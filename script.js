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

const zmenHrace = () => {
  const hrajeElm = document.querySelector('.hraje');
  if (kdoHraje === 'kolecko') {
    kdoHraje = 'krizek';
    hrajeElm.innerHTML = `<h2>HRAJE:</h2><img class="krizek" src="cross.svg" alt="krize" />`;
  } else {
    kdoHraje = 'kolecko';
    hrajeElm.innerHTML = `<h2>HRAJE:</h2><img class="kolecko" src="circle.svg" alt="kolecko" />`;
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
