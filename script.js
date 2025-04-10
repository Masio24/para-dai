
const pages = document.querySelectorAll('.page');
let currentPage = 1;

function goToPage(n) {
  document.getElementById('bg-music').play();
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById(`page${n}`).classList.add('active');
  currentPage = n;
  if (n === 4) document.getElementById('bg-music').pause();
  else document.getElementById('bg-music').play();
}

goToPage(currentPage);

const gachaOutput = document.getElementById('gacha-output');
const gachaSound = document.getElementById('gacha-sound');
const gachaTexts = [
  "Aishiteru Daikinen, te voy a amar siempre y te voy a dar muchos cariñitos y amor de muchas maneras (también le daré amor a tu ochinchin)",
  "Siempre estaré para ayudarte con cualquier cosa que necesites (y sé hacer muchas cosas así que prometo ser útil! uwu nya)",
  "Quiero algo bonito contigo, no me voy a ir a ningún lado sólo porque cometas errores. Al contrario, quiero ayudarte a aprender de tus errores y verte crecer como persona mientras yo hago lo mismo",
  "Si aceptas ser mi kareshi prometo ahorrar cada cierto tiempo para ir a visitarte y pasar tiempo contigo irl de manera regular (y quién sabe, en un futuro no muy lejano podríamos vivir juntos:3)",
  "Aún sigues leyendo esto? mucho texto, pero si llegaste hasta aquí te ganaste un premio por tomarme tanta importancia, eres el mejor!",
  "No lo sabes, pero soy una persona a la que le va muy bien en la vida en general, he logrado muchísimas cosas y siempre que me propongo algo lo cumplo, el hecho de que me quieras sin saber todo eso de mí también me hace feliz, estoy harto de la gente interesada"
];
let gachaIndex = 0;

function pullLever() {
  if (gachaIndex < gachaTexts.length) {
    gachaSound.play();
    const newBall = document.createElement('div');
    newBall.className = 'gacha-ball';
    newBall.innerText = gachaTexts[gachaIndex];
    gachaOutput.appendChild(newBall);
    gachaIndex++;
  }
}
