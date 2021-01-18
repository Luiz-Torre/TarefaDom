
function enviar() {
// Criando os elemementos
var comentario_tudo = document.createElement('div');
var topo_comentario = document.createElement('div');
var nome_comentario = document.createElement('text');
var edit = document.createElement('div');
var botoes = document.createElement('div');
var apagar_comentario = document.createElement('button');
var txt_comentario = document.createElement('div');
var editar_comentario = document.createElement('button');


// dando Class às tags
comentario_tudo.className = 'comentario_tudo';
topo_comentario.className = 'topo_comentario';
nome_comentario.className = 'nome_comentario';
txt_comentario.className = 'txt_comentario';
edit.className = 'edit';



//Dando os ids dos botões
apagar_comentario.id = 'apagar_comentario';
editar_comentario.id = 'editar_comentario';

//Adicionando os valores obtidos no formulario
nome_comentario.appendChild(document.createTextNode(document.querySelector('#nome').value));
txt_comentario.appendChild(document.createTextNode(document.querySelector('#coment').value));

apagar_comentario.onclick = function  () {
    removeLinha(this)
};

editar_comentario.onclick = function  () {
    editar(this)
};

//Adicionando os botões em divs, o texto em divs, e coisas do tipo
botoes.appendChild(apagar_comentario)
botoes.appendChild(editar_comentario)
topo_comentario.appendChild(nome_comentario)
topo_comentario.appendChild(botoes)

comentario_tudo.appendChild(topo_comentario)
comentario_tudo.appendChild(txt_comentario)
comentario_tudo.appendChild(edit)


//Adicionando o resultado das junções anterios na página
document.getElementById('com').appendChild(comentario_tudo);

}


// Abaixo se encontra as funções dos eventos 



//Evento de apagar todos os comentarios
function apagar(){
    var list = document.getElementById("com");
    while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
}

}
//Evento de apagar o comentario desejado

function removeLinha(removedor){
    var removed = removedor.closest('div').parentNode.parentNode
    removed.outerHTML = '';
      }



//Evento de escolher o comentario desejado para editar

function editar(aux_editar){
    var aux_edita = aux_editar.closest('div').parentNode.parentNode.lastChild

    aux_edita.innerHTML = '<div class="Mega_edit"><div class="edita_nome_design"><label>Editar Nome:</label><input type="text" id="nome_editar"></div><br><div class = "edita_comentario_design"><br><label>Editar Comentario:</label><textarea id="coment_editar"></textarea></div><div class = "botão_editar_confirmar"><button class="confirma_edita" onClick = "altera(this)"></div>'
}

//Evento de confirmar a alteração do comentario desejado

function altera(aux_altera){
    var alterar = aux_altera.closest('div').parentNode.parentNode.parentNode.firstChild.firstChild
    var alterar2 = aux_altera.closest('div').parentNode.parentNode.parentNode.firstChild.nextSibling
    var alterar3 = aux_altera.closest('div').parentNode

    alterar.innerText = document.querySelector('#nome_editar').value;
    alterar2.innerHTML = document.querySelector('#coment_editar').value;
    alterar3.outerHTML = '';

    
 }