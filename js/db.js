var gameState = 0;
var dialogStore = {
  tutorial: [{
    title: "",
    text: "Saturday"



  }, ],
  intro: [{
      title: "",
      text: "Saturday"



    },
    {
      title: "",
      text: "It's the first day of spring break"



    },
    {
      title: "",
      text: "and it's the last year of highschool for me."



    },
    {
      title: "",
      text: "I don't have anything planned out for today."
    },
    {
      title: "",
      text: "Maybe I will play some video games"
    },
    {
      title: "",
      text: "..."
    },
    {
      title: "",
      text: "...."
    },
    {
      title: "Dad",
      text: "Jason, can you pause your game for a second?"
    },
    {
      title: "Jay",
      text: "I'm almost at a checkpoint"
    },
    {
      title: "Dad",
      text: "Jason..."
    },
    {
      title: "Dad",
      text: "Jason I have something important to tell you."
    },
    {
      title: "Jay",
      text: "Hold on"
    },
    {
      title: "Dad",
      text: "Jay"
    },
    {
      title: "Jay",
      text: "YES!"
    },
    {
      title: "Dad",
      text: "...."
    },
    {
      title: "Dad",
      text: "Your Tito Maning called."
    },
    {
      title: "Dad",
      text: "Jun Is Dead."
    },
    {
      title: "",
      text: "....."
    },
    {
      title: "Jay",
      text: "That's Impossible"
    },
    {
      title: "Dad",
      text: "I thought that you would want to know"
    },
    {
      title: "Jay",
      text: "When?"
    },
    {
      title: "Dad",
      text: "Yesterday"
    },
    {
      title: "Jay",
      text: "What happened? I mean, how did he.."
    },
    {
      title: "Dad",
      text: "It doesn't matter"
    },
    {
      title: "Jay",
      text: "What? Why not?"
    },
    {
      title: "Dad",
      text: "He's gone. That's it"
    },
    {
      title: "Jay",
      text: "He was seventeen, seventeen-year-olds don't randomly.."
    },
    {
      title: "Dad",
      text: "Sometimes they do"
    },
    {
      title: "Jay",
      text: "So it was random? Like a car accident or something?"
    },
    {
      title: "Dad",
      text: "What would it change if you knew?"
    },
    {
      title: "Dad",
      text: "He's gone, That's it"
    },
    {
      title: "Jay",
      text: "Will we make it in time for a funeral?"
    },
    {
      title: "Dad",
      text: "There won't be one."
    },
    {
      title: "Jay",
      text: "Why not?"
    },
    {
      title: "Dad",
      text: "Your Tito Maning doesn't want to have on. The way he died ... it wasn't ... it's not our concern"
    },
    {
      title: "Jay",
      text: "What do you mean?"
    },
    {
      title: "",
      text: "Dad just shook his head and left.",
      callback: eventStore.firstClue
    }


  ],
  research: [{
      title: "",
      text: "I spend the rest of the day researching more about this drug war."
    },
    {
      title: "",
      text: "I read articles, watch videos, and social media posts on the topic."
    },
    {
      title: "",
      text: "What hits the hardest though, are the pictures."
    },
    {
      title: "",
      text: "There is this one account named GISING NA PH! with posts of photos of people holding pictures of loved ones that were killed by the police."
    },
    {
      title: "",
      text: "...."
    },
    {
      title: "",
      text: "I received a message from someone from the Philippines"
    },
    {
      title: "",
      text: "I don't know this person, I guess I will just block them."
    },
    {
      title: "???",
      text: "(Photo Of Jun)"
    },
    {
      title: "",
      text: "What the.."
    },
    {
      title: "Jay",
      text: "Where did you get this???"
    },
    {
      title: "???",
      text: "This is your cousin, no? Manuel Reguero?"
    },
    {
      title: "Jay",
      text: "Who are you?? ^1000 WHERE DID YOU GET THIS?"
    },
    {
      title: "???",
      text: "Manuel do not deserve to die, he did nothing wrong"
    },
    {
      title: "Jay",
      text: "How do you know??? Who are you???"
    },
    {
      title: "???",
      text: "I was his friend"
    },
    {
      title: "",
      text: "There is no further response",
      callback: eventStore.tutorialPrt4
    }



  ],
  goingToPhilippines: [{
      title: "",
      text: " This is a sign. There has to be more about Jun"
    },
    {
      title: "",
      text: " I need to go to the Philippines and try to clear his name"
    },
    {
      title: "",
      text: " After finally convincing my parents to let me go, I hop onto a plane to spend the rest of the break in the Philippines "
    },
    {
      title: "",
      text: " …"
    },
    {
      title: "",
      text: " When I arrived at the airport, someone was already waiting for me"
    },
    {
      title: "",
      text: " He took my bags and went to the car. That’s when I recognized Tita Ami"
    },
    {
      title: "Tita Ami",
      text: " Get in, Tomas will take your things"
    },
    {
      title: "Tomas",
      text: " Hello sir! I am Tomas! Sir Jay, you speak Tagalog, sir?"
    },
    {
      title: "Jay",
      text: " No. Sorry."
    },
    {
      title: "Angel",
      text: " Hi, Kuya!"
    },
    {
      title: "",
      text: " I turn around and I see my two cousins. Angel and Grace"
    },
    {
      title: "",
      text: " Grace looks up and nods then go back to the book she’s reading."
    },
    {
      title: "Tomas",
      text: " You were last here how long ago, sir Jay?"
    },
    {
      title: "Jay",
      text: " About eight years"
    },
    {
      title: "Tomas",
      text: " that is a long time to be away from home, sir"
    },
    {
      title: "Tita Ami",
      text: " this isn't his home "
    },
    {
      title: "Tomas",
      text: " It is in your blood, di ba?"
    },
    {
      title: "Tita Ami",
      text: " It looks we have arrived."
    },
    {
      title: "Tita Ami",
      text: " Our barangay. Do you remember all of this?"
    },
    {
      title: "Jay",
      text: " Just a bit"
    },
    {
      title: "Tita Ami",
      text: " We will give you a tour of the house now. Then you can sleep. We will eat once you wake."
    },
    {
      title: "Tita Ami",
      text: "Tito Manning is at work right now. Let us know if you need anything"
    },
    {
      title: "Jay",
      text: " Thanks",
      callback: eventStore.arrive
    }
  ],
  day2: [{
      title: "",
      text: " After dinner, we all head to bed."
    },
    {
      title: "",
      text: "......."
    },
    {
      title: "",
      text: " The next day, the sounds of the rooster wake me up."
    },
    {
      title: "Tito Maning",
      text: " Let us know when you finish your breakfast, then we will do some historical sightseeing"
    },
    {
      title: "Jay",
      text: " Ok, thanks",
      callback: eventStore.addCheckManing
    }

  ],
  SUVIF: [{
      title: "",
      text: " Wait what? A Phone"
    },
    {
      title: "Jay",
      text: " Grace, I thought you said you didn’t have a phone-"
    },
    {
      title: "",
      text: " She raises her eyes to me, waiting for my reaction"
    },
    {
      title: "Jay",
      text: " I won’t tell anyone"
    },
    {
      title: "Grace",
      text: " Good",
      callback: eventStore.continueSuv
    }

  ],
  SUV: [{
      title: "Tomas",
      text: " We are here, I will see you two later."
    },
    {
      title: "",
      text: " Grace and I walk past the monuments"
    },
    {
      title: "Jay",
      text: " Are we going to Intramuros?"
    },
    {
      title: "Grace",
      text: " We are not."
    },
    {
      title: "Jay",
      text: " Where are we going?"
    },
    {
      title: "Grace",
      text: " The mall"
    },
    {
      title: "Jay",
      text: " The mall? Why?"
    },
    {
      title: "Grace",
      text: " To meet someone"
    },
    {
      title: "Jay",
      text: " Who?"
    },
    {
      title: "Grace",
      text: " You ask so many questions",
      callback: eventStore.goToMall
    }
  ],
  atMall: [{
      title: "",
      text: " when we reach the second floor, there are two girls standing there waving at us."
    },
    {
      title: "",
      text: " sisters, I'd guess. Around our age."
    },
    {
      title: "",
      text: " the taller one has straight black hair with stylish bangs and is wearing glasses"
    },
    {
      title: "",
      text: " the shorter girl is in all black and has one of those hairstyles where one side of her head is shaved close to the scalp"
    },
    {
      title: "",
      text: " Grace hugs them and introduces me."
    },
    {
      title: "",
      text: " She points to the shorter girl"
    },
    {
      title: "Grace",
      text: " That’s Mia"
    },
    {
      title: "",
      text: " Now to the taller one"
    },
    {
      title: "Grace",
      text: " That’s Jessa."
    },
    {
      title: "",
      text: " They start talking in Tagalog and begin to laugh"
    },
    {
      title: "Grace",
      text: " Ok we will meet you two here back at four"
    },
    {
      title: "Jay",
      text: " You two?"
    },
    {
      title: "",
      text: " Grace draws a line connecting Mia and me"
    },
    {
      title: "Jay",
      text: " But I was hoping that we could catch up today"
    },
    {
      title: "Mia",
      text: " I’m not as boring as I look you know"
    },
    {
      title: "Grace",
      text: " We will talk later, Kuya"
    },
    {
      title: "Jay",
      text: " Fine. Have fun"
    },
    {
      title: "Mia",
      text: " Do you like laser tag?"
    },
    {
      title: "Jay",
      text: " is there seriously a laser tag arena here?"
    },
    {
      title: "Mia",
      text: " Yep!"
    },
    {
      title: "Jay",
      text: " Lead the way"
    },
    {
      title: "",
      text: " Mia begins walking and I follow her"
    },
    {
      title: "",
      text: " She seems to be close to Grace"
    },
    {
      title: "",
      text: " Maybe I could ask her about Jun before we go to the arena",
      callback: eventStore.addMia
    }

  ],
  goBack: [{
      title: "",
      text: " when we got back, Tito Maning asks about what we learned."
    },
    {
      title: "",
      text: " mia makes up an elaborate fiction about an hour day walking around and seeing all the monuments"
    },
    {
      title: "Tito Maning",
      text: " What did you think, Jason?"
    },
    {
      title: "Jay",
      text: " it was cool"
    },
    {
      title: "Tito Maning",
      text: " Cool?"
    },
    {
      title: "Jay",
      text: " Powerful"
    },
    {
      title: "",
      text: " he stares at me for a few seconds. Thankfully he looks away and begins to address the table"
    },
    {
      title: "Tito Maning",
      text: " tomorrow after mass we will go to Malacañang Palace and the National Museums"
    },
    {
      title: "",
      text: " After dinner, the day begins to wind down and we all head to bed."
    },
    {
      title: "",
      text: "..."
    },
    {
      title: "",
      text: "I wake up to the sounds of everyone preparing for mass.",
      callback: eventStore.goToMass
    }
  ],
  afterMass:[{title:"",text:" After mass, Tito Maning becomes a tour guide and drives us to may places"},
  {title:"Tito Maning",text:" That is where the president lives"},
  {title:"Tito Maning",text:" He is a great man you know?"},
  {title:"Tita Ami",text:" He awarded your tito a medal just last month for the excellent work he is doing to protect the country from drugs"},
  {title:"",text:" Tito Maning goes on to explain the history of the palace"},
  {title:"",text:" We stop in front of the National Museum of the Philippines"},
  {title:"Tita Ami",text:" You go in with Jason, and I will take the girls with me. I need their help."},
  {title:"Tita Ami",text:" They can come back here another day"},
  {title:"Tito Maning",text:" Very well. Come, Nephew, follow me"},
  {title:"Jay",text:"   How much is the entrance fee? "},
  {title:"Tito Maning",text:" Nothing. All national museums are free"},
  {title:"Jay",text:" Really? That’s cool. In the US it’s like thirty dollars to get into one of these  "},
  {title:"Tito Maning",text:" You can thank President Duterte. He understands the value of history"}
  ],
  afterKick:[{title:"",text:" I get a text from Mia"},
  {title:"Mia",text:" Did you ask your Tito about Jun?"},
  {title:"Jay",text:" Yes I did, then he kicked me out. I'm staying with Chato now"},
  {title:"Mia",text:" No wonder Grace never told him about me or Jessa"},
  {title:"Mia",text:" At least we will be closer now ;)"},
  {title:"Jay",text:" what do you mean?"},
  {title:"Mia",text:" remember I told that you that your tita lives in my village? "},
  {title:"Jay",text:" Right"},
  {title:"Mia",text:" Let me know if you found anything about Jun tomorrow"},
  {title:"Mia",text:" Magandang gabi! (That means g'night) ;)"},
  {title:"Jay",text:" Magandang gabi, Mia"},
  ],
  dayTwo:[
    {title:"",text:" It's getting late and I should head to bed"},
{title:"",text:" …"},
{title:"",text:" I wake up early the next morning long before the alarm I set because my brain hates me"},
{title:"",text:" Tita Chato and Tita Ines are in the kitchen making breakfast."},
{title:"Tita Chato",text:" How did you sleep?"},
{title:"Jay",text:" alright"},
{title:"Tita Chato",text:" Not to hot?"},
{title:"Jay",text:" No"},
{title:"Tita Ines",text:"breakfast will be ready soon!"},
{title:"Tita Chato",text:" I feel bad for not being able to stay here with you. Tomorrow I will try to take a day off and spend some time with you."},
{title:"Tita Ines",text:" Me too"},
{title:"",text:" after we eat breakfast and Chato and Ines leaves for work someone rings your doorbell"},
{title:"",text:" I open the door in the understanding there"},
{title:"Jay",text:" Ah, ready to go to the bookstore?"},
{title:"Mia",text:" no need. I looked up the owner's name, found his number, and called him this morning."},
{title:"Mia",text:" apparently, Jun was one of his best customers. Used to special order hard to find books off a Time that would be very difficult for the guy to track down."},
{title:"Mia",text:" but he was glad to do it for someone who love the written word so much. He said to tell you he was sorry to hear about his death"},
{title:"Jay",text:" I don't suppose he knows where Jun went after he left my aunts house"},
{title:"Mia",text:" he didn't know about that. But he gave me the last address where he mailed a book and it wasn't your tita Chato's house."},
{title:"Jay",text:" are you serious?"},
{title:"Mia",text:" Yep"},
{title:"Mia",text:" I don't know if there's some mistake, maybe? The address he gave me is in the slums"},
{title:"Mia",text:" I called one of my professors who does a lot of reporting in that area, and we're going to meet up with him so he can help us find that place safely."},
{title:"Jay",text:" we really need a guy?"},
{title:"Mia",text:" yes"},
{title:"Mia",text:" oh and before you go there's one more thing. Before I hung up the bookstore owner asked if Jun's dead, who's been updating the site?"},
{title:"Jay",text:" what site?"},
{title:"Mia",text:" that's what I asked. But he became very nervous. Mumbled something about it being a mistake, said goodbye quickly, and then hung up."},
{title:"Jay",text:" so he ran a website?"},
{title:"Mia",text:" it seems like it. Now, ready to go to the address he gave us?"},
{title:"Jay",text:" let's do it.",callback:eventStore.fin}

  ],


  //Contacts
  Dad: {
    state: 0, // Stores what they will say
    dialog: {
      //0
      0: [

        {
          title: "Dad",
          text: "..."
        },
        {
          title: "",
          text: "It doesn't look like he is in the mood to talk"
        }
      ],
      4: [{
          title: "",
          text: "I pick up my phone and begin to call him"
        },
        {
          title: "Jay",
          text: "I made it"
        },
        {
          title: "Dad",
          text: "Please don't cause any trouble while you are there."
        }
      ],

      "Jun has died": [{
          title: "Jay",
          text: "What happpened to Jun? ^500 Dad? Please tell me"
        },
        {
          title: "Dad",
          text: "....",
          callback: eventStore.tutorialPrt2
        }
      ],
      "Jun was shot by the police for doing or selling drugs": [{
        title: "",
        text: "He already knows this"
      }, ],
      "Blurry image found in Tito Maning's room": [{
        title: "",
        text: "I don't know what the note is, so there's no point in showing it."
      }],
      "Jun was on a list of drug dealers": [{
        title: "",
        text: "I pick up my phone and begin to call him"
      },{
          title: "Jay",
          text: " Hey Dad, I found something about Jun"
        },
        {
          title: "Jay",
          text: " He was on a list of drug dealers"
        },
        {
          title: "Dad",
          text: " Drug dealers? Wait"
        },
        {
          title: "Dad",
          text: " Jay I told you to not cause any trouble! Where did you get this list"
        },
        {
          title: "Jay",
          text: " I just wanted to let you know. "
        },
        {
          title: "Dad",
          text: " Ok. Just ... don't do anything hasty"
        }

      ],
      "Jun ran away from home": [{
        title: "",
        text: "I pick up my phone and begin to call him"
      },{
          title: "Jay",
          text: " Hey Dad, do you know why Jun ran away from home?"
        },
        {
          title: "Dad",
          text: "It's none of your business"
        }

      ],


    }

  },
  Sister: {
    state: 0, // Stores what they will say
    dialog: {
      //0
      0: [{
          title: "",
          text: "I pick up my phone and begin to call her"
        },
        {
          title: "Em",
          text: "Hi, baby brother!"
        },
        {
          title: "Jay",
          text: "Hi Em. How's it going?"
        }
      ],
      //IN philippines
      4: [{
          title: "",
          text: "I pick up my phone and begin to call her"
        },
        {
          title: "Em",
          text: "Hi, baby brother!"
        },
        {
          title: "Jay",
          text: "Hi Em. I'm in the Philippines!"
        },
        {
          title: "Em",
          text: "With who?"
        },
        {
          title: "Jay",
          text: "Just myself. I am visting Tito Manning's family"
        },
        {
          title: "Em",
          text: "Say hi to Angel for me!"
        },
      ],
      "Jun has died": [{
          title: "",
          text: "I pick up my phone and begin to call her"
        },
        {
          title: "Em",
          text: "Hi, baby brother!"
        },
        {
          title: "Jay",
          text: "Hi Em..."
        },
        {
          title: "Em",
          text: "What's up?"
        },
        {
          title: "Jay",
          text: "Um ^500 Did you hear?"
        },
        {
          title: "Em",
          text: "Did you finally get accepted into a college?"
        },
        {
          title: "Jay",
          text: "No ^500 I mean yeah but that's not why I'm calling"
        },
        {
          title: "Em",
          text: "Oh?"
        },
        {
          title: "Jay",
          text: "Jun Is dead"
        },
        {
          title: "",
          text: "..."
        },
        {
          title: "",
          text: "...."
        },
        {
          title: "Em",
          text: "Wait ^1000 is that one of those rappers you're into?"
        },
        {
          title: "Jay",
          text: "What? ^500 no"
        },
        {
          title: "Jay",
          text: "Our cousin Jun. Tito Maning's son?"
        },
        {
          title: "Em",
          text: "The one who lives in the UAE?"
        },
        {
          title: "Jay",
          text: "No, that's prince. He's like, twelve. Jun is ^500 was my age."
        },
        {
          title: "Em",
          text: "...."
        },
        {
          title: "Jay",
          text: "The one who ran away from home?"
        },
        {
          title: "Em",
          text: "Oh yeah ^1000 Sorry, I'm hungover. ^2000 Well, that sucks man."
        },
        {
          title: "Jay",
          text: "Yeah. It does"
        },
        {
          title: "Em",
          text: "You were pen pal or something, yeah?"
        },
        {
          title: "Jay",
          text: "Yeah. We were"
        },
        {
          title: "Em",
          text: "So what happened?"
        },
        {
          title: "Jay",
          text: "I don't know. Dad wouldn't tell me"
        },
        {
          title: "Em",
          text: "I bet it was suicide, you know some Catholics are weird about that."
        },
        {
          title: "Jay",
          text: "Maybe you're right, but it's not a joke okay?"
        },
        {
          title: "Em",
          text: "Chill. Didn't say it was, baby bro. ^500 Just trying to help"
        },
        {
          title: "Jay",
          text: "Great. Thank you. I feel sooo helped."
        },
        {
          title: "Em",
          text: "Don't be a dick. You called me."
        },
        {
          title: "Em",
          text: "Whatever. Anyway, you're going to love college, dude. It's like, infinitely better than high school. Nobody force you to go to class and-"
        },
        {
          title: "Jay",
          text: "I've got to go, Em. Sorry, I woke you up. I'll let you go back to sleep."
        },
        {
          title: "Em",
          text: "Thanks for telling me about Jun. ^1000 I guess."
        },
        {
          title: "Jay",
          text: "Yeah."
        },
        {
          title: "Em",
          text: "Take care, baby brother ... and I'm sorry this happened."
        },
      ],
      "Jun was shot by the police for doing or selling drugs": [{
          title: "",
          text: "I pick up my phone and begin to call her"
        },
        {
          title: "Em",
          text: "Hi, baby brother!"
        },
        {
          title: "Jay",
          text: "Hi Em."
        },
        {
          title: "Em",
          text: "What do you need?"
        },
        {
          title: "Jay",
          text: "I learned more about Jun.. he was shot by the police"
        },
        {
          title: "Em",
          text: "Oh? I see."
        }
      ],
      "Blurry image found in Tito Maning's room": [{
        title: "",
        text: "I don't know what the note is, so there's no point in showing it."
      }],
      "Jun was on a list of drug dealers": [{
        title: "",
        text: "I pick up my phone and begin to call her"
      },{
        title: "Jay",
        text: " Hey Em, I found something about Jun"
      },
      {
        title: "Jay",
        text: " He was on a list of drug dealers"
      },
      {
        title: "Em",
        text: "So does that mean he was..."
      },
      {
        title: "Jay",
        text: "I don't know why he's on the list. But the Jun I know would never do such a thing"
      },
      {
        title: "Em",
        text: "I believe you too"
      },


      ],
      "Jun ran away from home": [{
        title: "",
        text: "I pick up my phone and begin to call her"
      },{
          title: "Jay",
          text: " Hey Em, do you know why Jun ran away from home?"
        },
        {
          title: "Em",
          text: "I don't remember"
        }

      ],


    }

  },
  Mom: {
    state: 0, // Stores what they will say
    //IN philippines

    dialog: {
      //0
      0: [{
          title: "Mom",
          text: "Congrats on finally getting accepted into a college!"
        },
        {
          title: "Jay",
          text: "Thanks"
        },
      ],
      4: [{
          title: "",
          text: "I pick up my phone and begin to call her"
        },
        {
          title: "Jay",
          text: "I made it"
        },
        {
          title: "Mom",
          text: "Ok, let me know if you need anything. Have fun!"
        }
      ],
      "Jun has died": [{
          title: "Jay",
          text: "Hey, Mom"
        },
        {
          title: "Mom",
          text: "I'm so sorry about Jun"
        },
        {
          title: "Mom",
          text: "I know you two were close if I could have I would have been here sooner"
        },
        {
          title: "Mom",
          text: "How are you holding up?"
        },
        {
          title: "Jay",
          text: "Fine, why aren't they giving him a funeral"
        },
        {
          title: "Mom",
          text: "You know how your uncle is"
        },
        {
          title: "Jay",
          text: "Yeah but"
        },
        {
          title: "Mom",
          text: "His family doesn't want to talk about it we should respect that."
        },
        {
          title: "Jay",
          text: "You know the reason, don't you? You can tell me. I'm not a kid anymore."
        },
        {
          title: "Jay",
          text: "So we're just going to act like this didn't happen? Like jun didn't even exist?"
        },
        {
          title: "Mom",
          text: "You're not going to let this go, are you?"
        },
        {
          title: "Jay",
          text: "No"
        },
        {
          title: "Mom",
          text: "Just like your father…"
        },
        {
          title: "Mom",
          text: "It's not going to do anything for you, except cause you more pain."
        },
        {
          title: "Jay",
          text: "I know."
        },
        {
          title: "Mom",
          text: "Do you know what shabu is?"
        },
        {
          title: "Jay",
          text: "Shabu?"
        },
        {
          title: "Mom",
          text: "It's what they call meth in the Philippines. a cheap high. Easy to find. Devastating."
        },
        {
          title: "Jay",
          text: "Oh"
        },
        {
          title: "Mom",
          text: "I don't know everything, only what your dad tells me, and I can tell he doesn't know the full story either. You know how his family is."
        },
        {
          title: "Mom",
          text: "But, in this case, I don't think he wants to know anymore"
        },
        {
          title: "Jay",
          text: "What do you mean"
        },
        {
          title: "Mom",
          text: "After Jen when away from home, he started living on the streets. I had something he started using."
        },
        {
          title: "Jay",
          text: "Overdose?"
        },
        {
          title: "Mom",
          text: "Shake head"
        },
        {
          title: "Jay",
          text: "Then what?"
        },
        {
          title: "Mom",
          text: "He… he was shot by the police"
        },
        {
          title: "Jay",
          text: "The police?"
        },
        {
          title: "Mom",
          text: "Duterte"
        },
        {
          title: "Mom",
          text: "Rodrigo Duterte? President of the Philippines? You don't know about him? about the drug war?"
        },
        {
          title: "Jay",
          text: "I’ve read a little,"
        },
        {
          title: "Mom",
          text: "Really, Jay, you should pay more attention to what’s going on in the outside world outside of your video games"
        },
        {
          title: "Jay",
          text: "Sorry"
        },
        {
          title: "Mom",
          text: "Duterte was elected back in 2016, one of those ‘law and order’ types. Said that if he were elected, he could eliminate the country’s crime in three to six months."
        },
        {
          title: "Jay",
          text: "For real?"
        },
        {
          title: "Mom",
          text: "(nods) Blamed drugs. Said he had a plan to get rid of the and once he did, there wouldn’t be any more crime."
        },
        {
          title: "Jay",
          text: "And people believed that?"
        },
        {
          title: "Mom",
          text: "He won by a landslide"
        },
        {
          title: "Mom",
          text: "He ordered anyone addicted or selling to turn themselves in. If they didn’t, he encourtged the police and the police and the people to kill themtif they resisted. ^1000 without a warrant or a trial"
        },
        {
          title: "Jay",
          text: "isn't that illegal"
        },
        {
          title: "Mom",
          text: "the government determines what's legal"
        },
        {
          title: "Jay",
          text: "and they're actually have been doing this?"
        },
        {
          title: "Mom",
          text: "you really haven't read any articles about this online are there and about in school at all?"
        },
        {
          title: "Jay",
          text: "how many people have died?"
        },
        {
          title: "Mom",
          text: "Some think over ten or maybe twenty-thousand. But the government says only a few thousand."
        },
        {
          title: "Jay",
          text: "and Filipinos are okay with this guy?"
        },
        {
          title: "Mom",
          text: "Jay, it's easy for us to pass judgment but we don't live there anymore so we can't grasp the extent to which drugs affect the country."
        },
        {
          title: "Mom",
          text: "according to what I've read, most Filipinos believe it's for the greater good. Harsh but necessary."
        },
        {
          title: "Jay",
          text: "so I'm not going to have an opinion? To say it's wrong or inhumane?"
        },
        {
          title: "Mom",
          text: "that's not what I'm saying Jay"
        },
        {
          title: "Jay",
          text: "what are you saying?"
        },
        {
          title: "Mom",
          text: "that you need to make sure that opinion is an informed one",
          callback: eventStore.tutorialPrt3
        }

      ],
      "Jun was shot by the police for doing or selling drugs": [{
        title: "",
        text: "She already knows this"
      }, ],
      "Blurry image found in Tito Maning's room": [{
        title: "",
        text: "I don't know what the note is, so there's no point in showing it."
      }],
      "Jun was on a list of drug dealers": [{
        title: "",
        text: "I pick up my phone and begin to call her"
      },{
        title: "Jay",
        text: " Hey Mom, I found something about Jun"
      },
      {
        title: "Jay",
        text: " He was on a list of drug dealers"
      },
      {
        title: "Mom",
        text: "Jun??"
      },
      {
        title: "Jay",
        text: "Yes"
      },
      {
        title: "Mom",
        text: "Have you told Dad?"
      },


      ],
      "Jun ran away from home": [{
        title: "",
        text: "I pick up my phone and begin to call her"
      },{
          title: "Jay",
          text: " Hey Mom, do you know why Jun ran away from home?"
        },
        {
          title: "Mom",
          text: "I think it has to do with Tito Maning. I am not sure"
        }

      ],


    }
  },
  Angel: {
    state: 0, // Stores what they will say
    //IN philippines

    dialog: {
      //0

      4: [{
          title: "Angel",
          text: "How is Em?"
        },
        {
          title: "Jay",
          text: "She is doing fine"
        },
        {
          title: "Angel",
          text: "Really?"
        },
        {
          title: "Angel",
          text: "Mind if I ask for a feel questions?"
        },
        {
          title: "Jay",
          text: "Ask away"
        },
        {
          title: "Angel",
          text: "Where is she going for college? What is she studying?"
        },
        {
          title: "Angel",
          text: "What is her favorite band, tv show, movie?? How does she wear her hair?"
        },
      ],
      "Jun was shot by the police for doing or selling drugs": [{
          title: "Jay",
          text: "Hey, did your Dad tell you about Jun?"
        },
        {
          title: "Angel",
          text: "..."
        },
        {
          title: "Angel",
          text: "I don't know too much. But my Dad should know more"
        },
        {
          title: "Angel",
          text: "Don't tell anyone, but maybe you can find something in his room"
        }
      ],
      "Blurry image found in Tito Maning's room": [{
          title: "Jay",
          text: "I found this picture in his room thanks to you!"
        },
        {
          title: "Angel",
          text: "What does it say?"
        },
        {
          title: "Jay",
          text: "It's too blurry for me to read"
        },
        {
          title: "Angel",
          text: "Well at least you got something. Maybe it will become useful later"
        },
        {
          title: "Jay",
          text: "Maybe"
        }
      ],"Jun was on a list of drug dealers": [{
        title: "Jay",
        text: "Angel, remember the blurry image?"
      },
      {
        title: "Angel",
        text: "Yes"
      },
      {
        title: "Jay",
        text: "It turns out that the image was a list of drug dealers. Jun was on it"
      },
      {
        title: "Angel",
        text: "Really?? Why did Dad have that?" 
      },
      {
        title: "Jay",
        text: "I don't know"
      },


      ],
      "Jun ran away from home": [{
          title: "Jay",
          text: " Angel, do you know why Jun ran away from home?"
        },
        {
          title: "Angel",
          text: "..."
        },
        {
          title: "Angel",
          text: "I do not remember the details"
        }
      ],


    }
  },
  Grace: {
    state: 0, // Stores what they will say
    phone: false,
    //IN philippines

    dialog: {
      //0

      4: [{
          title: "Jay",
          text: " What’s it like being one of the only teenagers in the world without a cell phone?"
        },
        {
          title: "Grace",
          text: " There are many teenagers in the world without a cell phone, Kuya"
        },
        {
          title: "Jay",
          text: " Yeah, I know. I meant, like of your friends. A lot of them have phones right?"
        },
        {
          title: "Grace",
          text: " Yes"
        },
        {
          title: "Jay",
          text: " Back in America, pretty much every kid has one starting in middle school. Most would die without them"
        },
        {
          title: "Grace",
          text: " Many of my friends spend so much time worrying about likes or followers."
        },
        {
          title: "Grace",
          text: " But none of that is real",
          callback: eventStore.knowsPhone
        }
      ],
      "Jun was shot by the police for doing or selling drugs": [{
          title: "Jay",
          text: "Hey, did your Dad tell you about Jun-"
        },
        {
          title: "Grace",
          text: "i don't want to talk about Kuya Jun"
        },
      ],
      "Blurry image found in Tito Maning's room": [{
        title: "",
        text: "I don't know what the note is, so there's no point in showing it."
      }],"Jun was on a list of drug dealers": [{
        title: "Jay",
        text: "Grace, I have an image of something from your Dad's room"
      },
      {
        title: "Jay",
        text: "It is a list of drug dealers, and Jun was on it"
      },
      {
        title: "Grace",
        text: "Jun? Why was he.."
      },
      {
        title: "Jay",
        text: "Do you know why he might have been put on this list" 
      },
      {
        title: "Grace",
        text: "I'm sorry but I don't know this.."
      },


      ],
      "Jun ran away from home": [{
          title: "Jay",
          text: " Grace, do you know why Jun ran away from home?"
        },
        {
          title: "Grace",
          text: "Please do not bring that up. It was unfair"
        },
        {
          title: "Jay",
          text: "Unfair?"
        }
      ],


    }
  },
  "Tita Ami": {
    state: 0, // Stores what they will say
    //IN philippines

    dialog: {
      //0

      4: [{
          title: "Tita Ami",
          text: "Make sure to stay out of the sun while you are here."
        },
        {
          title: "Tita Ami",
          text: "Your skin will get dark and ugly. You have very good skin already."
        },
        {
          title: "Jay",
          text: "Um, okay.."
        }
      ],
      "Jun was shot by the police for doing or selling drugs": [{
          title: "Tita Ami",
          text: "I think that is something you should ask your parents."
        }

      ],
      "Blurry image found in Tito Maning's room": [{
        title: "",
        text: "I don't know what the note is, so there's no point in showing it."
      }],
      "Jun ran away from home": [{
          title: "Jay",
          text: " Tit Ami, do you know why Jun ran away from home?"
        },
        {
          title: "",
          text: "She shakes her head and speaks in Tagalog as she walks away from me."
        }
      ],
      "Jun was on a list of drug dealers": [{
        title: "",
        text: "It's probably best if I don't tell her that I went into Tito manning's room"
      }


      ],


    }
  },
  Mia: {
    state: 0, // Stores what they will say
    dialog: {
      0: [{
          title: "Jay",
          text: " how old are you?"
        },
        {
          title: "Mia",
          text: " Thirty-one"
        },
        {
          title: "Jay",
          text: " For real?"
        },
        {
          title: "",
          text: " She breaks into a grin"
        },
        {
          title: "Mia",
          text: " Nighteen. You?"
        },
        {
          title: "Jay",
          text: " Seventeen"
        },
        {
          title: "Mia",
          text: " Aw, you're just a baby"
        },
        {
          title: "Jay",
          text: " I graduate in a few weeks"
        },
        {
          title: "Mia",
          text: " Ooh, all grown up, what's next for you."
        },
        {
          title: "",
          text: " we talk about what colleges we were going to what we are studying"
        },
        {
          title: "Mia",
          text: " I'm studying journalism"
        },
        {
          title: "Jay",
          text: " really? Isn't that dangerous?"
        },
        {
          title: "Mia",
          text: " Have you heard of the Maguindanao Massacre?"
        },
        {
          title: "Jay",
          text: " No"
        },
        {
          title: "Mia",
          text: " a large group of people run that way to file candidacy paper for a man who was going to run for office"
        },
        {
          title: "Mia",
          text: " most of them were simply reporters"
        },
        {
          title: "Mia",
          text: " but thugs hard by his opponent intercepted and killed them. All of them"
        },
        {
          title: "Jay",
          text: " that's horrible"
        },
        {
          title: "Mia",
          text: " some say it was the deadliest attack on journalists in the world"
        },
        {
          title: "Jay",
          text: " that happened in, like, the 60's or 70s or something?"
        },
        {
          title: "Mia",
          text: "2009"
        },
        {
          title: "Jay",
          text: " so that's a no on safety"
        },
        {
          title: "Mia",
          text: " not if you want to do political or crime reporting not if you want to find the truth."
        },
        {
          title: "Jay",
          text: " let me guess: that's the kind of reporting you want to do?"
        },
        {
          title: "Mia",
          text: " Of course."
        }
      ],
      14: [{title:"",text:" I get a text from Mia"},
      {title:"Jay",text:" Did you find out anything yet?"},
      {title:"Mia",text:" Not yet"},
      {title:"Jay",text:" Let me know if you do!!"},
      {title:"Mia",text:" I will"},
      ],
      "Jun was shot by the police for doing or selling drugs": [{
          title: "Jay",
          text: " has Grace told you and Jessa about what happened to her brother?"
        },
        {
          title: "",
          text: " confusion sweeps across the Mia's face"
        },
        {
          title: "Mia",
          text: " Grace doesn't have a brother"
        },
        {
          title: "Mia",
          text: " she just has the one younger sister right? Angel?"
        },
        {
          title: "",
          text: " I shake my head in disbelief"
        },
        {
          title: "Jay",
          text: " She does, I mean did, have a brother. Jun"
        },
        {
          title: "",
          text: " She thinks for a moment"
        },
        {
          title: "Mia",
          text: " is he the one that ran away from home? About four years ago?"
        },
        {
          title: "Jay",
          text: " yes, I forgot about that."
        },
        {
          title: "Jay",
          text: " he was killed last week. Shot by the police while using drugs supposedly"
        },
        {
          title: "Mia",
          text: " I'm sorry, Jay, I had no idea. I…"
        },
        {
          title: "Mia",
          text: " …"
        },
        {
          title: "Mia",
          text: " but you said supposedly. you're trying to find what happened to your cousin, aren't you?"
        },
        {
          title: "",
          text: " I nod and begin to tell her everything. "
        },
        {
          title: "Mia",
          text: " This sounds interesting. I think I could help you with this"
        },
        {
          title: "Jay",
          text: " Really? Thanks",
          callback: eventStore.addRunClue
        }


      ],
      "already":[{
        title: "",
        text: "She knows this already"
      }],
      "Blurry image found in Tito Maning's room": [{
          title: "Jay",
          text: " I actually wanted to show you this"
        },
        {
          title: "",
          text: " I pull the picture of the note from earlier"
        },
        {
          title: "Jay",
          text: " I know it's blurry but it's a picture I took from Jun's dad"
        },
        {
          title: "Mia",
          text: " Hmmm. I can read some of it."
        },
        {
          title: "Mia",
          text: " it's to your uncle. The person who wrote it sounds like he was one of your uncle's subordinates. Maybe a detective?"
        },
        {
          title: "Mia",
          text: ". He says that pair your uncle's request, they located his son. It then asks him how he wants to proceed"
        },
        {
          title: "Mia",
          text: ". It also seems to be a list of drug dealers and Jun's on it."
        },
        {
          title: "Jay",
          text: " Jun??"
        },
        {
          title: "Mia",
          text: " most likely, every barangay captain is asked to keep a list of suspects for the authorities."
        },
        {
          title: "Jay",
          text: " how do you know that the people on the list are guilty?"
        },
        {
          title: "Mia",
          text: " they just take their word for it.",
          callback: eventStore.updateNoteClue
        }

      ],"Jun ran away from home": [{
        title: "",
        text: "I pick up the phone and text her"
      },{
          title: "Jay",
          text: "Mia, do you know why Jun ran away from home?"
        },
        {
          title: "Mia",
          text: "I don't know. Try to find out Jay, you are with his family"
        }
      ],
      "Jun had drugs and was kicked by Tito Maning":[
        {title:"",text:" I text Mia what I just learned about Jun."},
{title:"Mia",text:" Wow, That's Crazy"},
{title:"Mia",text:" So Just like you? Kicked out and staying at your Tita's place?"},
{title:"Mia",text:" Was there anything of importance in his items?"},

      ],
      "Jun was on a list of drug dealers": [{
        title: "",
        text: "She knows this already"
      }]
    }
  },
  "Tito Maning": {
    state: 0, // Stores what they will say
    dialog: {
      //0
      0: [

        {title:"Tito Maning",text:" Do you notice what is not emphasized here?"},
        {title:"Jay",text:" American colonialism?"},
        {title:"Tito Maning",text:" Yes, we had declared ourselves free, and then your country ignored that."},
        {title:"Tito Maning",text:" They just stepped in where Spain left off"},
        {title:"Tito Maning",text:" Do you know that the Americans stole entire villages and then displayed them in your country as if they were animals in a zoo?"}
        
      ],
     

    
      "Jun was shot by the police for doing or selling drugs": [{
        title: "",
        text: "He already knows this. I should ask something else.."
      }, ],
    
      "Jun was on a list of drug dealers": [{
        title: "Jay",
        text: "Tito Maning, why was Jun on the list of drug dealers."
      },{
          title: "Tito Maning",
          text: "Who told you about that list?"
        },
        {
          title: "Jay",
          text: "Please answer me first"
        },
        {
          title: "Tito Maning",
          text: "Because he was one. Simple"
        },
        {
          title: "Jay",
          text: " But Jun wasn't an addict or a pusher"
        },
        {
          title: "Tito Maning",
          text: "What do you know about him?"
        }

      ],
      "Jun ran away from home": [{
          title: "Jay",
          text: "Tito Maning, do you know why Jun ran away from you?"
        },{title:"Tito Maning",text:" He was using drugs nephew"},
        {title:"Tito Maning",text:" I found them in his room myself"},
        {title:"Tito Maning",text:" I held them with my own hands"},
        {title:"Tito Maning",text:" Then I gave him a choice, stop using or get out"},
        {title:"Tito Maning",text:" What do you think he chose? He chose to leave. He chose the drugs"}
        

      ], "Blurry image found in Tito Maning's room": [{
        title: "",
        text: "I don't know what the note is, so there's no point in showing it."
      }],


    }

  },
 "Tita Chato": {
    state: 0, // Stores what they will say
    //IN philippines

    dialog: {
      //0

      14: [{title:"Tita Chato",text:" So you made Many Baboy angry, eh?"},
      {title:"Jay",text:" What?"},
      {title:"Tita Ines",text:" Your tita is mixing languages to make a ryhme. "},
      {title:"Tita Ines",text:" Manoy means older brother and Baboy means pig"},
      {title:"Jay",text:" Oh."},
      {title:"Jay",text:" yeah, I made him pretty angry. But I didn't mean to."},
      {title:"Tita Chato",text:" That's too bad"}
      ],
      "Jun was shot by the police for doing or selling drugs": [
        {title:"Jay",text:" Did you know what happened to Jun?"},
{title:"Tita Chato",text:" what happened to Jun is a tragedy, whether or not he was a drug pusher."},
{title:"Tita Chato",text:" but he is dead. We cannot bring him back to life. You need to accept that. There is nothing we can do about it except mourn."}

      ],
      "Blurry image found in Tito Maning's room": [
        {
          title: "",
          text: "I don't know what the note is, so there's no point in showing it."
        }
      ],"Jun was on a list of drug dealers": [
        {title:"Jay","text":"I have this note here. I want to show it to you"},
        {title:"Tita Chato",text:" Ay, so it was true"},
{title:"Jay",text:" But, Tita, I don't think he belonged on that list."},
{title:"Tita Chato",text:" then why was he included?"},
{title:"Jay",text:" a mistake, maybe? Or maybe Tito Maning was looking for Jun and he knew adding him to the list would be a surefire way to locate him."},
{title:"Tita Chato",text:" I hope you're are right"},


      ],
      "Jun ran away from home": [
        {title:"Jay",text:" do you know why Jun ran away?"},
{title:"Tita Chato",text:" Jun did not run away"},
{title:"Jay",text:"  but Tito Maning said he gave Jun a choice. That Jun chose to leave"},
{title:"Tita Chato",text:" My brother is a liar. Just like the government that he serves. Never forget that"},
{title:"Jay",text:" what do you mean?"},
{title:"Tita Chato",text:" The first part is true he did find drugs in Jun's room."},
{title:"Tita Chato",text:" but the second part is a lie he gave him no choice. Manning made him leave immediately."},
{title:"Jay",text:" How do you know?"},
{title:"Tita Chato",text:" because like you, Jun came here."},
        {title:"Jay",text:" how long did he stay with you?"},
{title:"Tita Chato",text:" almost one year."},
{title:"Tita Chato",text:" for that year, we lived together, the three of us. We went to work. He went to school."},
{title:"Tita Chato",text:" we even went on a few short vacations together.", callback:eventStore.updateRunClue},

      ],
      "Jun had drugs and was kicked by Tito Maning":[
        {
          title: "",
          text: "She already knows this"
        }
      ]


    }
  },
  "Tita Ines": {
    state: 0, // Stores what they will say
    //IN philippines

    dialog: {
      //0

      14: [
        {title:"",text:" Tita Chato lights a cigarette"},
{title:"Jay",text:" I thought smoking was illegal?"},
{title:"Tita Ines",text:" only in the public"},
{title:"Tita Ines",text:" Still, I tried to get her to quit a thousand times but she only listens to herself"},
{title:"Tita Chato",text:" there are many ways to die in this country, this is the one I am least concerned about."}

      ],
      "Jun was shot by the police for doing or selling drugs": [
        {title:"Jay",text:" Did you know what happened to Jun?"},
        {title:"Tita Ines",text:" Yes. Why God allows that man to have children, I do not understand."}
        

      ],
      "Blurry image found in Tito Maning's room": [
        {
          title: "",
          text: "I don't know what the note is, so there's no point in showing it."
        }
      ],"Jun was on a list of drug dealers": [
        {title:"Jay","text":"I have this note here. I want to show it to you"},
        {title:"Tita Ines",text:" Hmm, you should tell Chato about this. After all, she knows Maning better than I"}


      ],
      "Jun ran away from home": [
        {title:"Jay",text:" What was Jun like when he stayed here?"},
        {title:"Tita Ines",text:" well he was always very honest. One thing I remember was that he did not like school"},
        {title:"Tita Ines",text:" he says school is useless, and that it was not teaching him anything new anymore"},
        {title:"Tita Ines",text:" he was a very sharp boy. Had real brains. "},
        {title:"Tita Ines",text:" it would turn out that he sometimes skipped going to go to the library, one time he showed us his checkout history"},
        {title:"Tita Ines",text:" that boy has read more books than me in weeks than me in my entire life"},
        {title:"Tita Ines",text:" so what happened next?"},
        {title:"Tita Chato",text:" he left"},
        {title:"Jay",text:" Why?"},
        {title:"Tita Chato",text:" we do not know exactly, we come home from work one day, after we discover here is not going to school, and he is not here."},
        {title:"Tita Chato",text:" there is a box inside of all he left behind. We kept it in case he returned. If you want to look through it later, you can take what you want.",callback:eventStore.checkItems}
        

      ],
      "Jun had drugs and was kicked by Tito Maning":[
        {
          title: "",
          text: "She already knows this"
        }
      ]


    }
  },
  
  //Actions
  actions: {
    Sleep: [{
        title: "",
        text: " I leave my belongings on the guest room floor and rest"
      },
      {
        title: "",
        text: "...."
      },
      {
        title: "",
        text: " I wake up to the sound of Grace’s voice"
      },
      {
        title: "Grace",
        text: " Kuya, kain na. Time to eat. Hurry or Angel will eat your flan"
      },
      {
        title: "",
        text: " I sit down at the table. The food was already set out."
      },
      {
        title: "",
        text: " Tito Maning is back from work. Though, he is still wearing his police uniform."
      },
      {
        title: "",
        text: " He begins by asking questions about my family. Eventually, he starts asking me about my own life. "
      },
      {
        title: "Tito Maning",
        text: " You wasted today sleeping, so I am thinking Grace can take you to some of our historical sites tomorrow."
      },
      {
        title: "Tito Maning",
        text: ". I am thinking your tatay has taught you nothing about our history."
      },
      {
        title: "Tito Maning",
        text: " Do you know when Rizal was executed?"
      },
      {
        title: "",
        text: " I shake my head"
      },
      {
        title: "Tito Maning",
        text: " How much America paid to ‘buy’ this country?"
      },
      {
        title: "Tito Maning",
        text: " How many of the Japanese killed and raped during the occupation?"
      },
      {
        title: "",
        text: " I say nothing"
      },
      {
        title: "Tito Maning",
        text: " It is a shame. I ask your tatay to teach you Tagalog and Bikol. Do you know what he says to me? "
      },
      {
        title: "Jay",
        text: " No"
      },
      {
        title: "Tito Maning",
        text: " The boy does not to be confused, he will be going to America so he needs only good English.."
      },
      {
        title: "Tito Maning",
        text: " It is not your fault. While you are here you will learn. Grace and Angel will teach you some Tagalog. We will take you to important places."
      },
      {
        title: "Tito Maning",
        text: ". By the time you leave, you will be more Filipino than your tatay, eh?"
      },
      {
        title: "",
        text: " If I were braver, I would defend my Dad right now. But I want to do is retreat upstairs"
      },
      {
        title: "Jay",
        text: " Sorry, Uncle. I’m not feeling well. May I be excused?"
      },
      {
        title: "Tito Maning",
        text: " I know it is not pizza or hamburgers but this is not America. We do not waste in the Philippines",
        callback: eventStore.dayTwoPhil
      }
    ],
    "Check Jun's Room": [{
        title: "",
        text: " I've seen a lot of movies where when a kid dies, the parents leave them untouched."
      },
      {
        title: "",
        text: " This is what I expected, but when I stepped into his room I do not find that."
      },
      {
        title: "",
        text: " Instead, I find nothing."
      },
      {
        title: "",
        text: " Only a bed and a dresser remain"
      },
      {
        title: "",
        text: " No pictures or artwork. No Catholic trappings."
      },
      {
        title: "",
        text: " All his things are gone."
      },
      {
        title: "",
        text: " Where did they all go? Perhaps Tito Manning has it?",
        callback: eventStore.removeAction,
        param: "Check Jun's Room"
      }
    ],
    "Check Tito Maning's room": [{
        title: "",
        text: " Considering how I didn’t find anything in Jun’s room, I should look for details elsewhere."
      },
      {
        title: "",
        text: " Maybe I should try asking Tito Maning directly.."
      },
      {
        title: "",
        text: " No ... I can’t do that right now. I’m not brave at all. But maybe his room has something"
      },
      {
        title: "",
        text: " …"
      },
      {
        title: "",
        text: " I open the door to his room and head inside."
      },
      {
        title: "",
        text: " There are two drawers, the left one and it’s empty"
      },
      {
        title: "",
        text: " The right one is locked. Maybe I could pick the lock?"
      },
      {
        title: "Angel",
        text: " Kuya Jay?"
      },
      {
        title: "Jay",
        text: " Oh, hi um. Angel"
      },
      {
        title: "Angel",
        text: " Are you trying to break into Tatay’s desk?"
      },
      {
        title: "Jay",
        text: " No, I-"
      },
      {
        title: "Angel",
        text: " Because you will need the key"
      },
      {
        title: "",
        text: " She walks over to one of the bookshelves and get something from underneath a book"
      },
      {
        title: "Angel",
        text: " Here is the key, when you are finished return it here."
      },
      {
        title: "Jay",
        text: " Thanks."
      },
      {
        title: "Angel",
        text: " Seriously, Kuya, do not forget to put the key back"
      },
      {
        title: "",
        text: " She leaves and I begin to look inside the folders. "
      },
      {
        title: "",
        text: " I hear footsteps outside so I took a quick picture of something that looks useful and leave"
      },
      {
        title: "",
        text: " … "
      },
      {
        title: "",
        text: " When it’s safe, I leave the room and look at the picture. "
      },
      {
        title: "",
        text: " It’s blurry as hell.",
        callback: eventStore.checkTitoRoom
      }
    ],
    "Eat Breakfast": [{
        title: "",
        text: " After breakfast, a car picks up Tito Maning to take him to the station. "
      },
      {
        title: "",
        text: " Tita Ami and Angel head  to Angel’s dance class a few minutes later"
      },
      {
        title: "",
        text: " Grace and I hop into the SUV with Tomas"
      },
      {
        title: "",
        text: " I scroll through the feeds of GISING NA PH! while Grace stares at a phone in her hand.",
        callback: eventStore.gracePhoneDia
      }
    ],
    "Go to the laser tag arena": [{
        title: "",
        text: " in a massive disappointment to both of us, the laser tag place is closed."
      },
      {
        title: "Mia",
        text: " want to go ice skating instead?"
      },
      {
        title: "Jay",
        text: " Sure"
      },
      {
        title: "",
        text: " we meet up with the other two and spend the rest of the day ice skating",
        callback: eventStore.goBack
      }
    ],
    "Ask what happened to Jun":[{title:"Jay",text:" What happened to Jun?"},
    {title:"",text:" Tito Maning remain silent"},
    {title:"Jay",text:" What happened to-"},
    {title:"Tito Maning",text:" I heard you the first time"},
    {title:"Tito Maning",text:" did your father not tell you?"},
    {title:"Jay",text:" yes, killed by the police for using drugs."},
    {title:"Tito Maning",text:" why do you ask a question, then, to which you already know the answer?"},
    {title:"Jay",text:" is that the truth?"},
    {title:"Tito Maning",text:" were you with him when he died?"},
    {title:"Tito Maning",text:" were you in communication with him before he died?"},
    {title:"Jay",text:" no.."},
    {title:"Tito Maning",text:" then why is it you think you know what happened to my son?"},
    {title:"Jay",text:" I… don't know. I read some articles"},
    {title:"Tito Maning",text:" I am guessing they were written and by your Western media?"},
    {title:"Tito Maning",text:" do you think they know what is happening in this country?"},
    {title:"Jay",text:" for one article the journalist spent some forty days in Manila"},
    {title:"Tito Maning",text:" fourteen days? Let me know when they've been here for forty years"},
    {title:"Jay",text:" they are only journalists trying to show the truth"},
    {title:"Tito Maning",text:" are you stupid? "},
    {title:"Tito Maning",text:" have they said anything about the president making the museums free? Building bridges and repairing roads I have lay crumbling for decades?"},
    {title:"Tito Maning",text:" making contraceptives free for all women, regardless of income? Many cigarettes so we can breathe cleaner air."},
    {title:"Tito Maning",text:" reducing crime to its lowest rates ever so that people finally feel safe?"},
    {title:"Tito Maning",text:" these people, the ones writing  these articles you have been reading do not care about the Filipino people."},
    {title:"Tito Maning",text:" they sensationalize the worst of what is happening here and ignore the best in order to sell copies or win awards. It is that simple."},
    {title:"Jay",text:" But Jun wasn't and addict, he wasn't a pusher"},
    {title:"Tito Maning",text:" What do you know about Jun? You didn't raise him!"},
    {title:"Tito Maning",text:" you do not live here. You do not speak any of our languages."},
    {title:"Tito Maning",text:" you do not know our history, yet you presume to speak to me as if you knew everything about me."},
    {title:"Tito Maning",text:" as if you knew everything about my son, as if you knew everything about this country."},
    {title:"Tito Maning",text:" when we return to the house, you will pack your things and Tomas will drive you to Chato's"},
    {title:"Jay",text:" but I thought we do that tomorrow"},
    {title:"Tito Maning",text:" that was the plan, but you have outworn your welcome in my home.", callback: eventStore.kickOut}
    ],
    "Check Jun's Items":[
      {title:"",text:" A small stack of pirated DVDs and CDs"},
{title:"",text:" And three books"},
{title:"",text:" I pick up and examine each item."},
{title:"",text:" inbetween one of the books is a slip of paper"},
{title:"",text:" it's a business card for a bookstore. As a number and address and the owner's name."},
{title:"",text:" I text Mia this info right away."},
{title:"Jay",text:" I just found this in one of his own books maybe we can check out the store tomorrow?"},
{title:"Mia ",text:"sure. I'll stop by in the morning.",callback: eventStore.nextDay}
    ]

  },






}
