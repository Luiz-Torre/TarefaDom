
function enviar() {
var ass = document.createElement('div');
var ass2 = document.createElement('div');
ass.className = 'ass';
ass2.className = 'ass2';

ass.appendChild(document.createTextNode(document.querySelector('#nome').value));
ass.appendChild(ass2)
ass.appendChild(document.createTextNode(document.querySelector('#coment').value));


document.getElementById('com').appendChild(ass);

}

function apagar(){
    var list = document.getElementById("com");
    while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
}
}