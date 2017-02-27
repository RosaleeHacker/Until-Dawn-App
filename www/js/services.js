angular.module('starter.services', [])

.factory('Characters', function() {

  var characters = [
    { id: 1, name: 'Mike', 
      img: 'img/Mike.png', imgDetail: 'img/Mike-Detail.png',
      quote: 'No need for violence, just a little harmless fun! We\'re out in the woods! It\'s spooky! Come on, let\'s get into the spirit of things!',
      story: '',
      deaths: [ 'Chapter 10: If Mike is attacked by a Wendigo due to a failed QTE, he can spark the lighter, ignited the cabin in flames.',
      			'Chapter 10: Sam can run for the switch by her first choice, resulting in everyone in cabin (including Mike) to burn in the flames.'
      ]
  	},
    { id: 2, name: 'Sam', 
      img: 'img/Sam.png', imgDetail: 'img/Sam-Detail.png',
      quote: 'No need for violence, just a little harmless fun! We\'re out in the woods! It\'s spooky! Come on, let\'s get into the spirit of things!',
      story: '',
      deaths: [ 'Chapter 10: If Sam fails a "Don\'t, she will be immediatly killed by Wendigo.'
      ]
    },
    { id: 3, name: 'Josh', 
      img: 'img/Josh.png', imgDetail: 'img/Josh-Detail.png',
  	  quote: 'I DID something! I made you believe in the world I created, and I showed you parts of yourself you were too afraid to visit!',
      story: '',
      deaths: [ 'Chapter 10: Josh can only be killed in a very particular way. If Sam failes to find Hannah\'s journal to the right of the water \
      			 area in the mines, Josh will not be informed of Hannah\'s transformation, and will fail to recognize her, leading her to kill him.'
      ]
    },
    { id: 4, name: 'Emily', 
      img: 'img/Emily.png', imgDetail: 'img/Emily-Detail.png',
      quote: 'Fine. Fine you\'re right. Get everyone else together. But if there\'s a maniac running around I think we need to get some help too, \
      		  right? Not just wait around?',
      story: 'Emily is known to the group as the meaner friend. She tends to start more arguments and will speak her mind about the situation she is placed in.',
      deaths: [ 'Chapter 8: In the mines while running away from a Wendigo, Emily will run into an elevator shaft. If Emily doesn\'t pull the leaver, \
      			 a Wendigo will gouge her eyes out. immediatly after, Emily will face a series of QTEs. If she fails any of some, the Wendigo will either catch \
      			 up with her and kill her in the same way, or bite her. This bite won\'t kill her, but it leads to confrontation in the future.',
      			'Chapter 8: After finishing the series of QTEs in the chase, Emily will have a choice to either stay on the lever or leap off right. \
      			 Choosing to stay on the level and failing the next 2 QTEs will cause Emily to fall into a grinder, ripping her body to shreads.',
      			'Chapter 8: If Emily was bitten earlier, the group will consider her a threat and Mike is given the option to shoot her. Here, he can shoot \
      			 in front of the group, or walk away from it, leaving Emily alive.',
      			'Chapter 10: All of Emily\'s possible deaths from Chapter 10 would result in a decision from Sam. The first decision Sam will have will be \
      			 to save a character, or run for the switch when everyone is in the cabin in the final moment. Running for the switch results in Sam flicking \
      			 the light switch, engulfing the cabin in flames.',
      			'Chapter 10: Although not a good idea, Sam can decide to do nothing for that decision. If she does nothing, the Wendigo will walk close to \
      			 Emily, in which she will panic and the Wendigo will kill her.'
      ]
    },
    { id: 5, name: 'Chris', 
      img: 'img/Chris.png', imgDetail: 'img/Chris-Detail.png',
      quote: 'If these things... Wendigos... are, or, were human... do they still have some aspect of humanity in them?',
      story: '',
      deaths: [ 'Chapter 8: There are multiple ways for Chris to die in the scene where him and the stranger go out looking for Josh. First way Chris can die \
      			 is by failing the QTEs after the Wendigo kills the stranger. Missing these will cause the Wendigo to decapitate Chris. Failing to shoot the \
      			 Wendigo or barrels in the shooting QTEs will after cause the same demise for Chris.',
      			'Chapter 8: The other death possibility in this chapter can be determined earlier. In chapter 6, Ashley and Chris are in a trap, which leaves \
      			 Chris to decide to shoot himself, Ashley or not shoot at all. If Chris shoots Ashley, she will resent him and cause his death here. You will be \
      			 able to tell early if she is going to allow him to die. When leaving the cabin with the stranger, if Ashley gives him a cold look, he will die \
      			 no matter what. When running away from the Wendigo after successfully landing all the QTEs, Ashley will keep the door locked so Chris can\'t get in \
      			 which allows the Wendigo to catch up with him.',
      			'Chapter 9: If Ashley died from opening the latch after investigating the voice, and Chris will hear the same voice and be killed by decapitation \
      			 by the same Wendigo. Ashley opening the latch will always result in Chris\'s death.',
      			'Chapter 9: If Ashley doesn\'t open the latch, Chris will come to the same decision, to investigate the voice OR rejoin the group. Investigating the \
      			voice lead Chris to opening a latch, letting a Wendigo out to kill him.',
      			'Chris can\'t die in Chapter 10. If he survives until that point, he will survive no matter what.'
      ]
    },
    { id: 6, name: 'Ashley', 
      img: 'img/Ashley.png', imgDetail: 'img/Ashley-Detail.png',
      quote: 'You can\'t do it, Chris. It should be me! You chose to save me before, let me choose this time... Let me choose to save you. If I do one last thing in my life let me do this',
      story: '',
      deaths: [ 'Chapter 9: When Ashley is walking through the manhole, she will hear a voice and have the option to investigate the voice or rejoin the group. \
      			 Investigating the voice leads Ashley left into a room with a trapdoor and banging coming from the other side of it. There are 3 possible ways \
      			 Ashley can go about this. She can walk right past it, ensuring her survival in this chapter. She can go up to the trap and unla',
      			'',
      			'',
      			'',
      			''
      ]
  	},
    { id: 7, name: 'Matt', 
      img: 'img/Matt.png', imgDetail: 'img/Matt-Detail.png'},
    { id: 8, name: 'Jess', 
      img: 'img/Jessica.png', imgDetail: 'img/Jessica-Detail.png'},
    { id: 9, name: 'Beth', 
      img: 'img/Beth.png', imgDetail: 'img/Beth-Detail.png'},
    { id: 10, name: 'Hannah', 
      img: 'img/Hannah.png', imgDetail: 'img/Hannah-Detail.png'},
    { id: 11, name: 'Dr. Hill', 
      img: 'img/Hill.png', imgDetail: 'img/Hill-Detail.png'},
    { id: 12, name: 'Flamethrower Guy', 
      img: 'img/Stranger.png', imgDetail: 'img/Stranger-Detail.png'},
    { id: 13, name: 'Wendigos', 
      img: 'img/Wendigo.png', imgDetail: 'img/Wendigo-Detail.png'}
  ];

  return {
    all: function() {
      return characters;
    },
    get: function(characterId) {
      for (var i = 0; i < characters.length; i++) {
        if (characters[i].id === parseInt(characterId)) {
          return characters[i];
        }
      }
      return null;
    }
  };
})

