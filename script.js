// function mostrarMouse(event){
//     console.log(`Eixo X: ${event.page} e Eixo Y ${event.pageY}`);

// if(event.pageX <= 30 & event.pageY <= 30){
//     alert("bo fude kkkkk")
//     }
// }

// window.onmousemove = mostrarMouse;


let h2 = document.querySelector("h1");
let a = document.querySelector("a");
let nome = document.querySelector("h1");
let botao = document.querySelector("button");

let div = document.querySelector("div");
let section = document.querySelector("section");

if(localStorage.login){
    h2.innerHTML = `SEJA BEM VINDO ${localStorage.login}`;
    a.innerHTML = `NÃO É O ${localStorage.login} ?`;
    div.style.display = "none";
    section.style.display = "initial";

}else{
        function cadastrar(){
            localStorage.setItem("login", nome.value);
            div.style.display = "initial";

            if(localStorage.login){
                h2.innerHTML = `SEJA BEM VINDO ${localStorage.login}`;
                a.innerHTML = `NÃO É O ${localStorage.login} ?`;
                div.style.display = "none";
                section.style.display = "initial";
        }
    }
}

function reset(){
    localStorage.clear("login");
}

botao.onclick = cadastrar;
a.onclick = reset;