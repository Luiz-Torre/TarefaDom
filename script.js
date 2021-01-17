
function enviar() {
var comentario_tudo = document.createElement('div');
var topo_comentario = document.createElement('div');
var nome_comentario = document.createElement('text');
var botoes = document.createElement('div');

var apagar_comentario = document.createElement('button');
var txt_comentario = document.createElement('div');
var editar_comentario = document.createElement('button');

comentario_tudo.className = 'comentario_tudo';
topo_comentario.className = 'topo_comentario';

nome_comentario.className = 'nome_comentario';

txt_comentario.className = 'txt_comentario';

//Dando os ids dos botões
apagar_comentario.id = 'apagar_comentario';
editar_comentario.id = 'editar_comentario';


nome_comentario.appendChild(document.createTextNode(document.querySelector('#nome').value));
txt_comentario.appendChild(document.createTextNode(document.querySelector('#coment').value));

apagar_comentario.onclick = function  () {
    removeLinha(this)
};

editar_comentario.onclick = function  () {
    editar(this)
};


botoes.appendChild(apagar_comentario)
botoes.appendChild(editar_comentario)
topo_comentario.appendChild(nome_comentario)
topo_comentario.appendChild(botoes)

comentario_tudo.appendChild(topo_comentario)
comentario_tudo.appendChild(txt_comentario)


document.getElementById('com').appendChild(comentario_tudo);

}

function apagar(){
    var list = document.getElementById("com");
    while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
}


}


function removeLinha(removedor){
    var removed = removedor.closest('div').parentNode.parentNode
    removed.outerHTML = '';
      }


function editar(aux_editar){
    var aux_edita = aux_editar.closest('div').previousSibling
    var aux_edita2 = aux_editar.closest('div').parentNode.parentNode.lastChild

    aux_edita.innerHTML = '<label>Editar Nome:</label><input type="text" id="nome_editar" required="true">'
    aux_edita2.innerHTML = '<label>Editar Nome:</label><input type="text" id="coment_editar" required="required"><div class = "botão_editar_confirmar"><button class="confirma_edita" onClick = "altera(this)"></div>'
}

 function altera(aux_altera){
    var alterar = aux_altera.closest('div').parentNode.parentNode.firstChild.firstChild
    var alterar2 = aux_altera.closest('div').parentNode

    alterar.innerHTML = document.querySelector('#nome_editar').value;
    alterar2.innerHTML = document.querySelector('#coment_editar').value;

    
 }