'use strict';

console.log('funguje to!');

let praveHraje = 'kolecko';

const ctvereckyElm = document.querySelector('.ctverecky');

ctvereckyElm.addEventListener('click', () => {
  if (praveHraje === 'kolecko') {
    ctvereckyElm.classList.add('board__field--circle');
    ctvereckyElm.style.backgroundColor = '';
  } else if (praveHraje === 'krizek') {
    ctvereckyElm.classList.add('board__field--cross');
  }
});

/*
obrázek kolečka a křížku - z předchozího úkolu
css button nastylovat - aby měl background image kolečko / křížek
*/
