function loadHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const tipoUsuario = localStorage.getItem('tipo_usuario');
  const caminhoAtual = window.location.pathname;

  const isIndex = (caminhoAtual === '/' || caminhoAtual.endsWith('/index.html'));

  let conteudo = `
    <div class="image">
    <a href="/">
      <img src="/assets/uninovefit.png" alt="Logo UninoveFit">
    </a>
    </div>
    <div class="barra_superior">
  `;

  if (isIndex || !tipoUsuario) {
    conteudo += `
      <a href="/index.html">Início</a>
      <a href="#servicos">Serviços</a>
    </div>
    <div class="botoes">
      <a href="/login.html" class="btn acesso" id="btn_acesso">Acessar</a>
    </div>
    `;
  }
  else if (tipoUsuario === 'personal') {
    conteudo += `
      <a href="/personal/inicio.html">Meus alunos</a>
      <a href="/personal/perfil.html">Perfil</a>
      <a href="#" class="btn_sair">Sair</a>
    </div>
    `;
  }
  else if (tipoUsuario === 'aluno') {
    conteudo += `
      <a href="/aluno/inicio.html">Início</a>
      <a href="/aluno/treinos.html">Treinos</a>
      <a href="/aluno/perfil.html">Perfil</a>
      <a href="#" class="btn_sair">Sair</a>
    </div>
    `;
  }

  header.innerHTML = conteudo;


  
}

document.addEventListener("DOMContentLoaded", () => {


  loadHeader()
  const header = document.getElementById("header");

  // Adiciona elementos do menu mobile
  const menuHamb = document.createElement("div");
  menuHamb.className = "menu-hamburguer";
  menuHamb.innerHTML = `
    <div></div>
    <div></div>
    <div></div>
  `;
  header.appendChild(menuHamb);

  const menuMobile = document.createElement("div");
  menuMobile.className = "menu-mobile";
  header.appendChild(menuMobile);

  function atualizarMenuMobile() {
    const links = header.querySelectorAll(".barra_superior a, .botoes a");
    menuMobile.innerHTML = "";
    links.forEach(link => {
      menuMobile.appendChild(link.cloneNode(true));
    });
  }

  atualizarMenuMobile();

  function toggleMenu() {
    const isOpen = menuMobile.classList.contains("open");

    menuMobile.classList.toggle("open", !isOpen);
    menuHamb.classList.toggle("active", !isOpen);
  }

  menuHamb.addEventListener("click", toggleMenu);

  const btnSair = document.querySelectorAll('.btn_sair');
  if (btnSair[0]) {
    btnSair.forEach(el => {
      el.addEventListener('click', () => {
        localStorage.removeItem('tipo_usuario');
        window.location.href = '/index.html';
      })
    })
  }
});