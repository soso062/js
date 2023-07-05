let botao = document.getElementById("botao");
let numero = 0;

botao.addEventListener("click", function contador(){
    let count = document.getElementById("count");
    numero++
    
    count.innerHTML = numero;
})


let botao1 = document.getElementById("botao1");

botao1.addEventListener("click", function contador(){
    let count = document.getElementById("count");
    numero--
    
    count.innerHTML = numero;
})
