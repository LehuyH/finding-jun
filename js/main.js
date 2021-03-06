//Setup
var debug = false
var app = new Vue({
  el: '#application',
  data: {
    dialogTitle: '',
    follow: [],
    contacts: [

    ],
    talkLog: [],
    page: "none",
    clues: [],
    modal: {
      title: '',
      text: ''
    },
    tutorial: null,
    selected: null,
    actions: []
  },
  methods: {
    triggerDialog: function (contact) {
      this.page = "talk"
      this.selected = contact
    },
    triggerAction: function (action) {
      dialog(dialogStore.actions[action])
    },
    startDialog: function (clue) {
      var clue = document.getElementById('clueSelect').value
      app.page = "none"
      if (clue == "Do not talk about a clue") {
        if (gameState == 4) {
          dialog(dialogStore[app.selected].dialog[gameState])
        }else if (gameState == 14) {
          dialog(dialogStore[app.selected].dialog[14])
        } else if (gameState == 8) {
          dialog(dialogStore[app.selected].dialog[4])
        } else {
          dialog(dialogStore[app.selected].dialog[dialogStore[app.selected].state])
        }
      }else if (gameState > 13 && app.selected == "Mia" && clue == "Jun was shot by the police for doing or selling drugs") {
        dialog(dialogStore.Mia.dialog.already)
      }  else {
        dialog(dialogStore[app.selected].dialog[clue])
      }




    }
  }
})
$('#modal').modal({
  show: false
})


//Setup menu interaction

newGamebtn = document.getElementById('newGame')
managesbtn = document.getElementById('manageSaves')
manageSaves = document.getElementById('manageSaves')

//Get other elements



var scenes = {
  intro: {
    e: document.getElementById("introduction"),
    transform: "translateY(800px)",
    endY: 0,
    duration: 2000,
    audio: sfx.transition

  }
}

//Menu click events
newGamebtn.addEventListener('click', () => {
  anime({
    targets: '#mainMenu',
    translateY: 500,
    opacity: 0,
    duration: 2000,
    complete: function () {
      document.getElementById("mainMenu").classList.add("hide")
      document.getElementById("application").style.backgroundImage = "url('https://images.unsplash.com/photo-1520473323060-f6f50760c35b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1405&q=80')"
      setTimeout(function () {
        document.getElementById("game").classList.remove("hide")
        document.getElementById("game").style.opacity = 0
        anime({
          targets: "#game",
          opacity: 1,
          duration: 2000,
          easing: "easeInQuad",


        });
        music.unsolved.play()
        music.unsolved.fade(0, 1, 5000)
        dialog(dialogStore.intro)




      }, 5000)
      textScene(scenes.intro, "The Story Begins")


    }
  });
})

manageSaves.addEventListener('click', () => {
  var save = JSON.parse(localStorage.getItem('save'))
  if(save == undefined){

  }else{
  app.clues = save.clues
  app.contacts = save.contacts
  gameState = save.gameState
  app.actions = save.actions
  anime({
    targets: '#mainMenu',
    translateY: 500,
    opacity: 0,
    duration: 2000,
    complete: function () {
      document.getElementById("mainMenu").classList.add("hide")
      document.getElementById("application").style.backgroundImage = save.bg
      if (save.bg == 'url("https://images.unsplash.com/photo-1520473323060-f6f50760c35b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1405&q=80")') {
        music.unsolved.play()
      }
      if (save.bg == 'url("https://images.unsplash.com/photo-1526731955462-f6085f39e742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80)")') {
        music.time.play()
      }
      if (save.bg == 'url("https://arquitectonica.com/architecture/wp-content/uploads/sites/2/2018/07/SM_Mall_of_Asia_and_Bay_City_District_Plan_3_ft-1920x1080.jpg")') {
        music.mall.play()
      }
      if (save.bg == 'url("https://images.unsplash.com/photo-1507643179773-3e975d7ac515?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")') {
        music.discovery.play()
      }
      if (save.bg == 'url("https://images.unsplash.com/photo-1566673495363-e3870c068b61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")') {
        music.mimos.play()
      }
      setTimeout(function () {
        document.getElementById("game").classList.remove("hide")
        document.getElementById("game").style.opacity = 0
        anime({
          targets: "#game",
          opacity: 1,
          duration: 2000,
          easing: "easeInQuad",


        });





      }, 1000)




    }
  });
}
})


