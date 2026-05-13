const imagens = [
    'https://picsum.photos/id/1015/500/300',
    'https://picsum.photos/id/1025/500/300',
    'https://picsum.photos/id/1035/500/300',
];

let indice = 0;

function mostrarSlide() {
    document.getElementById('imagem').src = imagens [indice]
};
function proximoSlide(){
    indice++;
    if(indice >= imagens.length) {
        indice = 0;
    }
    mostrarSlide();
};
function voltarSlide() {
    indice--;
    if(indice < 0){
        indice = imagens.length -1;
    }
    mostrarSlide();
};