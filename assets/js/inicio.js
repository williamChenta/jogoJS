var audioElement = document.createElement('audio')
audioElement.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/smb/smb_1-up.wav');


document.addEventListener("keydown", keyDownTextField, false);
document.addEventListener("keyup", paraSom, false);

function paraSom() {
    audioElement.pause();
}

function keyDownTextField(e) {
    var keyCode = e.keyCode;
    mario.movimentar(keyCode)
}

let mario = {
    nome: 'Mario',
    


    movimentar: function (keyCode) {
        pos = $('#mario').position()

        switch (keyCode) {
            case 39:
                console.log('Mario, andar para direita!')
                $('#mario').css("left", (pos.left + 10) + "px")
                audioElement.play()
                break
            case 37:
                console.log('Mario, andar para esquerda!')
                $('#mario').css("left", (pos.left - 10) + "px")
                break
            default:
                console.log('Mario, fique parado!')
                break
        }
    }
}
