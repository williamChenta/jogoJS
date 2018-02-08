const ALTURA_CHAO = $(window).height() - 165
const ALTURA_SALTO = 230
var tempoPairando = 7

var gravidade = function (objetos) {
    objetos.forEach(element => {
        if (element.pos.top < ALTURA_CHAO && !element.saltando) {
            element.caindo = true
            element.pos.top += 13
            $('#' + element.nome).css("top", element.pos.top + "px")
        } else {
            element.caindo = false
        }
    });
}

var salto = function(objetos) {
    objetos.forEach(element => {
        if(element.pos.top > ALTURA_SALTO + 1 && !element.caindo && element.saltando) {            
            element.pos.top -= 13
            $('#' + element.nome).css("top", element.pos.top + "px")
        } else {
            if(tempoPairando > 0) {
                tempoPairando--
            } else {
                element.saltando = false
                tempoPairando = 7
            }            
        }
    })
}