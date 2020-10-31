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
    hrajeElm.innerHTML = `<h2>HRAJE: <img class="krizek" src="cross.svg" alt="krize" /></h2>`;
  } else {
    kdoHraje = 'kolecko';
    hrajeElm.innerHTML = `<h2>HRAJE: <img class="kolecko" src="circle.svg" alt="kolecko" /></h2>`;
  }
};

const ctverecekKlik = (e) => {
  e.target.classList.add(zjistiTridu());
  e.target.disabled = true;
  zmenHrace();
  console.log('Ziskat pozici', ziskatPozici(e.target));
  console.log('Ziskat symbol', ziskatSymbol(e.target));
  console.log('Vyhrava', vyhrava(e.target));
  console.log('Vitezstvi', vitezstvi(e.target));
};

const policka = document.querySelectorAll('.policko');
policka.forEach((item) => {
  item.addEventListener('click', ctverecekKlik);
});

//odsud dělám část 5

const velikostPole = 10;

const ziskatPozici = (pole) => {
  let poleIndex = 0;
  while (poleIndex < policka.length) {
    if (pole === policka[poleIndex]) {
      break;
    }
    poleIndex++;
  }

  return {
    radek: Math.floor(poleIndex / velikostPole),
    sloupec: poleIndex % velikostPole,
  };
};

const ziskatPole = (radek, sloupec) => policka[radek * velikostPole + sloupec];

const ziskatSymbol = (pole) => {
  // Název třídy přizpůsob tvému kódu.
  if (pole.classList.contains('hrajeKrizek')) {
    return 'krizek';
  } else if (pole.classList.contains('hrajeKolecko')) {
    return 'kolecko';
  }
};

const vyherniSymboly = 5;
const vyhrava = (pole) => {
  const origin = ziskatPozici(pole);
  const symbol = ziskatSymbol(pole);

  let i;

  let vRade = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.sloupec;
  while (i > 0 && symbol === ziskatSymbol(ziskatPole(origin.radek, i - 1))) {
    vRade++;
    i--;
  }

  // Koukni doprava
  i = origin.sloupec;
  while (
    i < velikostPole - 1 &&
    symbol === ziskatSymbol(ziskatPole(origin.radek, i + 1))
  ) {
    vRade++;
    i++;
  }

  if (vRade >= vyherniSymboly) {
    return true;
  }

  let vSloupci = 1;
  // Koukni nahoru
  i = origin.sloupec;
  while (i > 0 && symbol === ziskatSymbol(ziskatPole(i - 1, origin.sloupec))) {
    vSloupci++;
    i--;
  }

  // Koukni doprava
  i = origin.sloupec;
  while (
    i < velikostPole - 1 &&
    symbol === ziskatSymbol(ziskatPole(i + 1, origin.sloupec))
  ) {
    vSloupci++;
    i++;
  }

  if (vSloupci >= vyherniSymboly) {
    return true;
  }

  return false;
};

const vitezstvi = (pole) => {
  if (vyhrava(pole) === true) {
    if (ziskatSymbol(pole) === 'kolecko') {
      window.confirm('Kolečko vyhrává. Chcete si zahrát ještě jednou?');
      location.reload();
    } else if (ziskatSymbol(pole) === 'krizek') {
      window.confirm('Křížek vyhrává. Chcete si zahrát ještě jednou?');
      location.reload();
    }
  }
};
