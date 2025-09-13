const card = document.getElementById('card');
const cadastroButton = document.getElementById('CadastroButton');
const loginButton = document.getElementById('LoginButton');
const tipoUsuario = document.getElementById('tipo-usuario');
const camposCadastro = document.getElementById('campos-cadastro');

cadastroButton.addEventListener('click', () => {
  card.classList.add('right-panel-active');
});

loginButton.addEventListener('click', () => {
  card.classList.remove('right-panel-active');
});

tipoUsuario.addEventListener('change', () => {
  const alunoCampos = document.querySelectorAll('.aluno-only');
  const personalCampos = document.querySelectorAll('.personal-only');

  camposCadastro.style.display = 'block';

  if (tipoUsuario.value === 'aluno') {
    alunoCampos.forEach(campo => campo.style.display = 'block');
    personalCampos.forEach(campo => campo.style.display = 'none');
  } else if (tipoUsuario.value === 'personal') {
    alunoCampos.forEach(campo => campo.style.display = 'none');
    personalCampos.forEach(campo => campo.style.display = 'block');
  } else {
    camposCadastro.style.display = 'none';
  }
});
