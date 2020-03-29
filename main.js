// Recuperar container, textoDigitado, botao
// definir variaveis: URL, 
let container = document.getElementById("container");
let inputDigitado = document.getElementById("inputDados");
let botao = document.getElementById("botaoEnviar");
let URLaPesquisar;

// Criar futura lista e coloca-la no container
let unorderedList = document.createElement("ul");
unorderedList.id = "unorderedList";
container.appendChild(unorderedList);

// Criar funcao para vincular URL e texto digitado

function preparadorURLChamarPromise() {
    let textoDigitado = inputDigitado.value;
    URLaPesquisar = `https://api.github.com/users/${textoDigitado}/repos`;


    

    // Chamar Promise

    axios.get(URLaPesquisar)
    .then(function(response) {
        unorderedList.innerHTML = "";         
        for ( x of response.data) { 
            let valorCriado = document.createElement("li")           ;
            valorCriado.innerText = x.name;
            unorderedList.appendChild(valorCriado);
            //console.log(x.name);
        }        
    })
    .catch(function(error) {
        console.log(error);        
    });


}

// Vincular eventListener ao botao

botao.addEventListener("click", preparadorURLChamarPromise);

// Pesquisar e montar os listItems