//Game functions

function textScene(scene, text) {
  document.getElementById("textScene").innerText = text
  scene.audio.play()
  scene.e.classList.remove("hide")
  scene.e.style.transform = scene.transform

  scene.e.style.opacity = 0

  anime({
    targets: scene.e,
    translateY: scene.endY,
    opacity: 1,
    duration: scene.duration,
    easing: "easeInQuad",
    complete: function () {
      anime({
        targets: scene.e,
        translateY: scene.endY,
        opacity: 0,
        duration: 2000,
        easing: "easeInQuad",
        complete: function () {
          scene.e.classList.add('hide')
        }


      });
    }

  });

}


function dialog(options) {
  try {
    document.getElementById('message').data('typed', null)
  } catch {

  }
  var dialogContainer = document.getElementById('dialogDiv')
  var textBox = document.querySelector('.textBox')
  textBox.style.transform = "translateY(500px)"
  dialogContainer.classList.remove('hide')
  textBox.style.opacity = "0"
  anime({
    targets: ".textBox",
    opacity: 1,
    translateY: "0px",
    easing: "easeInQuad",
    duration: 1000

  })


  var text = []
  var title = []
  options.unshift({
    title: "",
    text: ""
  })
  options.forEach(function (dia) {
    text.push(dia.text)
    title.push(dia.title)
  })



  var optionText = {
    strings: text,
    typeSpeed: 40,
    fadeOut: true,
    showCursor: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
    onComplete: function (self) {

      sfx.blip.stop()
    },
    onStringTyped: function (self) {
      sfx.blip.stop()
    },
    preStringTyped: function (self) {
      sfx.blip.play()
      app.talkLog.push({
        title: title[self],
        text: text[self]
      })
      app.dialogTitle = title[self]
    },
    onComplete: function (self) {
      setTimeout(function () {
        anime({
          targets: ".textBox",
          opacity: 1,
          translateY: "500px",
          easing: "easeInQuad",
          duration: 1000

        })
        setTimeout(function () {
          dialogContainer.classList.add('hide')

          if (options[options.length - 1].callback !== undefined) {
            if (options[options.length - 1].param !== undefined) {
              options[options.length - 1].callback(options[options.length - 1].param)
            } else {
              options[options.length - 1].callback()
            }

          }
        }, 1500)
      }, 1000)


    }

  };
  setTimeout(function () {
    var typed = new Typed('#message', optionText);
  }, 1500)
}

function addClue(clue) {
  app.clues.push(clue)
  sfx.lvlUp.play()
  openModal("New Clue!", "You have uncovered a clue surrounding Jun's death and you can now use it in conversations")
}

function editClue(clue, pos) {
  app.clues[pos] = clue
  sfx.lvlUp.play()
  openModal("New Clue!", "You have uncovered a clue surrounding Jun's death and you can now use it in conversations")
}

function getClue(getclue) {
  var found = null
  app.clues.forEach(function (clue, i) {
    if (clue == getclue) {
      found = i
    }
    if (i == app.actions.length - 1) {
      found = undefined
    }
  })
  return found;
}

function removeAction(action) {
  var pos = null
  app.actions.forEach(function (act, i) {
    if (act == action) {
      pos = i
    }
    if (i == app.actions.length - 1) {
      app.actions.splice(pos, 1);
    }
  })
}

function openModal(title, text) {
  app.modal.title = title
  app.modal.text = text
  $('#modal').modal('show');
}

function saveGame() {
  var save = {
    gameState: gameState,
    contacts: app.contacts,
    clues: app.clues,
    actions:app.actions,
    bg: document.getElementById('application').style.backgroundImage

  }
  localStorage.setItem("save", JSON.stringify(save))
  openModal("Game Saved", "You can load the save from the main menu")
}
