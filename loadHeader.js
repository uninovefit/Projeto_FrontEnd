function loadHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const tipoUsuario = localStorage.getItem('tipo_usuario');
  const caminhoAtual = window.location.pathname;

  // Detecta se está na página inicial
  const isIndex = (caminhoAtual === '/' || caminhoAtual.endsWith('/index.html'));

  let conteudo = `
    <div class="image">
      <img src="/assets/uninovefit.png" alt="Logo UninoveFit">
    </div>
    <div class="barra_superior">
  `;

  // Caso esteja na index (visitante)
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
      <a href="/index.html">Início</a>
      <a href="/personal/dashboard.html">Dashboard</a>
      <a href="/personal/perfil.html">Perfil</a>
      <a href="#" id="btn_sair">Sair</a>
    </div>
    `;
  } 
  else if (tipoUsuario === 'aluno') {
    conteudo += `
      <a href="/index.html">Início</a>
      <a href="/aluno/dashboard.html">Dashboard</a>
      <a href="/aluno/treinos.html">Treinos</a>
      <a href="/aluno/perfil.html">Perfil</a>
      <a href="#" id="btn_sair">Sair</a>
    </div>
    `;
  }

  header.innerHTML = conteudo;

  // Função de sair
  const btnSair = document.getElementById('btn_sair');
  if (btnSair) {
    btnSair.addEventListener('click', () => {
      localStorage.removeItem('tipo_usuario');
      window.location.href = '/index.html';
    });
  }
}

// Executa automaticamente ao carregar
document.addEventListener('DOMContentLoaded', loadHeader);