const ALTURA_CHAO = $(window).height() - 165
const ALTURA_SALTO = 200

var gravidade = function (objetos) {
    objetos.forEach(element => {
        if (element.pos.top < ALTURA_CHAO && !element.saltando) {
            element.caindo = true
            element.pos.top += 1.5
            $('#' + element.nome).css("top", element.pos.top + "px")
        } else {
            element.caindo = false
        }
    });
}

var salto = function(objetos) {
    objetos.forEach(element => {
        if(element.pos.top > ALTURA_SALTO + 1 && !element.caindo && element.saltando) {            
            element.pos.top -= 1.5
            $('#' + element.nome).css("top", element.pos.top + "px")
        } else {
            element.saltando = false
        }
    })
}