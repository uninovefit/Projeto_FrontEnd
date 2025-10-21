const card = document.getElementById("card");
const cadastroButton = document.getElementById("CadastroButton");
const loginButton = document.getElementById("LoginButton");
const tipo_usuario_cadastro = document.getElementById("tipo-usuario-cadastro");
const tipo_usuario_login = document.getElementById("tipo-usuario-login");
const camposCadastro = document.getElementById("campos-cadastro");

cadastroButton.addEventListener("click", () => {
  card.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  card.classList.remove("right-panel-active");
});

// Alterar campos cadastro
tipo_usuario_cadastro.addEventListener("change", () => {
  const alunoCampos = document.querySelectorAll(".alunos-only");
  const personalCampos = document.querySelectorAll(".personais-only");

  camposCadastro.style.display = "block";

  if (tipo_usuario_cadastro.value === "Aluno") {
    alunoCampos.forEach((campo) => (campo.style.display = "block"));
    personalCampos.forEach((campo) => (campo.style.display = "none"));
  } else if (tipo_usuario_cadastro.value === "Personal") {
    alunoCampos.forEach((campo) => (campo.style.display = "none"));
    personalCampos.forEach((campo) => (campo.style.display = "block"));
  } else {
    camposCadastro.style.display = "none";
  }
});

// Alterar campos login
const alunoCampos = document.querySelector(".login_aluno");
const personalCampos = document.querySelector(".login_personal");

alunoCampos.style.display = "none";
personalCampos.style.display = "none";

tipo_usuario_login.addEventListener("change", () => {
  const perfil = tipo_usuario_login.value;

  alunoCampos.style.display = "none";
  personalCampos.style.display = "none";


  if (perfil === "Aluno") {
    alunoCampos.style.display = "block";
  } else if (perfil === "Personal") {
    personalCampos.style.display = "block";
  }
});

// Fluxo de cadastro e login

// Login
const form_login = document.getElementById("form-login");

form_login.addEventListener("submit", async (e) => {
  e.preventDefault();

  const tipo_usuario_login = document.getElementById("tipo-usuario-login").value;

  if (tipo_usuario_login === 'Personal') {

    const email = document.getElementById("email-login").value;
    const senha = document.getElementById("senha-login").value;

    fetch("http://localhost:8081/personais/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        senha: senha
      }),
    }).then((response) => response.json())
      .then(data => {
        if (data.message.includes("E-mail e/ou senha são inválidos.")) {
          document.getElementById('error-message-login').textContent = data.message
          return;
        }

        window.location.href = "/personal/dashboard.html"
      });
  }

  if (tipo_usuario_login === 'Aluno') {

    email = document.getElementById("email-login").value,
      senha = document.getElementById("senha-login").value

    fetch("http://localhost:8081/alunos/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        senha
      })
    }).then((response) => response.json())
      .then(data => {
        if (data.message.includes("E-mail e/ou senha são inválidos.")) {
          document.getElementById('error-message').textContent = data.message
          return;
        }

        window.location.href = "/aluno/dashboard.html"
      });
  }
});

//Cadastro

const form_cadastro = document.getElementById("form-cadastro");

form_cadastro.addEventListener("submit", async (e) => {
  e.preventDefault();

  const tipoUsuario = document.getElementById("tipo-usuario-cadastro").value;

  if (tipoUsuario === 'Personal') {

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const estado = document.getElementById("estado").value;
    const cidade = document.getElementById("cidade").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirma_senha = document.getElementById("confirma-senha").value;
    const celular = document.getElementById("celular").value;
    const formacao = document.getElementById("formacao-personal").value;
    const tempo_experiencia = document.getElementById("tempo-experiencia").value;
    const cref = document.getElementById("cref").value;
    const tipo_cobranca = document.getElementById("tipo-cobranca").value;
    const valor_cobranca = document.getElementById("valor-cobranca").value;

    if (senha !== confirma_senha) {
      document.getElementById('error-message-cadastro').textContent = "As senhas não coincidem."
      return;
    }

    fetch("http://localhost:8081/personais", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeCompleto: nome,
        idade: idade,
        estado: estado,
        cidade: cidade,
        email: email,
        senha: senha,
        celular: celular,
        formacao: formacao,
        tempoExperiencia: tempo_experiencia,
        cref: cref,
        tipoCobranca: tipo_cobranca,
        valorCobranca: valor_cobranca
      }),
    }).then((response) => response.json())
      .then(data => {
        document.getElementById("error-message-cadastro").textContent = ""
        if (data.errors) {
          document.getElementById("error-message-cadastro").innerHTML = data.errors.map(el => el).join("<br>")
          return;
        }

        if (data.error) {
          document.getElementById("error-message-cadastro").textContent = data.error
          return;
        }

        if (data.message.includes("Cadastro de usuário realizado com sucesso!")) {
          document.getElementById("success-message-cadastro").textContent = data.message

          setTimeout(() => {
            window.location.reload()
          }, 2000)
        }
      });

  }

  if (tipoUsuario === 'Aluno') {

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const estado = document.getElementById("estado").value;
    const cidade = document.getElementById("cidade").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirma_senha = document.getElementById("confirma-senha").value;
    const celular = document.getElementById("celular").value;
    const tempo_treino = document.getElementById("tempo-treino").value;
    const frequenta_academia = document.getElementById("frequenta-academia").value;

    if (senha !== confirma_senha) {
      document.getElementById('error-message-cadastro').textContent = "As senhas não coincidem."
      return;
    }

    fetch("http://localhost:8081/alunos", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeCompleto: nome,
        idade: idade,
        peso: peso,
        altura: altura,
        estado: estado,
        cidade: cidade,
        email: email,
        senha: senha,
        celular: celular,
        frequentaAcademia: frequenta_academia,
        tempoTreino: tempo_treino
      }),
    }).then((response) => response.json())
      .then(data => {
        document.getElementById("error-message-cadastro").textContent = ""
        if (data.errors) {
          document.getElementById("error-message-cadastro").innerHTML = data.errors.map(el => el).join("<br>")
          return;
        }

        if (data.error) {
          document.getElementById("error-message-cadastro").textContent = data.error
          return;
        }

        if (data.message.includes("Cadastro de usuário realizado com sucesso!")) {
          document.getElementById("success-message-cadastro").textContent = data.message

          setTimeout(() => {
            window.location.reload()
          }, 2000)
        }
      });

  }
});