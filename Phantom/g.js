// the game data
var g = {
  s: ["",
  /* 1*/"LIGHT SABER", "MIDICLORIANS", "CONTROLS",
  /* 4*/"INT. SPACESHIP", "MAIN DECK", "NABOO", "TATOOINE", "POD RACE", "CORUSCANT", "SOME KIND OF THINGY WITH RED FORCE FIELDS", "INT. HANGAR",
  /*12*/"LIAM NEESON", "EWAN MCGREGOR", "EVIL ALIEN", "DROID", "NATALIE PORTMAN", "JAR JAR", "AUDIENCE", "JAKE LLOYD", "JAKE'S MOM", "YODA", "SAMUEL L. JACKSON", "BOSS NASS", "DARTH MAUL", "EWAN kills NATALIE",
  /*26*/"END",
  /*27*/"SPACESHIP TO TATOOINE", "ROUTE", "SAFE ROUTE", "STORM OUT AND FLY TO NABOO", "RED FORCE FIELD", "SHAFT",
  /*33*/"It is vitally important we enter trade negotiations with the federation.",
  "I agree. This one planet and how it trades with other planets is certainly an important enough topic to be the entire plot of a Star Wars film.",
  "We should negotiate in the MAIN DECK.",
  "No good will come of that.",
  "Werr. What wirr we do now? My evil, obviousry Asian race must prevair. I wirr not face de Jedi. Send de droid.",
  "Negotiate this!",
  "EWAN, I think we should concentrate on these DROIDs.",
  /*40*/"LIAM destroys DROID, another one enters",
  "I am the queen. You've gone too far this time. I will tell the senate and you will be in a lot of trouble.",
  "I am not a good Jedi.",
  "She's immersed in a political debate with EVIL ALIEN.",
  "EWAN destroys DROID, another one enters",
  /*45*/"I'm so sorry, Amidala.",
  "No, no, I'm Padme now.",
  "NATALIE enters",
  "I thought when in the makeup, you were the queen.",
  "No, I'm whoever is playing the queen at the time. The voice changes don't help you figure this out.",
  /*50*/"Stop trying to confoose me! Droids, capture the queen.. or Padme.. er.. just capture everyone!",
  "LIAM picks up NATALIE",
  "DROID shoots NATALIE, she dies",
  "We can't leave without queen.. or Padme.. er.. we can't leave.",
  "It's unlocked.",
  /*55*/"That tickles.",
  "Where are we going?",
  "To NABOO.",
  "I have a bad feeling about this.",
  "There's always a bigger fish.",
  /*60*/"What are you two talking about?",
  "I'm not going alone.",
  "Looks like a droid.",
  "It's an EVIL ALIEN.",
  "Who might you be?",
  /*65*/"I am a Jedi. There are bad things coming. We must escape on a spaceship to TATOOINE.",
  "I see. That is quite interesting. I will escape with you.",
  "Suddenly, GEORGE LUCAS realizes the JAR JAR toys aren't selling well enough.",
  "Oh! Meesa sorry! Meesa ment to saysa: Weesa can go back to Jamaica mon, okeyday?",
  "OMG, put him back!",
  /*70*/"Will you two knock that off?",
  "No, I am saving myself for a young jedi boy.",
  "EWAN swings his LIGHT SABER around wildly",
  "LIAM wastes time by playing with his MIDICLORIANS",
  "Weesa can smokesa some ganja, mon.",
  /*75*/"Die. Die, JAR JAR. Nobody likes you.",
  "Hi there! Golly I'm cute.",
  "You certainly are, little boy.",
  "I'm the only one disturbed by the fact that I'm gonna bone you in episode two?",
  "What did I say about that?",
  /*80*/"I'm not getting in that thing.",
  "Meesa gonna help!",
  "Jake, I need you to have a pod race so I can get the parts I need and free you.",
  "No, I won't allow him to pod race. He'll get hurt.<br>(pause)<br>Ok, I will. Nevermind. Good luck.",
  "That tickles!",
  /*85*/"EWAN kills JAKE",
  "What a handsome young man you are.",
  "Too young the boy is.",
  "Not for me.",
  "JAKE enters the POD RACE",
  /*90*/"It looks really cool!",
  "SEBULBA forces JAKE into a rock spire, he dies",
  "We have mixed emotions about this ending.",
  "Yipee!",
  "Uh oh! I don't like that way!",
  /*95*/"JAKE wins! He has to leave his mother, which will become very important in the next movie",
  "We've fixed the spaceship, let's head to CORUSCANT.",
  "We should celebrate.",
  "Okeyday!",
  "Please, let me kill him.",
  /*100*/"I want to train this boy.",
  "Nope. Sorry. Too old the boy is. Clouded his future seems. Vague my worries are.",
  "That tickles m****f****.",
  "Yoda told you no, m****f****. What the f*** is wrong with you, b******?",
  "I'm going to go over your head and train him myself, then. So there.",
  /*105*/"I'll f***in' kill you!",
  "I am either the queen or Padme now. Regardless, your cheesy-looking race of annoying, unrealistic characters need to ally with our badly acting race of creatures so we can capture this one guy.",
  "One guy? The climax of this film revolves entirely around us capturing one, pretty insignificant guy? Doesn't that make this whole thing kinda pointless? Anyway, follow me.",
  "Tickles that does.",
  "Go. <b>Away</b>.",
  /*110*/"Hmmmmm.",
  "You're going down!",
  "No, he will lead us to that one guy.",
  "Finally DARTH MAUL shows up for a prolonged fight sequence.",
  "MAUL, LIAM, and EWAN all have a huge lightsaber battle which has had a lot of effort put into the choreography and is thousands of times better than any other lightsaber battle in a Star Wars film.",
  /*115*/"Black boots, black cloak, black shirt, red lightsaber, red and black face paint and horns. He is <b>EVIL</b>.",
  "Grrr.",
  "EWAN slashes relentlessly at the FORCE FIELD",
  "The <i>Force</i> does not seem to have an effect on this <i>force</i> field.",
  "It's a FORCE FIELD.",
  /*120*/"Eventually, MAUL stabs LIAM, which is very surprising, especially to those of us who bought the film score which has a song whose title gives away the ending.",
  "Noooo!",
  "EWAN slashes furiously at the FORCE FIELD",
  "EWAN slashes uncontrollably at the FORCE FIELD",
  "EWAN slashes hopelessly at the FORCE FIELD",
  /*125*/"Meanwhile, Anakin takes off into space to join the space-battle, which is mostly over by the time he arrives.",
  "Whoaaaaa! I’m in space! Now this is pod racing! Yipee! Uh oh! Man, I’m so cute.",
  "JAKE goes into a hangar, where the main reactor for the ship is kept.",
  "He accidentally blows it to SHIT.",
  "Uh oh! I better leave! Let’s leave Artoo! Golly!",
  /*130*/"The ship explodes, which stops all the DROIDS and just makes everything great, because it’s always enjoyable when a serious conflict is resolved with a slapstick accident.",
  "Meanwhile, MAUL kicks EWAN into a shaft. EWAN grabs onto something on the side and holds on for dear life.",
  "Muahahahaha.",
  "My MIDICLORIANS can do nothing to that.",
  "Well, you certainly are an experienced fighter and there is little question you could kick pretty much anyone’s ass.",
  /*135*/"It's dark down here.",
  "A light saber!",
  "I seem to be holding on for dear life.",
  "Slowly, EWAN uses the force to grab LIAM’S lightsaber, jump up out of the shaft, over MAUL, press the button on the saber, and slice MAUL in half while MAUL stands there like an idiot and does nothing at all. He DIES.",
  "The GUNGANS are dancing and such, still alive. A huge party ensues.",
  /*140*/"Wow! Watching this party and all this celebration has convinced me that the tiny, pathetic problem that has been taken care of is actually really significant! Hooray!",
  "Zat trickles.",
  "EWAN moves to strike",
  "We can't kill this innocent creature."
      ],
  g: "p.png",
  p: [
  { // 0. evil alien
    x: 246, y: 0, X: 10, Y: 32
  }, { // 1. droid
    x: 234, y: 0, X: 12, Y: 32
  }, { // 2. amidala
    x: 219, y: 15, X: 15, Y: 17
  }, { // 3. jar jar
    x: 219, y: 0, X: 15, Y: 15
  }, { // 4. jake
    x: 206, y: 18, X: 13, Y: 14
  }, { // 5. nass
    x: 207, y: 3, X: 12, Y: 15
  }, { // 6. maul
    x: 192, y: 0, X: 14, Y: 32
  }, { // 7. red force field
    x: 210, y: 0, X: 3, Y: 3
  }, { // 8. shaft
    x: 194, y: 5, X: 10, Y: 7
  }, { // 9. light saber
    x: 215, y: 1, X: 4, Y: 1
  }, { // 10. ewan
    x: 213, y: 0, X: 2, Y: 3
  }, { // 11. half maul
    x: 194, y: 0, X: 12, Y: 16
  }, { // 12. maul blood
    x: 210, y: 1, X: 3, Y: 3
  }
  ],
  l: [
        { // 0. To main deck
          t: 5,

          x: 144, y: 32, X: 64, Y: 112
        },
        { // 1. to naboo
          t: 6,
          x: 0, y: 192, X: 64, Y: 64
        },
        { // 2. to int. spaceship
          t: 4,
          x: 72, y: 40, X: 86, Y: 78
        }, { // 3. evil alien
          t: 14,
          x: 170, y: 48, X: 40, Y: 128,
          p: 0
        },
        { // 4. droid 1
          t: 15,
          x: 96, y: 32, X: 36, Y: 96,
          p: 1
        }, { // 5. start over
          t: 26,
          x: 0, y: 0, X: 256, Y: 256
        }, { // 6. amidala
          t: 16,
          x: 0, y: 120, X: 120, Y: 136,
          p: 2
        },
        { // 7. droid 2
          t: 15,
          x: 170, y: 48, X: 36, Y: 96,
          p: 1
        },
        { // 8. droid 3
          t: 15,
          x: 96, y: 112, X: 36, Y: 96,
          p: 1
        },
        { // 9. jar jar
          t: 17,
          x: 0, y: 136, X: 120, Y: 120,
          p: 3
        },
        { // 10. int. tatooine
          t: 27,
          x: 120, y: 68, X: 64, Y: 64
        }, { // 11. pod race
          t: 8,
          x: 92, y: 108, X: 96, Y: 78
        }, { // 12. jake
          t: 19,
          x: 0, y: 144, X: 104, Y: 112,
          p: 4
        }, { // 13. route 1
          t: 28,
          x: 16, y: 32, X: 48, Y: 64
        }, { // 14. route 2
          t: 28,
          x: 108, y: 32, X: 48, Y: 64
        }, { // 15. route 3
          t: 28,
          x: 180, y: 32, X: 48, Y: 64
        }, { // 16. safe route 1
          t: 29,
          x: 16, y: 32, X: 48, Y: 64
        }, { // 17. coruscant
          t: 9,
          x: 98, y: 32, X: 88, Y: 70
        }, { // 18. sammy
          t: 22,
          x: 28, y: 24, X: 80, Y: 192
        }, { // 19. to naboo
          t: 30,
          x: 0, y: 0, X: 256, Y: 256
        }, { // 20. yoda
          t: 21,
          x: 140, y: 80, X: 96, Y: 112
        }, { // 21. nass
          t: 23,
          x: 128, y: 136, X: 96, Y: 120,
          p: 5
        }, { // 22. maul
          t: 24,
          x: 24, y: 96, X: 56, Y: 128,
          p: 6
        }, { // 23. red force field
          t: 31,
          x: 48, y: 0, X: 210, Y: 192,
          p: 7
        }, { // 24. red force field 2
          t: 31,
          x: 13, y: 13, X: 243, Y: 243,
          p: 7
        }, { // 25. maul 2
          t: 24,
          x: 192, y: 0, X: 56, Y: 128,
          p: 6
        }, { // 26. jake 2
          t: 19,
          x: 0, y: 95, X: 104, Y: 112,
          p: 4
        }, { // 27. controls
          t: 3,
          x: 128, y: 160, X: 96, Y: 64
        }, { // 28. maul blood
          t: 0,
          x: 152, y: 208, X: 36, Y: 36,
          p: 12
        }, { // 29. shaft
          t: 32,
          x: 106, y: 160, X: 150, Y: 98,
          p: 8
        }, { // 30. light saber
          t: 1,
          x: 4, y: 224, X: 16, Y: 4,
          p: 9
        }, { // 31. ewan
          t: 13,
          x: 128, y: 244, X: 8, Y: 12,
          p: 10
        }, { // 32. maul 3
          t: 24,
          x: 152, y: 160, X: 48, Y: 64,
          p: 11
        }
      ],
  e: [
      { // 0. int. spaceship, no princess
        e0: 4, // main deck
        e0_1: 28, // saber
        e0_2: 2, // midis
        e1: 1, // naboo
        e1_1: 28, // saber
        e1_2: 29
      }, { // 1. 
        e2: 3 // click on int. spaceship
      }, { // 2. main deck
        e3: 23, // evil alien
        e3_1: 5, // saber
        e3_2: 78, // midis
        e4: 22, // droid
        e4_1: 6, // saber
        e4_2: 6 // midis
      }, { // 3. dead
        e5: 0
      }, { // 4. main deck
        e3: 23, // evil alien
        e3_1: 5, // saber
        e3_2: 78, // midis
        e4: 22, // droid
        e4_1: 9, // saber
        e4_2: 9, // midis
        e6: 8, // amidala
        e6_1: 7, // saber
        e6_2: 18 // midis
      }, { // 5. main deck
        e3: 23, // evil alien
        e3_1: 5, // saber
        e3_2: 78, // midis
        e4: 22, // droid
        e4_1: 10, // saber
        e4_2: 10, // midis
        e6: 8, // amidala
        e6_1: 7, // saber
        e6_2: 18 // midis
      }, { // 6. main deck
        e3: 23, // evil alien
        e3_1: 5, // saber w/ alien
        e3_2: 78, // midis
        e4: 22, // droid
        e4_1: 11, // saber
        e4_2: 11, // midis
        e6: 8, // amidala
        e6_1: 7, // saber
        e6_2: 18 // midis
      }, { // 7. main deck
        e2: 16, // int. spaceship
        e2_1: 17, // saber
        e2_2: 17, // midis
        e7: 22, // droid 2
        e7_1: 12, // saber
        e7_2: 12, // midis
        e6: 13, // amidala
        e6_1: 7, // saber
        e6_2: 18 // midis
      }, { // 8. main deck
        e2: 19, // int. spaceship
        e2_1: 17, // saber
        e2_2: 20, // midis
        e2_16: 19, // amidala
        e7: 22, // droid 2
        e7_1: 14, // saber
        e7_2: 14, // midis
        e7_16: 15 // amidala
      }, { // 9. int. spaceship
        e0: 20, // main deck
        e0_1: 17, // saber
        e0_2: 17, // midis
        e0_16: 21, // amildala
        e1: 24, // ext. naboo
        e8: 22, // droid 3
        e8_1: 14, // saber
        e8_2: 12, // midis
        e8_16: 15 // amidala
      }, { // 10. ext. naboo
        e9: 25, // jar jar
        e9_1: 79,
        e9_2: 26,
        e9_16: 27, // amidala
        e10_1: 28,
        e10_2: 29,
        e10_16: 21
      }, { // 11. ext. naboo, with jar jar
        e10: 31,
        e10_1: 28,
        e10_2: 29,
        e10_16: 21,
        e10_17: 30
      }, { // 12. int. tatooine
        e11: 35,
        e11_1: 32,
        e11_2: 32,
        e11_16: 33,
        e11_17: 34,
        e12: 35,
        e12_1: 37,
        e12_2: 36,
        e12_16: 38,
        e12_17: 39
      }, { // 13.
        e11: 40,
        e11_1: 32,
        e11_2: 32,
        e11_16: 33,
        e11_17: 34,
        e12: 40,
        e12_1: 37,
        e12_2: 36,
        e12_16: 38,
        e12_17: 39
      }, { // 14
        e13: 41,
        e13_2: 42,
        e14: 41,
        e14_2: 43,
        e15: 41,
        e15_2: 43
      }, { // 15
        e14: 41,
        e14_2: 43,
        e15: 41,
        e15_2: 43,
        e16: 44,
        e16_1: 42
      }, { // 16
        e12: 46,
        e12_1: 37,
        e12_2: 36,
        e12_16: 45,
        e12_17: 39,
        e17: 47,
        e17_1: 28,
        e17_2: 29,
        e17_16: 21,
        e17_17: 34
      }, { // 17
        e18: 49,
        e18_1: 50,
        e18_2: 48,
        e19: 51,
        e19_1: 28,
        e19_2: 29,
        e20: 49,
        e20_1: 2,
        e20_2: 52
      }, { // 18
        e6: 53,
        e6_1: 7,
        e6_2: 18,
        e21: 56,
        e21_1: 55,
        e21_2: 54
      }, { // 19
        e22: 57,
        e22_1: 62,
        e22_2: 58,
        e23: 61,
        e23_1: 59,
        e23_2: 60
      }, { // 20
        e: 63
      }, { // 21
        e: 64
      }, { // 22
        e: 65
      }, { // 23
        e: 66
      }, { // 24
        e26: 46,
        e26_2: 36,
        e27: 67,
        e27_2: 67
      }, { // 25
        e26: 46,
        e26_2: 36,
        e27: 68,
        e27_2: 68
      }, { // 26
        e28: 69,
        e28_2: 70,
        e22: 71,
        e22_2: 58,
        e29: 72,
        e29_2: 70,
        e30: 73,
        e30_2: 76,
        e31: 74,
        e31_2: 75
      }, { // 27
        e: 77
      }, { // 28
        e: 0
      }],
  c: [
      { // 0
        t: 4,
        b: 0,
        s1: 12,
        t1: 33,
        s2: 13,
        t2: 34,
        l: [0, 1],
        g: [1, 2],
        e: 0
      }, { // 1
        s1: 12,
        t1: 35
      }, { // 2
        s1: 12,
        t1: 36
      }, {
      /*
      3
      */
    }, { // 4
      t: 5,
      b: 1,
      s1: 14,
      t1: 37,
      l: [3, 4],
      e: 2
    }, { // 5
      s1: 13,
      t1: 38,
      s2: 12,
      t2: 39
    }, { // 6
      s1: 0,
      t1: 40,
      s2: 0,
      t2: 47,
      s3: 16,
      t3: 41,
      l: [3, 4, 6],
      e: 4
    }, { // 7
      b: 1,
      s1: 0,
      t1: 25,
      s2: 13,
      t2: 42,
      l: [3, 4, 5],
      e: 3
    }, { // 8
      s1: 12,
      t1: 43
    }, { // 9
      s1: 0,
      t1: 44,
      s2: 14,
      t2: 45,
      s3: 16,
      t3: 46,
      e: 5
    }, { // 10
      s1: 0,
      t1: 40,
      s2: 14,
      t2: 48,
      s3: 16,
      t3: 49,
      e: 6
    }, { // 11. main deck, amidala, droid 2
      b: 1,
      s1: 0,
      t1: 44,
      s2: 14,
      t2: 50,
      l: [2, 6, 7],
      e: 7
    }, { // 12. main deck, amidala, droid 2
      s1: 0,
      t1: 40
    }, { // 13. main deck, amidala taken, droid 2
      b: 1,
      s1: 0,
      t1: 51,
      l: [2, 7],
      g: [1, 2, 16],
      e: 8
    }, { // 14.
      s1: 0,
      t1: 44
    }, { // 15. main deck, droid 2
      s1: 0,
      t1: 52,
      s2: 12,
      t2: 42,
      l: [5],
      g: [1, 2],
      e: 3
    }, { // 16. main deck, amidala, droid 2
      s1: 12,
      t1: 53
    }, { // 17.
      s1: 12,
      t1: 54
    }, { // 18. main deck, droid 2
      s1: 16,
      t1: 55
    }, { // 19. int. spaceship, droid 3
      b: 0,
      s1: 16,
      t1: 56,
      s2: 12,
      t2: 57,
      l: [0, 1, 8],
      e: 9
    }, { // 20. main deck, amidala taken, droid 2
      b: 1,
      s1: 13,
      t1: 58,
      s2: 12,
      t2: 59,
      s3: 16,
      t3: 60,
      l: [2, 7],
      e: 8
    }, { // 21.
      s1: 16,
      t1: 61
    }, { // 22.
      s1: 12,
      t1: 62
    }, { // 23.
      s1: 12,
      t1: 63
    }, { // 24. ext. naboo, jar jar
      t: 6,
      b: 2,
      s1: 17,
      t1: 64,
      s2: 12,
      t2: 65,
      s3: 17,
      t3: 66,
      l: [9, 10],
      e: 10
    }, { // 25.
      b: 2,
      s1: 0,
      t1: 67,
      s2: 17,
      t2: 68,
      s3: 13,
      t3: 69,
      l: [10],
      g: [1, 2, 16, 17],
      e: 11
    }, { // 26
      s1: 12,
      t1: 59,
      s2: 13,
      t2: 58,
      s3: 16,
      t3: 70
    }, { // 27
      s1: 16,
      t1: 71
    }, { // 28
      s1: 0,
      t1: 72
    }, { // 29
      s1: 0,
      t1: 73
    }, { // 30
      s1: 17,
      t1: 74,
      s2: 18,
      t2: 75
    }, { // 31. tatooine, jake
      t: 7,
      b: 3,
      s1: 19,
      t1: 76,
      s2: 16,
      t2: 77,
      s3: 19,
      t3: 78,
      l: [11, 12],
      e: 12
    }, { // 32
      s1: 13,
      t1: 58,
      s2: 16,
      t2: 79,
      s3: 12,
      t3: 59
    }, { // 33
      s1: 16,
      t1: 80
    }, { // 34
      s1: 17,
      t1: 81,
      s2: 13,
      t2: 58
    }, { // 35
      s1: 12,
      t1: 82,
      s2: 20,
      t2: 83,
      e: 13
    }, { // 36
      s1: 19,
      t1: 84
    }, { // 37
      s1: 0,
      t1: 85,
      s2: 13,
      t2: 42,
      l: [5],
      e: 3
    }, { // 38
      s1: 16,
      t1: 86
    }, { // 39
      s1: 17,
      t1: 74,
      s2: 12,
      t2: 87,
      s3: 16,
      t3: 88
    }, { // 40
      t: 8,
      b: 4,
      s1: 0,
      t1: 89,
      s2: 0,
      t2: 90,
      l: [13, 14, 15],
      g: [2],
      e: 14
    }, { // 41
      s1: 0,
      t1: 91,
      s2: 18,
      t2: 92,
      l: [5],
      e: 3
    }, { // 42
      s1: 19,
      t1: 93,
      l: [16, 14, 15],
      e: 15
    }, { // 43
      s1: 19,
      t1: 94
    }, { // 44
      t: 7,
      b: 3,
      s1: 0,
      t1: 95,
      s2: 12,
      t2: 96,
      l: [12, 17],
      g: [1, 2, 16, 17],
      e: 16
    }, { // 45
      s1: 16,
      t1: 97,
      s2: 17,
      t2: 98,
      s3: 13,
      t3: 99
    }, { // 46
      s1: 19,
      t1: 93
    }, { // 47
      t: 9,
      b: 5,
      s1: 12,
      t1: 100,
      s2: 21,
      t2: 101,
      l: [18, 20],
      g: [1, 2],
      e: 17
    }, { // 48
      s1: 22,
      t1: 102
    }, { // 49
      s1: 22,
      t1: 103,
      s2: 12,
      t2: 104,
      l: [19]
    }, { // 50
      s1: 22,
      t1: 105
    }, { // 51
      t: 6,
      b: 2,
      s1: 16,
      t1: 106,
      s2: 23,
      t2: 107,
      l: [21, 6],
      e: 18
    }, { // 52
      s1: 21,
      t1: 108
    }, { // 53
      s1: 13,
      t1: 58,
      s2: 16,
      t2: 109
    }, { // 54
      s1: 23,
      t1: 110
    }, { // 55
      s1: 13,
      t1: 111,
      s2: 12,
      t2: 112
    }, { // 56
      t: 10,
      b: 0,
      s1: 0,
      t1: 113,
      s2: 0,
      t2: 114,
      l: [23, 22],
      e: 19
    }, { // 57
      s1: 12,
      t1: 115
    }, { // 58
      s1: 24,
      t1: 116
    }, { // 59
      s1: 0,
      t1: 117,
      s2: 12,
      t2: 36
    }, { // 60
      s1: 12,
      t1: 118
    }, { // 61
      s1: 12,
      t1: 119
    }, { // 62
      b: 0,
      s1: 0,
      t1: 120,
      s2: 13,
      l: [25, 24],
      e: 20,
      t2: 121
    }, { // 63
      s1: 0,
      t1: 122,
      e: 21
    }, { // 64
      s1: 0,
      t1: 123,
      e: 22
    }, { // 65
      s1: 0,
      t1: 124,
      e: 23
    }, { // 66
      t: 11,
      b: 8,
      s1: 0,
      t1: 125,
      s2: 19,
      t2: 126,
      s3: 0,
      t3: 127,
      l: [26, 27],
      g: [2],
      e: 24
    }, { // 67
      s1: 0,
      t1: 128,
      s2: 19,
      t2: 129,
      s3: 0,
      t3: 130,
      e: 25
    }, { // 68. red force field, maul 2, shaft, light saber, ewan
      t: 10,
      b: 1,
      s1: 0,
      t1: 131,
      s2: 24,
      t2: 132,
      l: [22, 29, 30, 31],
      g: [2],
      e: 26
    }, { // 69
      s1: 13,
      t1: 119
    }, { // 70
      s1: 13,
      t1: 133
    }, { // 71
      s1: 13,
      t1: 134,
      s2: 24,
      t2: 132
    }, { // 72
      s1: 13,
      t1: 135
    }, { // 73
      s1: 13,
      t1: 136
    }, { // 74
      s1: 13,
      t1: 137
    }, { // 75
      s1: 13,
      t1: 58
    }, { // 76. red force field, maul 3, shaft, end game
      b: 1,
      s1: 0,
      t1: 138,
      l: [29, 28, 32, 5],
      g: [2, 1],
      e: 27
    }, { // 77
      t: 6,
      b: 2,
      s1: 0,
      t1: 139,
      s2: 18,
      t2: 140,
      s3: 0,
      t3: 26,
      l: [9, 21, 5],
      g: [],
      e: 28
    }, { // 78
      s1: 14,
      t1: 141
    }, { // 79
      s1: 0,
      t1: 142,
      s2: 12,
      t2: 143
    }]
};