const card = document.getElementById("card");
const cadastroButton = document.getElementById("CadastroButton");
const loginButton = document.getElementById("LoginButton");
const tipoUsuario = document.getElementById("tipo-usuario-login" && "tipo-usuario-cadastro");
const camposCadastro = document.getElementById("campos-cadastro");

cadastroButton.addEventListener("click", () => {
  card.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  card.classList.remove("right-panel-active");
});

tipoUsuario.addEventListener("change", () => {
  const alunoCampos = document.querySelectorAll(".alunos-only");
  const personalCampos = document.querySelectorAll(".personais-only");

  camposCadastro.style.display = "block";

  if (tipoUsuario.value === "alunos") {
    alunoCampos.forEach((campo) => (campo.style.display = "block"));
    personalCampos.forEach((campo) => (campo.style.display = "none"));
  } else if (tipoUsuario.value === "personais") {
    alunoCampos.forEach((campo) => (campo.style.display = "none"));
    personalCampos.forEach((campo) => (campo.style.display = "block"));
  } else {
    camposCadastro.style.display = "none";
  }
});



const perfil_selecionado = document.getElementById("perfil_login");

const alunoCampos = document.querySelector(".login_aluno");
const personalCampos = document.querySelector(".login_personal");


alunoCampos.style.display = "none";
personalCampos.style.display = "none";


perfil_selecionado.addEventListener("change", () => {
  const perfil = perfil_selecionado.value;


  alunoCampos.style.display = "none";
  personalCampos.style.display = "none";

  
  if (perfil === "alunos") {
    alunoCampos.style.display = "block";
  } else if (perfil === "personais") {
    personalCampos.style.display = "block";
  }
});


const form = document.getElementById("tipo-usuario-login"); 


form.onsubmit = async (e) => {
  e.preventDefault();
  
  const tipoUsuario = document.getElementById("tipo-usuario-login").value;
  
  if (tipoUsuario === 'personais') {
    
    const email = document.getElementById("email-login").value;
    const senha = document.getElementById("senha-login").value;
    
    const response = await fetch("http://localhost:8081/personais", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          email: email,
          senha: senha
        }),
      }).then((response) => response.json())
      .then(data => console.log(data));
      
      
      console.log(response);
      
    }
    
    if (tipoUsuario === 'alunos') {
      
      email = document.getElementById("email-login").value,
      senha = document.getElementById("senha-login").value
      
      const login = {
        email: email,
        senha: senha
      };
      
      fetch("http://localhost:8081/alunos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login)
        
      }).then((response) => response.json())
      .then(login => console.log(login));
      
      console.log(login);
    }
  };

  
  
  
  const formCadastro = document.getElementById("tipo-usuario-cadastro");
  
  form.onsubmit = async (e) => {
    e.preventDefault();
    
    const tipoUsuario = document.getElementById("tipo-usuario-cadastro").value;
    
    if (tipoUsuario === 'personais') {
      
      const nome = document.getElementById("nome").value;
      const idade = document.getElementById("idade").value;
      const estado = document.getElementById("estado").value;
      const cidade = document.getElementById("cidade").value;
      const email = document.getElementById("email").value;
      const celular = document.getElementById("celular").value;
      const formacao = document.getElementById("formacao-personal").value;
      const tempo_experiencia = document.getElementById("tempo-experiencia").value;
      
      const response = await fetch("http://localhost:8081/personais", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome,
          idade: idade,
          estado: estado,
          cidade: cidade,
          email: email,
          celular: celular,
          formacao: formacao,
          tempo_experiencia: tempo_experiencia
        }),
      }).then((response) => response.json())
      .then(data => console.log(data));
      
      console.log(response);
    }
    
    
    if (tipoUsuario === 'alunos'){
      
      const nome = document.getElementById("nome").value;
      const idade = document.getElementById("idade").value;
      const peso = document.getElementById("peso").value;
      const altura = document.getElementById("altura").value;
      const cidade = document.getElementById("cidade").value;
      const email = document.getElementById("email").value;
      const celular = document.getElementById("celular").value;
      const tempo_treino = document.getElementById("tempo-treino").value;
      
      const response = await fetch("http://localhost:8081/alunos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome,
          idade: idade,
          peso: peso,
          altura: altura,
          cidade: cidade,
          email: email,
          celular: celular,
          tempo_treino: tempo_treino
        }),
      }).then((response) => response.json())
      .then(data => console.log(data));
      
      console.log(response);
    }
  };
  
  
  
  
  
  
  
  
  
  // Protocolo RPC > Remote Procedure Call
  // Websocket
  // protocolo tcp/ip / udp
  
  // PROTOCOLO HTTP > Protocolo de rede
  
  // GET > Listar dados > Parametros ou Query
  // POST > Criar dados | Login
  // PUT > Atualizar dados
  // PATCH > Atualizar apenas campos especificos
  // DELETE > Deletar dados > Parametros ou Query ?nome=tal&idade=tal
  
  // Status Code
  
  // 1xx > Informativo
  // 2xx > Sucesso 200 OK 201 created
  // 3xx > Redirecionamento
  // 4xx > Erro cliente 400 bad request | 401 unauthorized | 403 forbidden | 404 not found
  // 5xx > Erro servidor
  
  // 500 Ocorreu um erro inesperado.
  
  // Axios
  // Fetch Api
  
  
  
  
  
  
  
  
  





//   if (tipoUsuario === "personal") {
//     const nome = document.getElementById("nome").value;
//     const idade = document.getElementById("idade").value;
//     const estado = document.getElementById("estado-personal").value;
//     const cidade = document.getElementById("cidade-aluno").value;
//     const email = document.getElementById("email-aluno").value;
//     const celular = document.getElementById("celular-aluno").value;
//     const formacao = document.getElementById("formacao-personal").value;
//     const tempo_experiencia =
//       document.getElementById("tempo-experiencia").value;

//     console.log("Cadastro personal");

//     axios
//       .post("http://localhost:8081/personais", {
  //         nome: nome,
  //         idade: idade,
  //         estado: estado,
  //         cidade: cidade,
  //         email: email,
  //         celular: celular,
  //         formacao: formacao,
  //         tempo_experiencia: tempo_experiencia,
//       })
//       .then((res) => console.log(res))
//       .catch((error) => console.log("Erro ao fazer o Cadastro:", error));
//   }
//   if (tipoUsuario === "aluno") {
//     const nome = document.getElementById("nome-aluno").value;
//     const idade = document.getElementById("idade-aluno").value;
//     const peso = document.getElementById("peso-aluno").value;
//     const altura = document.getElementById("altura-aluno").value;
//     const cidade = document.getElementById("cidade-aluno").value;
//     const email = document.getElementById("email-aluno").value;
//     const celular = document.getElementById("celular-aluno").value;
//     const tempo_treino = document.getElementById("tempo-treino").value;

//     console.log("Cadastro aluno");

//     axios
//       .post("http://localhost:8081/alunos", {
//         nome: nome,
//         idade: idade,
//         peso: peso,
//         altura: altura,
//         cidade: cidade,
//         email: email,
//         celular: celular,
//         tempo_treino: tempo_treino,
//       })
//       .then((res) => console.log("efetuado", res))
//       .catch((error) => console.log("Erro ao fazer o Cadastro:", error));
//   }
// };
