const frases = [
  "Você já chegou até aqui, não pare agora!",
  "Cada pequeno passo importa.",
  "Desistir é a única forma de perder de verdade.",
  "Você é mais forte do que pensa.",
  "Se está difícil, é porque está funcionando.",
  "Lute pelo que você ainda não tem!"
];

const botao = document.getElementById("mostrarFrase");
const paragrafo = document.getElementById("fraseMotivadora");

botao.addEventListener("click", function () {
  const numeroAleatorio = Math.floor(Math.random() * frases.length);
  paragrafo.innerText = frases[numeroAleatorio];

  paragrafo.style.opacity = "1";
  setTimeout(() => {
    paragrafo.style.opacity = "0";
  }, 2000);
});

function toggleTheme() {
  const html = document.documentElement
  html.classList.toggle("light")

  const icon = document.querySelector("#switch button i")
  const isLight = html.classList.contains("light")

  icon.classList.remove(isLight ? "fa-moon" : "fa-sun")
  icon.classList.add(isLight ? "fa-sun" : "fa-moon")
}