
function enviar() {
var comentario_unico = document.createElement('div');
var apagar_comentario = document.createElement('button');
var separador_dentro = document.createElement('div');
comentario_unico.className = 'comentario_unico';
separador_dentro.className = 'separador_dentro';
apagar_comentario.id = 'apagar_comentario';


comentario_unico.appendChild(document.createTextNode(document.querySelector('#nome').value));

apagar_comentario.onclick = function  () {
    removeLinha(this)
};


comentario_unico.appendChild(apagar_comentario)

comentario_unico.appendChild(separador_dentro)


comentario_unico.appendChild(document.createTextNode(document.querySelector('#coment').value));


document.getElementById('com').appendChild(comentario_unico);

}

function apagar(){
    var list = document.getElementById("com");
    while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
}


}


function removeLinha(element){
    var el = element.closest('div');
    el.outerHTML = '';
      }

