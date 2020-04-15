//Setup menu interaction

newGamebtn = document.getElementById('newGame')
manageSavesbtn = document.getElementById('manageSaves')

var scenes = {
    intro: {
        e: document.getElementById("introduction"),
        transform: "translateY(800px)",
        endY: 300,
        duration: 2000,
        audio: sfx.transition
    
        }
}


newGamebtn.addEventListener('click', ()=>{
    anime({
        targets: '#mainMenu',
        translateY: 500,
        opacity: 0,
        duration: 2000,
        complete: function() {
            document.getElementById("mainMenu").classList.add("hide")
            playScene(scenes.intro)
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
                duration:  scene.duration,
                easing: "easeInQuad",
                complete: function() {
                    scene.e.style.classList.add('hide')
                }
                
               
              });
        }
       
      });
    
}


function dialog(options){
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
        preStringTyped: function(self) { sfx.blip.play()},
      
   };
   var typed = new Typed('#message', optionText);

}

