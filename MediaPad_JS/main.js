// MAIN é o nome do arquivo JS principal

function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);  

    if(elemento != null && elemento.localName === 'audio'){
             elemento.play();
        }
    else {
        console.log('Elemento não encontrado ou Seletor inválido.');
    }   
    }

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSom;

for(let x = 0; x < listaDeTeclas.length; x++){

    const tecla = listaDeTeclas[x];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; // template string

   tecla.onclick = function (){
        tocaSom(idAudio);
    }
 tecla.onkeydown = function (evento){
    if(evento.code === 'Space' ||evento.code === 'Enter'){
        tecla.classList.add('ativa');
    }
 }   

 tecla.onkeyup = function (){
    tecla.classList.remove('ativa');
 }   
}