.factory('Totems', function() {

  var totems = [
    { id: 1, 
      type: 'Death', 
      info: 'Death Totems foretell a possible death of the current players character',
      quote: 'Black butterflies prophesied the dreamers death',
      totem1: 1, totem1Chapter: 'Prolouge', totem1Location: 'On ground while following Hannah', totem1Found: 'Beth', totem1Contents: 'Beth and Hannah falling to their deaths',
      totem2: 2, totem2Chapter: 'Chapter 5', totem2Location: 'Near benches by cable car station', totem2Found: 'Matt', totem2Contents: 'Matt falling to his death from cliff',
      totem3: 3, totem3Chapter: 'Chapter 5,9', totem3Location: 'Staircase in chapel, back left corner', totem3Found: 'Mike', totem3Contents: 'Mike lighting a fire upon himself',
      totem4: 4, totem4Chapter: 'Chapter 4,8', totem4Location: 'Past clown scare, next to pigs head', totem4Found: 'Chris', totem4Contents: 'Chris getting hanged by an attacker',
      totem5: 5, totem5Chapter: 'Chapter 7', totem5Location: 'Past flying cart, in back of collapsed tunnel', totem5Found: 'Emily', totem5Contents: 'Emily getting shot in eye',
      totem6: 6, totem6Chapter: 'Chapter 9', totem6Location: 'Past rock wall, straight ahead on walkway', totem6Found: 'Sam', totem6Contents: 'Sam being impaled by a Wendigo'
    },
    { id: 2, 
      type: 'Danger',
      info: 'Danger totems foretell a dangerous event that a character might experience',
      quote: 'Red butterflies warned of dangerous events',
      totem1: 1, totem1Chapter: 'Chapter 2', totem1Location: 'Near generator', totem1Found: 'Mike', totem1Contents: 'The Psycho punching Ashley unconscious',
      totem2: 2, totem2Chapter: 'Chapter 3', totem2Location: 'In forest, left of frozen truck', totem2Found: 'Mike', totem2Contents: 'A horde of deer',
      totem3: 3, totem3Chapter: 'Chapter 7', totem3Location: 'Restore power to lift, near wooden doorway', totem3Found: 'Emily', totem3Contents: 'A lanky arm trying to grab Mike',
      totem4: 4, totem4Chapter: 'Chapter 9', totem4Location: 'In sanatorium chapel, to the left in a room in the northwest corner', totem4Found: 'Mike', totem4Contents: 'Mike being attacked by a Wendigo',
      totem5: 5, totem5Chapter: 'Chapter 9', totem5Location: 'In tunnels, in left alcove', totem5Found: 'Ashley', totem5Contents: 'Josh turning into a Wendigo',
      totem6: 6, totem6Chapter: 'Chapter 10', totem6Location: 'After leaving caves, keep right on split path', totem6Found: 'Sam', totem6Contents: 'A Wendigo leaping inside the cabin, chasing survivors' 
    },
    { id: 3, 
      type: 'Loss',
      info: 'Loss foretells a possible death of another character',
      quote: 'Brown butterflies foretold of tragedies affecting friends',
      totem1: 1, totem1Chapter: 'Chapter 2', totem1Location: 'Straight ahead upon entering the garage', totem1Found: 'Chris', totem1Contents: 'Emily being killed in a burning explosion',
      totem2: 2, totem2Chapter: 'Chapter 2', totem2Location: 'Upon leaving mine, stay left, near fallen tree', totem2Found: 'Mike', totem2Contents: 'Jess\'s body dropping down elevator shaft with her jaw ripped off',
      totem3: 3, totem3Chapter: 'Chapter 4,8', totem3Location: 'Go right/back of the shed', totem3Found: 'Chris', totem3Contents: 'Ashleys head decapitated falling to the floor',
      totem4: 4, totem4Chapter: 'Chapter 5', totem4Location: 'In sanatorium chapel, to the left in a room in the northwest corner', totem4Found: 'Mike', totem4Contents: 'Matts face getting bashed in',
      totem5: 5, totem5Chapter: 'Chapter 9', totem5Location: 'In tunnels, in left alcove', totem5Found: 'Ashley or Chris', totem5Contents: 'Joshs head being crushed by a Wendigo',
      totem6: 6, totem6Chapter: 'Chapter 10', totem6Location: 'After leaving caves, keep right on split path', totem6Found: 'Jess or Matt', totem6Contents: 'Mike being killed in a burning explosion'  
    },
    { id: 4, 
      type: 'Guidance',
      info: 'Guidance fortells good outcomes the characters should try to achieve',
      quote: 'Yellow butterflies offered visions to help and guide', 
      totem1: 1, totem1Chapter: 'Chapter 1', totem1Location: 'On the ground as Sam is walking towards the cabin', totem1Found: 'Sam', totem1Contents: 'A bird landing on a rock between Mike and Jess, then flying away',
      totem2: 2, totem2Chapter: 'Chapter 2', totem2Location: 'Walk towards camera when playing as Chris, on ground next to Matt', totem2Found: 'Chris', totem1Contents: 'Someone\'s fingers getting caught in a bear trap',
      totem3: 3, totem3Chapter: 'Chapter 3', totem3Location: 'On Ground near tree after Jess scares Mike', totem3Found: 'Mike', totem3Contents: 'Sam lifting herself onto a stone wall next to a water wheel',
      totem4: 4, totem4Chapter: 'Chapter 4', totem4Location: 'At base of staircase in abandoned mine', totem4Found: 'Mike', totem4Contents: 'Mike petting a wolf',
      totem5: 5, totem5Chapter: 'Chapter 5', totem5Location: 'Around edge of cable car station', totem5Found: 'Emily', totem5Contents: 'Emily handing a flare gun to Matt',
      totem6: 6, totem6Chapter: 'Chapter 6', totem6Location: 'Infront of fire tower, near bench', totem6Found: 'Emily', totem6Contents: 'Chris putting a pistol onto a table'
    },
    { id: 5, 
      type: 'Fortune',
      info: 'White fortells possible fortunate outcomes for the characters',
      quote: 'White butterflies brought dreams of luck and good fortune', 
      totem1: 1, totem1Chapter: 'Chapter 2', totem1Location: 'In mines, go straight at fork, by some rubble', totem1Found: 'Mike', totem1Contents: 'Jess waking up, badly beaten on an elevator shaft',
      totem2: 2, totem2Chapter: 'Chapter 5', totem2Location: 'In front of main gate in Sanatorium courtyard', totem2Found: 'Mike', totem2Contents: 'Matt backing away from a banging door',
      totem3: 3, totem3Chapter: 'Chapter 5', totem3Location: 'At the fork near the cliff, near a small cluster of trees', totem3Found: 'Matt', totem3Contents: 'Ashley opening the main cabin door, letting Chris in',
      totem4: 4, totem4Chapter: 'Chapter 8', totem4Location: 'In Mines, look for wooden structures on the right', totem4Found: 'Emily', totem4Contents: 'Mike about to shoot, then turning away',
      totem5: 5, totem5Chapter: 'Chapter 10', totem5Location: 'In mines, to the right right before entering the water', totem5Found: 'Sam', totem5Contents: 'Characters standing up and looking outside of the burning cabin',
      totem6: 6, totem6Chapter: 'Chapter 10', totem6Location: 'When Josh, turn left at the fork when leaving the area', totem6Found: 'Josh', totem6Contents: 'A Wendigo inching closer to Sam as she stands still'
    }
  ];

  return {
    all: function() {
      return totems;
    },
    get: function(totemId) {
      for (var i = 0; i < totems.length; i++) {
        if (totems[i].id === parseInt(totemId)) {
          return totems[i];
        }
      }
      return null;
    }
  };
});