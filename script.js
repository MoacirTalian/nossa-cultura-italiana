// Menu responsivo e ano automático no rodapé.
const botaoMenu = document.querySelector(".menu-botao");
const menu = document.querySelector("#menu");

if (botaoMenu && menu) {
  botaoMenu.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    botaoMenu.setAttribute("aria-expanded", String(aberto));
    botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  });
}

const ano = document.querySelector("#ano");
if (ano) ano.textContent = new Date().getFullYear();
