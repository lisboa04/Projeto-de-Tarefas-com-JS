let tarefa;
let ul;
let li;
let divTarefa;
var contLI = 0;

function pegar(){

    // Atribuindo valor às variaveis e criando elementos
    tarefa = document.getElementById('tarefa').value;
    ul = document.createElement("ul");
    li = document.createElement("li");

    // Declarando variaveis e adicionando evento do botao apagar tarefa
    btn = document.createElement("button");
    btn.type = 'submit';
    btn.innerHTML = 'Apagar';
    btn.setAttribute("id", "btn-apagar");
    btn.addEventListener('click', function(){
        apagar(this);
    });

    // Declarando variaveis e adicionando evento do botao tarefa feita
    btnC = document.createElement("button");
    btnC.type = 'submit';
    btnC.innerHTML = 'Feita!';
    btnC.setAttribute("id", "btn-feita");
    btnC.addEventListener('click', function(){
        tarefaFeita(this);
    })
    
    // if de validação - não permitir adicionar com o campo vazio
    if(tarefa != ""){

        if(erro.style.display === 'block'){
            erro.style.display = 'none';
        }
        adicionar();

    }else{

        let erro = document.getElementById('erro');
        if(adicionado.style.display === 'block'){adicionado.style.display = 'none';}
        erro.style.display = 'block';
    }

    // funções necessárias para realizar o projeto
    function apagar(li){
        contLI --;
        console.log(contLI)
        li.parentNode.remove(true);
    }    
    function adicionar(){
        let adicionado = document.getElementById('adicionado');
        divTarefa = document.getElementById('tarefas-add');
        divTarefa.style.color = 'white';
        texto = document.createTextNode(tarefa);
        li.appendChild(texto);
        li.appendChild(btn);
        li.appendChild(btnC);
        divTarefa.appendChild(li);
        adicionado.style.display = 'block';
        contLI ++;

        
    }
    function tarefaFeita(li){
        li.parentNode.style.backgroundColor = 'green';
    }
}


