const ALTURA_CHAO = $(window).height() - 165

var gravidade = function (objetos) {
    objetos.forEach(element => {
        if (element.pos.top < ALTURA_CHAO) {
            element.pos.top += 30
            $('#' + element.nome).css("top", element.pos.top + "px")

            console.log(element.pos.top)
        }
    });
}