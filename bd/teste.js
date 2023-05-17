function logar(){

let nome = document.getElementById("nome").value
let senha = document.getElementById("senha").value

let dados =     [
                        {"id": Date.NOW(),"nome": "will","senha": 12345}, //0
                        {"id": Date.NOW(),"nome": "bob","senha": 2222}, //1
                        {"id": Date.NOW(),"nome": "ringo","senha": 3333}, //2
                ]

for(let i=0;dados.length > i;i++){
if(nome === dados[i].nome && senha == dados[i].senha){
    alert ("Está logado")
    break
}
}

}

fuction teste()