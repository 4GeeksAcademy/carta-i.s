window.onload = function () {
  const palos = ['spade', 'club', 'heart', 'diamond'];
  const simbolos = ['♠', '♣', '♥', '♦'];
  const numeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const paloIndex = Math.floor(Math.random() * palos.length);
  const numeroIndex = Math.floor(Math.random() * numeros.length);

  const palo = palos[paloIndex];
  const simbolo = simbolos[paloIndex];
  const numero = numeros[numeroIndex];

  const carta = document.getElementById('card');
  carta.classList.add(palo);
  carta.querySelector('.top-suit').textContent = simbolo;
  carta.querySelector('.number').textContent = numero;
  carta.querySelector('.bottom-suit').textContent = simbolo;
};
