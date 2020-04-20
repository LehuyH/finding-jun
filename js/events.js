var eventStore = {
    gracePhone: false,
    firstClue: function(){
        addClue("Jun has died")
        app.contacts.push("Dad")
        app.tutorial = "There's something off about this. Maybe I should try talking to your dad about this.. Check your contacts"
    },
    tutorialPrt2 : function(){
        if(gameState == 0){
            gameState++
        app.contacts.push("Sister")
        app.contacts.push("Mom")
        app.tutorial = "Dad doesn't want to talk. Maybe I should talk to someone else"
        }
    },
    tutorialPrt3 : function(){
        if(gameState == 1){
            gameState++
            dialog(dialogStore.research)
        }
    },
    knowsPhone:function(){
        eventStore.gracePhone = true
    },
    tutorialPrt4 : function(){
        if(gameState == 2){
            gameState++
            app.follow.push("GISING NA PH!")
            app.contacts.push("???")
            anime({
                targets: "#game",
                opacity: 0,
                duration:  2000,
                easing: "easeInQuad",
                complete: function (){
                    document.getElementById("game").classList.add('hide')
                    music.unsolved.fade(1,0,5000)
                    textScene(scenes.intro,"Let Me Go")
                    setTimeout(function(){
                        app.tutorial = "Now that I'm with Jun's family. I should see what info I can find"
                        document.getElementById("application").style.backgroundImage = "url('https://images.unsplash.com/photo-1526731955462-f6085f39e742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80)"
                        document.getElementById("game").classList.remove("hide")
                        document.getElementById("game").style.opacity = 0
                        anime({
                            targets: "#game",
                            opacity: 1,
                            duration:  2000,
                            easing: "easeInQuad",
                           
                           
                          });
                          app.contacts.push("Angel")
                          app.contacts.push("Grace")
                          app.contacts.push("Tita Ami")
                        music.time.play()
                        music.time.fade(0,1,5000)
                        dialog(dialogStore.goingToPhilippines)
                        setTimeout(function(){
                            $('#modal').modal('hide');
                        },1000)
        
        
        
                      
                    },5000)
                }
               
               
              });
            gameState++
            editClue("Jun was shot by the police for doing or selling drugs", 0)
        }
    },
    arrive: function(){
        app.actions.push("Sleep")
        app.actions.push("Check Jun's Room")
    },
    removeAction : function(action){
        var pos = null
        app.actions.forEach(function(act,i){
            if(act == action){
                pos = i
            }
            if(i == app.actions.length - 1){
                app.actions.splice(pos, 1);
            }
        })
    },
    dayTwoPhil: function(){
        app.tutorial = "What else can I do to get info?"
        removeAction("Sleep")
            dialog(dialogStore.day2)
         
    },
    addCheckManing: function(){
        app.actions.push("Check Tito Maning's room")
        app.actions.push("Eat Breakfast")
    },
    checkTitoRoom: function(){
        removeAction("Check Tito Maning's room")
        addClue("Blurry image found in Tito Maning's room")
    },
    gracePhoneDia:function(){
        removeAction("Eat Breakfast")
        if(this.gracePhone){
            dialog(dialogStore.SUVIF)
        }else{
            dialog(dialogStore.SUV)
        }
    },
    continueSuv:function(){
        dialog(dialogStore.SUV)
    },
    goToMall: function(){
        gameState = 6
        anime({
            targets: "#game",
            opacity: 0,
            duration:  2000,
            easing: "easeInQuad",
            complete: function (){
                document.getElementById("game").classList.add('hide')
                music.time.fade(1,0,5000)
                setTimeout(function(){
                    app.tutorial = "I should talk to Mia"
                    document.getElementById("application").style.backgroundImage = "url('https://arquitectonica.com/architecture/wp-content/uploads/sites/2/2018/07/SM_Mall_of_Asia_and_Bay_City_District_Plan_3_ft-1920x1080.jpg')"
                    document.getElementById("game").classList.remove("hide")
                    document.getElementById("game").style.opacity = 0
                    anime({
                        targets: "#game",
                        opacity: 1,
                        duration:  2000,
                        easing: "easeInQuad",
                       
                       
                      });
                      app.contacts = []
                      app.actions = []
                    music.mall.play()
                    music.mall.fade(0,0.4,5000)
                    dialog(dialogStore.atMall)
                    setTimeout(function(){
                        $('#modal').modal('hide');
                    },1000)
    
    
    
                  
                },5000)
            }
           
           
          });
      
    },
    addMia: function(){
        app.contacts.push("Mia")
        app.actions.push("Go to the laser tag arena")
    },
    addRunClue:function(){
        if(gameState == 6){
            gameState++
        addClue("Jun ran away from home")
        }

    },
    updateNoteClue:function(){
        editClue("Jun was on a list of drug dealers",getClue("Blurry image found in Tito Maning's room"))
    },
    goBack :function(){
        app.tutorial = "I should try to talk directly talking to Tito Maning when I have the chance"
        gameState = 8
        anime({
            targets: "#game",
            opacity: 0,
            duration:  2000,
            easing: "easeInQuad",
            complete: function (){
                document.getElementById("game").classList.add('hide')
                music.mall.fade(1,0,5000)
                setTimeout(function(){
                    document.getElementById("application").style.backgroundImage = "url('https://images.unsplash.com/photo-1526731955462-f6085f39e742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80')"
                    document.getElementById("game").classList.remove("hide")
                    document.getElementById("game").style.opacity = 0
                    anime({
                        targets: "#game",
                        opacity: 1,
                        duration:  2000,
                        easing: "easeInQuad",
                       
                       
                      });
                      app.contacts = ["Dad","Mom","Sister","Grace","Angel","Tita Ami"]
                      app.actions = []
                    music.time.fade(0,1,5000)
                    dialog(dialogStore.goBack)
                    setTimeout(function(){
                        $('#modal').modal('hide');
                    },1000)
    
    
    
                  
                },5000)
            }
           
           
          });
    },
    goToMass : function(){
        gameState = 10
        anime({
            targets: "#game",
            opacity: 0,
            duration:  2000,
            easing: "easeInQuad",
            complete: function (){
                document.getElementById("game").classList.add('hide')
                music.time.fade(1,0,5000)
                setTimeout(function(){
                    document.getElementById("application").style.backgroundImage = "url('https://images.unsplash.com/photo-1507643179773-3e975d7ac515?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"
                    document.getElementById("game").classList.remove("hide")
                    document.getElementById("game").style.opacity = 0
                    anime({
                        targets: "#game",
                        opacity: 1,
                        duration:  2000,
                        easing: "easeInQuad",
                       
                       
                      });
                      app.contacts = ["Tito Maning"]
                      app.actions = ["Ask what happened to Jun"]
                    music.discovery.play()
                    music.discovery.fade(0,1,5000)
                    dialog(dialogStore.afterMass)
                    setTimeout(function(){
                        $('#modal').modal('hide');
                    },1000)
    
    
    
                  
                },5000)
            }
           
           
          });
    },
    kickOut: function(){
        gameState = 14
        anime({
            targets: "#game",
            opacity: 0,
            duration:  2000,
            easing: "easeInQuad",
            complete: function (){
                document.getElementById("game").classList.add('hide')
                music.discovery.fade(1,0,5000)
                textScene(scenes.intro,"Kicked Out")
                setTimeout(function(){
                    app.tutorial = "Tita Chato and Tita Ines might know things about Jun"
                    document.getElementById("application").style.backgroundImage = "url('https://images.unsplash.com/photo-1566673495363-e3870c068b61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"
                    document.getElementById("game").classList.remove("hide")
                    document.getElementById("game").style.opacity = 0
                    anime({
                        targets: "#game",
                        opacity: 1,
                        duration:  2000,
                        easing: "easeInQuad",
                       
                       
                      });
                      app.contacts = ["Mia","Tita Chato","Tita Ines"]
                      removeAction("Ask what happened to Jun")
                      app.actions = []
                    music.mimos.play()
                    music.mimos.fade(0,0.4,5000)
                    dialog(dialogStore.afterKick)
                    setTimeout(function(){
                        $('#modal').modal('hide');
                    },1000)
    
    
    
                  
                },5000)
            }
           
           
          });
    
    }
}











