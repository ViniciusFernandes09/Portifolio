// Seleciona os links do menu e as seções
const menuLinks = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('section');
const backToTopBtn = document.getElementById('backToTop');

// Função para ativar o link correto
function highlightMenu() {
  let index = sections.length;

  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

  menuLinks.forEach((link) => link.classList.remove('active'));
  menuLinks[index].classList.add('active');
}

// Mostrar ou esconder o botão voltar ao topo
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

// Ação do botão: rolar suavemente para o topo
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Eventos
highlightMenu();
window.addEventListener('scroll', () => {
  highlightMenu();
  toggleBackToTop();
});