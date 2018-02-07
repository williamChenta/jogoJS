$(document).ready(function () {
    document.addEventListener("keydown", keyDownTextField, false)
    document.addEventListener("keyup", paraSom, false)

    var contaCenario = 1
    const TOTAL_CENARIOS = 2

    function paraSom() {
        audioElement.pause();
    }

    function keyDownTextField(e) {
        var keyCode = e.keyCode;
        var pos = mario.movimentar(keyCode)

        cenario.trocar(pos)
    }

    var mario = {
        nome: 'Mario',
        pos: $('#mario').position(),

        movimentar: function (keyCode) {
            this.pos = $('#mario').position()
            switch (keyCode) {
                case 39:
                    $('#mario').css("left", (this.pos.left + 10) + "px")
                    audioElement.play()
                    return this.pos.left
                    break
                case 37:
                    $('#mario').css("left", (this.pos.left - 10) + "px")
                    return this.pos.left
                    break
                case 32:
                    $('#mario').css("top", (this.pos.top - 150) + "px")
                    break
                default:
                    console.log('Mario, fique parado!')
                    break
            }
        }
    }

    let cenario = {
        trocar: (posMario) => {
            if (posMario >= $(window).width() - 150) {
                contaCenario++
                $('body').css("background-image", "url(./assets/img/fundo" + contaCenario + ".jpg)")
                $('#mario').css("left", 10 + "px")

                contaCenario = contaCenario >= TOTAL_CENARIOS ? 0 : contaCenario
            }
        }
    }

    setInterval(() => { gravidade([mario]) }, 1000)
})