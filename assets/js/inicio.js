var audioElement = document.createElement('audio')
audioElement.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/smb/smb_1-up.wav');


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

let mario = {
    nome: 'Mario',

    movimentar: function (keyCode) {
        pos = $('#mario').position()

        switch (keyCode) {
            case 39:
                $('#mario').css("left", (pos.left + 10) + "px")
                audioElement.play()
                return pos.left
                break
            case 37:
                $('#mario').css("left", (pos.left - 10) + "px")
                return pos.left
                break
            default:
                console.log('Mario, fique parado!')
                break
        }
    }
}

let cenario = {
    trocar: (posMario) => {
        if(posMario >= $(window).width()-150) {
            contaCenario++
            $('body').css("background-image", "url(./assets/img/fundo" + contaCenario + ".jpg)")
            $('#mario').css("left", 10 + "px")

            contaCenario = contaCenario >= TOTAL_CENARIOS ? 0 : contaCenario
        }
    }
}
