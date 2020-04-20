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
    }),
    time: new Howl({
        src:['../audio/music/Kim Lightyear - Time Is Ticking Away.mp3'],
        loop:true
    }),
    mall: new Howl({
        src:['../audio/music/Mall.ogg'],
        loop:true,
        volume: 0.4
    }),
    discovery: new Howl({
        src:['../audio/music/The Biggest Discovery.ogg'],
        loop:true,
        volume: 0.4
    }),
    mimos: new Howl({
        src:['../audio/music/Mimos Menguados.ogg'],
        loop:true,
        volume: 0.4
    }),
    solve: new Howl({
        src:['../audio/music/Solve The Puzzle.ogg'],
        loop:true,
        volume: 0.4
    })
   
}
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })



