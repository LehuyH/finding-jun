var sfx = {
    hover: new Howl({
        src: ['../audio/sfx/move.mp3']
    }),
    confirm: new Howl({
        src: ['../audio/sfx/Menu Confirm.mp3']
    }),
    transition: new Howl({
        src: ['../audio/sfx/Transition.mp3']
    }),
    lvlUp: new Howl({
        src: ['../audio/sfx/Level Up.mp3']
    }),
    blip: new Howl({
        src: ['../audio/sfx/blip.wav'],
        loop:true
    })
}


var music = {
    unsolved: new Howl({
        src:['../audio/music/Unsolved-Investigation-isaiah658.ogg'],
        loop: true
    })
}
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })



