function Formulario_02(){
    const nome=document.getElementById("nome").value;
const email= document.querySelector("#email").value;
const senha= document.getElementById("senha").value;


console.log(senha)

//validção de campos vazios
if(nome == ``|| email ==``|| senha == ``){
alert("por favor preencha o campo vazio!")
}
//verificação do campo de email
const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
if(emailRegex.test){
alert("Digite um e-mail válido!")
}
}
if(senha.length > 8){
alert ("A senha excedeu os limites de caracteres")
}
if(senha == Confirme_sua_senha){
    alert ("Cadastro foi realiado com sucesso!")
}else{
    alert ("Senha incorreta, Tente novamente!")
}
function modoEscuro(){
    const pagina = document.body

    pagina.classList.toggle("modoEscuro")

    const botao = document.querySelector("button")

    const isdarkmode = document.body.classList.contains("modoEscuro");

    if (isdarkmode == true) {
        botao.textContent = "Modo Claro"
    } else {
        botao.textContent = "Modo Escuro"
    }
}
