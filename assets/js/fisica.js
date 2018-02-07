const ALTURA_CHAO = $(window).height() - 165

var gravidade = function(objetos) {
    objetos.forEach(element => {
        if(element.pos.top < ALTURA_CHAO) {
           return element.pos.top + 10 
        }
    });
}