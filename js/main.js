//Setup
var app = new Vue({
    el: '#application',
    data: {
        dialogTitle: '',
        follow: [],
        contacts: [
          
          ],
        talkLog:[],
        page: "none"
    },
    methods: {
        say: function (message) {
          alert(message)
        }
      }
  })


//Setup menu interaction

newGamebtn = document.getElementById('newGame')
manageSavesbtn = document.getElementById('manageSaves')
tutorialbtn = document.getElementById('tutorial')

var scenes = {
    intro: {
        e: document.getElementById("introduction"),
        transform: "translateY(800px)",
        endY: 300,
        duration: 2000,
        audio: sfx.transition
    
        }
}

//Menu click events
newGamebtn.addEventListener('click', ()=>{
    anime({
        targets: '#mainMenu',
        translateY: 500,
        opacity: 0,
        duration: 2000,
        complete: function() {
            document.getElementById("mainMenu").classList.add("hide")
            document.getElementById("application").style.backgroundImage = "url('https://images.unsplash.com/photo-1520473323060-f6f50760c35b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1405&q=80')"
            setTimeout(function(){
                document.getElementById("game").classList.remove("hide")
                document.getElementById("game").style.opacity = 0
                anime({
                    targets: "#game",
                    opacity: 1,
                    duration:  2000,
                    easing: "easeInQuad",
                   
                   
                  });
                music.unsolved.play()
                music.unsolved.fade(0,1,5000)
                dialog(dialogStore.intro)



              
            },5000)
            playScene(scenes.intro)
           
            
          }
      });
})

tutorialbtn.addEventListener('click', ()=>{
    anime({
        targets: '#mainMenu',
        translateY: 500,
        opacity: 0,
        duration: 2000,
        complete: function() {
            document.getElementById("mainMenu").classList.add("hide")
            sfx.lvlUp.play()
                document.getElementById("application").style.backgroundColor = "#34495e"
                dialog(dialogStore.tutorial)

           
            
          }
      });
})




function playScene(scene){
    scene.audio.play()
    scene.e.classList.remove("hide")
    scene.e.style.transform = scene.transform
    
    scene.e.style.opacity = 0

    anime({
        targets: scene.e,
        translateY: scene.endY,
        opacity: 1,
        duration:  scene.duration,
        easing: "easeInQuad",
        complete: function() {
            anime({
                targets: scene.e,
                translateY: scene.endY,
                opacity: 0,
                duration:  2000,
                easing: "easeInQuad",
                complete: function() {
                    scene.e.classList.add('hide')
                }
                
               
              });
        }
       
      });
    
}


function dialog(options){
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
        duration:  1000
      
    })
    

    var text = []
    var title = []
    
   options.forEach(function(dia){
       text.push(dia.text)
       title.push(dia.title)
   })
 
    var optionText = {
        strings:text,
       typeSpeed: 40,
       fadeOut: true,
       showCursor: false,
       fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500,
        onComplete: function(self) { 
            
            sfx.blip.stop() 
        },
        onStringTyped: function(self) { sfx.blip.stop() },
        preStringTyped: function(self) { 
            sfx.blip.play() 
            app.talkLog.push({title:title[self],text:text[self]})
            app.dialogTitle = title[self]},
        onComplete: function(self){
              setTimeout(function(){
                anime({
                    targets: ".textBox",
                    opacity: 1,
                    translateY: "500px",
                    easing: "easeInQuad",
                    duration:  1000
                  
                })
                setTimeout(function(){
                    dialogContainer.classList.add('hide')
                },1500)
              },1000)


        }
      
   };
   setTimeout(function(){
   var typed = new Typed('#message', optionText);
    },1500)
}

