document.addEventListener("keydown", keyDownTextField, false)
document.addEventListener("keyup", paraSom, false)

var contaCenario = 1
const TOTAL_CENARIOS = 2

var movimentosMario = []
movimentosMario[39] = false
movimentosMario[37] = false
movimentosMario[32] = false

var cenarioAtual

function paraSom(e) {
    movimentosMario[e.keyCode] = false
    audioElement.pause();
}

function keyDownTextField(e) {
    movimentosMario[e.keyCode] = true    
}

var mario = {
    nome: 'mario',
    pos: 0,
    caindo: false,
    saltando: false,

    movimentar: function () {
        this.pos = $('#mario').position()

        if (movimentosMario[39] && !movimentosMario[37]) {
            $('#mario').css("left", (this.pos.left + 5) + "px")
        }
        if (movimentosMario[37] && !movimentosMario[39] && (this.pos.left>10 || cenarioAtual>1)) {
            $('#mario').css("left", (this.pos.left - 5) + "px")
        }
        if (movimentosMario[32] && !this.caindo) {
            this.saltando = true            
        }
    }
}

var cenario = {
    trocar: () => {
        if (mario.pos.left >= $(window).width() - 150) {
            contaCenario++
            cenarioAtual = contaCenario
            $('body').css("background-image", "url(./assets/img/fundo" + contaCenario + ".jpg)")
            $('#mario').css("left", 10 + "px")
            contaCenario = contaCenario >= TOTAL_CENARIOS ? 1 : contaCenario
        } else if(mario.pos.left <= -10) {
            cenarioAtual = contaCenario
            contaCenario = contaCenario > 1 ? contaCenario-- : 1
            $('body').css("background-image", "url(./assets/img/fundo" + contaCenario + ".jpg)")
            $('#mario').css("left", ($(window).width() - 200) + "px")            
        }
    }
}

setInterval(() => {
    mario.pos = $('#mario').position()
    gravidade([mario])
    salto([mario])
    mario.movimentar()
    cenario.trocar()
}, 50)