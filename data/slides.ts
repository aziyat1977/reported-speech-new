import { SlideData } from '../types';

export const slides: SlideData[] = [
  // ==========================================
  // SEGMENT 1: JUSTICE LEAGUE
  // ==========================================
  {
    id: '1-script',
    segmentTitle: 'JUSTICE LEAGUE',
    slideTitle: 'The Set-Up',
    theme: 'green',
    type: 'script',
    headline: 'BATMAN RECRUITS THE FLASH',
    visualAlt: 'Bruce Wayne and Barry Allen split screen',
    scriptContent: [
      { speaker: 'Bruce', text: 'Barry Allen. Bruce Wayne.' },
      { speaker: 'Barry', text: 'You said that like it explains why there is a total stranger in my place, sitting in the dark, in my second favorite chair.' },
      { speaker: 'Bruce', text: 'Tell me about this.', action: 'Shows a printout of security footage' },
      { speaker: 'Barry', text: 'This is a person who looks exactly like me but who is definitely not me. Very attractive Jewish boy. Somebody who, I don\'t know, stole your pocket watch or railroads?' },
      { speaker: 'Bruce', text: 'I know you have abilities. I just don\'t know what they are.' },
      { speaker: 'Barry', text: 'My special skills include viola, web design, fluent in sign language, gorilla sign language.' },
      { speaker: 'Bruce', text: 'Silica-based quartz sand fabric. Abrasion resistant. Heat resistant.' },
      { speaker: 'Barry', text: 'Yeah, I do competitive ice dancing.' },
      { speaker: 'Bruce', text: 'That’s what they use on the space shuttle to prevent it from burning up on re-entry.' },
      { speaker: 'Barry', text: 'I do very competitive ice dancing. Look, whoever you are looking for, it’s not me.', action: 'Bruce throws a Batarang at Barry. Barry catches it.' },
      { speaker: 'Barry', text: 'You’re the Batman?' },
      { speaker: 'Bruce', text: 'So, you’re fast.' },
      { speaker: 'Barry', text: 'That feels like an oversimplification.' },
      { speaker: 'Bruce', text: 'I’m putting together a team. People with special abilities. You see, I believe enemies are coming.' },
      { speaker: 'Barry', text: 'Stop right there. I’m in.' },
      { speaker: 'Bruce', text: 'You are?' },
      { speaker: 'Barry', text: 'Yeah. I need friends. People are difficult, they require a lot of focus. They have like a rhythm that I haven\'t quite been able to—like brunch! What is brunch? You wait in line for an hour for essentially lunch. I mean... I don\'t know. People are a little slow.' },
      { speaker: 'Bruce', text: 'I’ll try to keep up.' },
      { speaker: 'Barry', text: 'Can I keep this?', action: 'Holding the Batarang' },
    ]
  },
  
  // --- EX 1: BACKSHIFT ---
  {
    id: '1-concept-1',
    segmentTitle: 'JUSTICE LEAGUE',
    slideTitle: 'Concept: Backshift',
    theme: 'green',
    type: 'concept',
    headline: 'THE BACKSHIFT BOOGIE',
    concept: {
      title: 'Direct Present ➡ Reported Past',
      explanation: 'When reporting what someone said in the past, move the verb one step back in time.',
      formula: ['Subject', 'said (that)', 'Subject', 'PAST TENSE VERB'],
      example: { direct: 'I know you have abilities.', reported: 'He said (that) he knew I had abilities.' }
    }
  },
  {
    id: '1-ex-1',
    segmentTitle: 'JUSTICE LEAGUE',
    slideTitle: 'Exercise: Backshift',
    theme: 'green',
    type: 'grammar',
    headline: 'SPEED REPORTING',
    visualAlt: 'Barry Allen',
    exerciseSet: {
      title: 'Ex 1: Present to Past',
      exercises: [
        { pre: 'Barry explained that Bruce ', post: ' (sit) in his second favorite chair.', answer: 'was sitting' },
        { pre: 'Barry claimed that the person in the photo ', post: ' (be) a very attractive Jewish boy.', answer: 'was' },
        { pre: 'Bruce stated that he ', post: ' (know) Barry had abilities.', answer: 'knew' },
        { pre: 'Barry insisted that he ', post: ' (do) competitive ice dancing.', answer: 'did' },
      ]
    }
  },

  // --- EX 2: WH- QUESTIONS ---
  {
    id: '1-concept-2',
    segmentTitle: 'JUSTICE LEAGUE',
    slideTitle: 'Concept: Wh- Questions',
    theme: 'green',
    type: 'concept',
    headline: 'THE INQUISITION',
    concept: {
      title: 'Reporting Wh- Questions',
      explanation: 'Keep the Wh- word. Switch the subject and verb back to normal statement order. Remove "do/does/did".',
      formula: ['Wh-Word', 'Subject', 'Verb (Backshifted)', '(No Question Mark)'],
      example: { direct: 'Who are you?', reported: 'He asked who I was.' }
    }
  },
  {
    id: '1-ex-2',
    segmentTitle: 'JUSTICE LEAGUE',
    slideTitle: 'Exercise: Wh- Questions',
    theme: 'green',
    type: 'grammar',
    headline: 'SPEED REPORTING',
    visualAlt: 'Barry Allen Confused',
    exerciseSet: {
      title: 'Ex 2: Wh- Questions',
      exercises: [
        { pre: 'Bruce asked Barry what his abilities ', post: '.', answer: 'were' },
        { pre: 'Barry wondered why there ', post: ' a total stranger in his house.', answer: 'was' },
        { pre: 'Barry asked Bruce what "brunch" ', post: '.', answer: 'was' },
        { pre: 'Bruce inquired who ', post: ' (steal) the pocket watch.', answer: 'stole' },
      ]
    }
  },

  // --- EX 3: YES/NO & MODALS ---
  {
    id: '1-concept-3',
    segmentTitle: 'JUSTICE LEAGUE',
    slideTitle: 'Concept: Yes/No Questions',
    theme: 'green',
    type: 'concept',
    headline: 'BINARY CHOICES',
    concept: {
      title: 'Reporting Yes/No Questions',
      explanation: 'Use "if" or "whether" to connect the question. Normal word order applies.',
      formula: ['asked', 'if / whether', 'Subject', 'Verb (Backshifted)'],
      example: { direct: 'Are you fast?', reported: 'He asked if I was fast.' }
    }
  },
  {
    id: '1-ex-3',
    segmentTitle: 'JUSTICE LEAGUE',
    slideTitle: 'Exercise: Yes/No & Modals',
    theme: 'green',
    type: 'grammar',
    headline: 'SPEED REPORTING',
    visualAlt: 'Batarang',
    exerciseSet: {
      title: 'Ex 3: Yes/No & Modals',
      exercises: [
        { pre: 'Barry asked Bruce ', post: ' he was the Batman.', answer: 'if' },
        { pre: 'Bruce asked Barry ', post: ' he was fast.', answer: 'whether' },
        { pre: 'Barry asked ', post: ' he could keep the Batarang.', answer: 'if' },
        { pre: 'Bruce promised that he ', post: ' (will) try to keep up.', answer: 'would' },
      ]
    }
  },

  // --- EX 4: COMMANDS ---
  {
    id: '1-concept-4',
    segmentTitle: 'JUSTICE LEAGUE',
    slideTitle: 'Concept: Commands',
    theme: 'green',
    type: 'concept',
    headline: 'DIRECT ORDERS',
    concept: {
      title: 'Reporting Imperatives',
      explanation: 'Change commands into infinitives (to + verb). Use "tell", "order", or "ask".',
      formula: ['told / asked', 'Object', 'TO', 'Infinitive Verb'],
      example: { direct: 'Stop right there.', reported: 'He told him to stop right there.' }
    }
  },
  {
    id: '1-ex-4',
    segmentTitle: 'JUSTICE LEAGUE',
    slideTitle: 'Exercise: Commands',
    theme: 'green',
    type: 'grammar',
    headline: 'DETECTIVE MODE',
    visualAlt: 'Bruce smirking',
    exerciseSet: {
      title: 'Ex 4: Commands (Infinitives)',
      exercises: [
        { pre: 'Bruce ordered Barry ', post: ' (tell) him about the photo.', answer: 'to tell' },
        { pre: 'Barry told Bruce ', post: ' (stop) right there.', answer: 'to stop' },
        { pre: 'The director told the actors ', post: ' (get) into position.', answer: 'to get' },
        { pre: 'Bruce essentially asked Barry ', post: ' (join) the team.', answer: 'to join' },
      ]
    }
  },

  // --- EX 5: EXPLANATIONS ---
  {
    id: '1-concept-5',
    segmentTitle: 'JUSTICE LEAGUE',
    slideTitle: 'Concept: Complex Ideas',
    theme: 'green',
    type: 'concept',
    headline: 'THE EXPLANATION',
    concept: {
      title: 'Reporting Complex Thoughts',
      explanation: 'Use specific reporting verbs like "explain", "admit", or "clarify" + that-clause.',
      formula: ['Subject', 'explained (that)', 'Subject', 'Backshifted Verb'],
      example: { direct: 'I need friends.', reported: 'He admitted that he needed friends.' }
    }
  },
  {
    id: '1-ex-5',
    segmentTitle: 'JUSTICE LEAGUE',
    slideTitle: 'Exercise: Explanations',
    theme: 'green',
    type: 'grammar',
    headline: 'DETECTIVE MODE',
    visualAlt: 'Flash suit',
    exerciseSet: {
      title: 'Ex 5: Explanations',
      exercises: [
        { pre: 'Barry explained that the Speed Force ', post: ' (cause) him to burn calories.', answer: 'caused' },
        { pre: 'He described himself as a "snack hole" because he ', post: ' (eat) so much.', answer: 'ate' },
        { pre: 'Barry clarified that people ', post: ' (require) a lot of focus.', answer: 'required' },
        { pre: 'He explained that brunch ', post: ' (be) just waiting in line.', answer: 'was' },
      ]
    }
  },

  // --- EX 6 & 7: THOUGHTS ---
  {
    id: '1-concept-6',
    segmentTitle: 'JUSTICE LEAGUE',
    slideTitle: 'Concept: Mental States',
    theme: 'green',
    type: 'concept',
    headline: 'MIND READER',
    concept: {
      title: 'Reporting Thoughts & Agreements',
      explanation: 'Report what characters thought, realized, or agreed to, even if they didn\'t say it explicitly.',
      formula: ['Subject', 'realized / thought', '(that)', 'Clause'],
      example: { direct: '(Thinks) He is rich.', reported: 'He realized he was rich.' }
    }
  },
  {
    id: '1-ex-6',
    segmentTitle: 'JUSTICE LEAGUE',
    slideTitle: 'Exercise: Thoughts',
    theme: 'green',
    type: 'grammar',
    headline: 'DETECTIVE MODE',
    visualAlt: 'Justice League Logo',
    exerciseSet: {
      title: 'Ex 6 & 7: Thoughts & Agreements',
      exercises: [
        { pre: 'When Bruce asked if he was in, Barry immediately ', post: ' (agree) to join.', answer: 'agreed' },
        { pre: 'Bruce never explicitly ', post: ' (confirm) it with words.', answer: 'confirmed' },
        { pre: 'Barry ', post: ' (admit) that he needed friends.', answer: 'admitted' },
        { pre: 'Bruce ', post: ' (accept) the challenge.', answer: 'accepted' },
        { pre: 'Barry suddenly ', post: ' (realize) who Bruce was.', answer: 'realized' },
        { pre: 'Bruce ', post: ' (believe) that enemies were coming.', answer: 'believed' },
      ]
    }
  },

  {
    id: '1-key',
    segmentTitle: 'JUSTICE LEAGUE',
    slideTitle: 'The Answer Key',
    theme: 'green',
    type: 'answer-key',
    headline: 'MISSION REPORT: SOLUTIONS',
    solutions: [
      { title: 'Ex 1', text: 'was sitting | was | knew | did' },
      { title: 'Ex 2', text: 'were | was | was | stole' },
      { title: 'Ex 3', text: 'if | whether | if | would' },
      { title: 'Ex 4', text: 'to tell | to stop | to get | to join' },
      { title: 'Ex 5', text: 'caused | ate | required | was' },
      { title: 'Ex 6/7', text: 'agreed | confirmed | admitted | realized | believed' },
    ]
  },


  // ==========================================
  // SEGMENT 2: HYUNDAI X UNCHARTED
  // ==========================================
  {
    id: '2-script',
    segmentTitle: 'HYUNDAI x UNCHARTED',
    slideTitle: 'The Set-Up',
    theme: 'gold',
    type: 'script',
    headline: 'THE CAR WASH CHRONICLES',
    visualAlt: 'Nathan Drake with muddy car',
    scriptContent: [
      { speaker: 'Action', text: 'Nathan pulls up in a very muddy car.' },
      { speaker: 'Worker 1', text: 'Nathan Drake. Not again.' },
      { speaker: 'Nathan', text: 'Treasure hunting. Dirty business.' },
      { speaker: 'Worker 2', text: 'Yes, very.' },
      { speaker: 'Action', text: 'Nathan walks into the shop while they wash the car. He sees a claw machine.' },
      { speaker: 'Nathan', text: 'This is broken.' },
      { speaker: 'Clerk', text: 'It’s not broken.' },
      { speaker: 'Nathan', text: 'It is broken.' },
      { speaker: 'Clerk', text: 'No, that’s how it works.' },
      { speaker: 'Action', text: 'Nathan sits in the massage chair. A spider crawls on the armrest.' },
      { speaker: 'Worker 2', text: 'Mr. Drake! Mr. Drake! Car\'s ready!' },
      { speaker: 'Action', text: 'Nathan wakes up, gets in the car, and hands the worker a gold bar.' },
      { speaker: 'Nathan', text: 'Thanks.' },
      { speaker: 'Worker 1', text: 'See ya.' },
    ]
  },
  
  // --- EX 1: COMPLAINTS ---
  {
    id: '2-concept-1',
    segmentTitle: 'HYUNDAI x UNCHARTED',
    slideTitle: 'Concept: Complaints',
    theme: 'gold',
    type: 'concept',
    headline: 'COMPLAINT DEPT',
    concept: {
      title: 'Reporting Complaints',
      explanation: 'Use "complained", "muttered", or "explained". Remember to backshift "is" to "was".',
      formula: ['Subject', 'complained (that)', 'Subject', 'WAS / WERE ...'],
      example: { direct: 'This is broken.', reported: 'He complained that it was broken.' }
    }
  },
  {
    id: '2-ex-1',
    segmentTitle: 'HYUNDAI x UNCHARTED',
    slideTitle: 'Exercise: Complaints',
    theme: 'gold',
    type: 'grammar',
    headline: 'WASH & LEARN',
    visualAlt: 'Claw Machine',
    exerciseSet: {
      title: 'Ex 1: Complaints',
      exercises: [
        { pre: 'The worker muttered that it ', post: ' (be) Nathan Drake again.', answer: 'was' },
        { pre: 'Nathan explained that treasure hunting ', post: ' (be) a dirty business.', answer: 'was' },
        { pre: 'Nathan complained that the claw machine ', post: ' (be) broken.', answer: 'was' },
        { pre: 'The clerk insisted that the machine ', post: ' (be / negative) broken.', answer: 'wasn\'t' },
      ]
    }
  },

  // --- EX 2: SHORT ANSWERS ---
  {
    id: '2-concept-2',
    segmentTitle: 'HYUNDAI x UNCHARTED',
    slideTitle: 'Concept: Short Responses',
    theme: 'gold',
    type: 'concept',
    headline: 'SHORT & SWEET',
    concept: {
      title: 'Reporting Short Answers',
      explanation: 'Instead of repeating the whole sentence, use verbs like "agreed", "denied", or "replied".',
      formula: ['Subject', 'agreed / denied', '(that)', 'It was...'],
      example: { direct: 'No, it\'s not.', reported: 'He denied that it was.' }
    }
  },
  {
    id: '2-ex-2',
    segmentTitle: 'HYUNDAI x UNCHARTED',
    slideTitle: 'Exercise: Short Answers',
    theme: 'gold',
    type: 'grammar',
    headline: 'WASH & LEARN',
    visualAlt: 'Car Wash',
    exerciseSet: {
      title: 'Ex 2: Short Answers',
      exercises: [
        { pre: 'When Nathan said it was a dirty business, the worker ', post: ' that it was.', answer: 'agreed' },
        { pre: 'When Nathan claimed the machine was broken, the clerk ', post: ' it.', answer: 'denied' },
        { pre: 'The worker announced that the car ', post: ' (be) ready.', answer: 'was' },
        { pre: 'Nathan thanked them and ', post: ' (give) them a gold bar.', answer: 'gave' },
      ]
    }
  },

  // --- EX 3: REAL FACTS ---
  {
    id: '2-concept-3',
    segmentTitle: 'HYUNDAI x UNCHARTED',
    slideTitle: 'Concept: General Truths',
    theme: 'gold',
    type: 'concept',
    headline: 'HARD FACTS',
    concept: {
      title: 'Reporting Facts & States',
      explanation: 'Even if something is still true (like how a machine works), we usually backshift in stories.',
      formula: ['Subject', 'said', 'it', 'WAS (General Truth)'],
      example: { direct: 'That is how it works.', reported: 'He said that was how it worked.' }
    }
  },
  {
    id: '2-ex-3',
    segmentTitle: 'HYUNDAI x UNCHARTED',
    slideTitle: 'Exercise: Facts',
    theme: 'gold',
    type: 'grammar',
    headline: 'WASH & LEARN',
    visualAlt: 'Spider',
    exerciseSet: {
      title: 'Ex 3: "Real" Facts',
      exercises: [
        { pre: 'The clerk explained that that ', post: ' (be) how the machine worked.', answer: 'was' },
        { pre: 'Nathan realized that treasure hunting ', post: ' (make) the car very dirty.', answer: 'made' },
        { pre: 'The commercial showed that the car ', post: ' (look) brand new.', answer: 'looked' },
        { pre: 'The spider probably thought the car ', post: ' (be) a nice place.', answer: 'was' },
      ]
    }
  },

  // --- EX 4: IMPLICIT COMMANDS ---
  {
    id: '2-concept-4',
    segmentTitle: 'HYUNDAI x UNCHARTED',
    slideTitle: 'Concept: Implicit Commands',
    theme: 'gold',
    type: 'concept',
    headline: 'UNSPOKEN ORDERS',
    concept: {
      title: 'Reporting Intent as Command',
      explanation: 'Sometimes a statement ("Car\'s ready!") is actually a command ("Come get it!"). Report the intent.',
      formula: ['called out', 'TO', 'remind / tell', 'him'],
      example: { direct: 'Car\'s ready!', reported: 'He called out to remind him.' }
    }
  },
  {
    id: '2-ex-4',
    segmentTitle: 'HYUNDAI x UNCHARTED',
    slideTitle: 'Exercise: Implicit Commands',
    theme: 'gold',
    type: 'grammar',
    headline: 'GOLD LEVEL',
    visualAlt: 'Gold Bar',
    exerciseSet: {
      title: 'Ex 4: Implicit Commands',
      exercises: [
        { pre: 'The worker called out to ', post: ' (remind) Mr. Drake.', answer: 'remind' },
        { pre: 'The sign on the wall warned customers ', post: ' (stop) their engines.', answer: 'to stop' },
        { pre: 'Nathan likely wanted the workers ', post: ' (clean) the mud off.', answer: 'to clean' },
        { pre: 'The clerk told Nathan ', post: ' (leave) the machine alone.', answer: 'to leave' },
      ]
    }
  },

  // --- EX 5: CONTRADICTIONS ---
  {
    id: '2-concept-5',
    segmentTitle: 'HYUNDAI x UNCHARTED',
    slideTitle: 'Concept: Arguments',
    theme: 'gold',
    type: 'concept',
    headline: 'OBJECTION!',
    concept: {
      title: 'Reporting Arguments',
      explanation: 'Use "insisted", "argued", or "denied" to capture the conflict.',
      formula: ['Subject', 'insisted (that)', 'Subject', 'Verb'],
      example: { direct: 'It is NOT broken.', reported: 'He insisted it wasn\'t broken.' }
    }
  },
  {
    id: '2-ex-5',
    segmentTitle: 'HYUNDAI x UNCHARTED',
    slideTitle: 'Exercise: Contradictions',
    theme: 'gold',
    type: 'grammar',
    headline: 'GOLD LEVEL',
    visualAlt: 'Nathan Arguing',
    exerciseSet: {
      title: 'Ex 5: Contradictions',
      exercises: [
        { pre: 'Nathan claimed it was broken, but the clerk ', post: ' (insist) that it wasn\'t.', answer: 'insisted' },
        { pre: 'The clerk argued that that ', post: ' (be) simply how it worked.', answer: 'was' },
        { pre: 'Nathan ', post: ' (deny) that the machine was working.', answer: 'denied' },
        { pre: 'They ', post: ' (argue) about whether it was functional.', answer: 'argued' },
      ]
    }
  },

  // --- EX 6 & 7: OBSERVATIONS ---
  {
    id: '2-concept-6',
    segmentTitle: 'HYUNDAI x UNCHARTED',
    slideTitle: 'Concept: Sensory Reporting',
    theme: 'gold',
    type: 'concept',
    headline: 'I SPY',
    concept: {
      title: 'Reporting Observations',
      explanation: 'Verbs like "notice", "see", "observe" are used to report what characters perceived.',
      formula: ['Subject', 'noticed / saw', '(that)', 'Something HAPPENED'],
      example: { direct: '(Sees spider)', reported: 'He saw a spider crawling.' }
    }
  },
  {
    id: '2-ex-6',
    segmentTitle: 'HYUNDAI x UNCHARTED',
    slideTitle: 'Exercise: Observations',
    theme: 'gold',
    type: 'grammar',
    headline: 'GOLD LEVEL',
    visualAlt: 'Spider on chair',
    exerciseSet: {
      title: 'Ex 6 & 7: Observations',
      exercises: [
        { pre: 'The worker ', post: ' (notice) that Nathan was back.', answer: 'noticed' },
        { pre: 'Nathan ', post: ' (see) a spider crawling.', answer: 'saw' },
        { pre: 'The staff ', post: ' (observe) that the car was muddy.', answer: 'observed' },
        { pre: 'Nathan ', post: ' (find) that the machine was frustrating.', answer: 'found' },
      ]
    }
  },

  {
    id: '2-key',
    segmentTitle: 'HYUNDAI x UNCHARTED',
    slideTitle: 'The Answer Key',
    theme: 'gold',
    type: 'answer-key',
    headline: 'TREASURE FOUND: SOLUTIONS',
    solutions: [
      { title: 'Ex 1', text: 'was | was | was | wasn\'t' },
      { title: 'Ex 2', text: 'agreed | denied | was | gave' },
      { title: 'Ex 3', text: 'was | made | looked | was' },
      { title: 'Ex 4', text: 'to remind | to stop | to clean | to leave' },
      { title: 'Ex 5', text: 'insisted | was | denied | argued' },
      { title: 'Ex 6/7', text: 'noticed | saw | observed | found' },
    ]
  },


  // ==========================================
  // SEGMENT 3: AUDI SPIDER-MAN
  // ==========================================
  {
    id: '3-script',
    segmentTitle: 'AUDI SPIDER-MAN',
    slideTitle: 'The Set-Up',
    theme: 'blue',
    type: 'script',
    headline: 'DRIVER\'S ED: HERO EDITION',
    visualAlt: 'Spider-man driving test',
    scriptContent: [
      { speaker: 'Instructor', text: 'I got a Parker Peter. Is there a Parker Peter?' },
      { speaker: 'Peter', text: 'I’m Parker... Peter Parker.' },
      { speaker: 'Instructor', text: 'Peter Parker. Okay. Test time, baby. Let\'s go. Sweet ride for a 15-year-old kid.' },
      { speaker: 'Peter', text: 'It’s actually my friend Tony’s. It’s a prototype.' },
      { speaker: 'Instructor', text: 'Wish I had a friend named Tony. Put your hands at 9 and 3.' },
      { speaker: 'Peter', text: 'I thought it was 10 and 2?' },
      { speaker: 'Instructor', text: 'It was 10 and 2. But now it’s 9 and 3. You are going to lose five points for that.' },
      { speaker: 'Peter', text: 'What? I lose five points for that?' },
      { speaker: 'Action', text: 'Car brakes automatically.' },
      { speaker: 'Instructor', text: 'Whoa! Whoa! Don\'t be a hero.' },
      { speaker: 'Peter', text: 'A superhero?' },
      { speaker: 'Instructor', text: 'Let\'s carry on.' },
      { speaker: 'Action', text: 'Driving fast.' },
      { speaker: 'Instructor', text: 'Slow down. Slow down! Whoa, whoa, whoa! Don\'t be a hero!' },
      { speaker: 'Action', text: 'Peter parallel parks using the Audi AI button without hands.' },
      { speaker: 'Instructor', text: 'Hey, hey, hey! Don\'t do that.' },
      { speaker: 'Peter', text: 'Sorry, sorry.' },
      { speaker: 'Action', text: 'Bank robbers run out. Peter puts on his mask.' },
      { speaker: 'Peter', text: 'Hold on.' },
      { speaker: 'Instructor', text: 'It’s going to be close, Peter Parker. You fail, I fail. Minus one point for eyeballing me.' },
      { speaker: 'Peter', text: 'Did I pass?' },
      { speaker: 'Instructor', text: 'I passed you. Just go.' },
    ]
  },
  
  // --- EX 1: NEGATIVE COMMANDS ---
  {
    id: '3-concept-1',
    segmentTitle: 'AUDI SPIDER-MAN',
    slideTitle: 'Concept: Negative Commands',
    theme: 'blue',
    type: 'concept',
    headline: 'DO NOT ENTER',
    concept: {
      title: 'Reporting Prohibitions',
      explanation: 'For negative commands ("Don\'t do that!"), use "told/warned" + "NOT to" + verb.',
      formula: ['told', 'him', 'NOT TO', 'Verb'],
      example: { direct: 'Don\'t be a hero!', reported: 'He told him not to be a hero.' }
    }
  },
  {
    id: '3-ex-1',
    segmentTitle: 'AUDI SPIDER-MAN',
    slideTitle: 'Exercise: Commands',
    theme: 'blue',
    type: 'grammar',
    headline: 'ROAD RULES',
    visualAlt: 'Instructor Yelling',
    exerciseSet: {
      title: 'Ex 1: Positive & Negative Commands',
      exercises: [
        { pre: 'The instructor told Peter ', post: ' (put) his hands at 9 and 3.', answer: 'to put' },
        { pre: 'He warned Peter ', post: ' (not / be) a hero.', answer: 'not to be' },
        { pre: 'He shouted at Peter ', post: ' (slow) down.', answer: 'to slow' },
        { pre: 'He yelled at him ', post: ' (not / do) that.', answer: 'not to do' },
      ]
    }
  },

  // --- EX 2: UNCERTAINTY ---
  {
    id: '3-concept-2',
    segmentTitle: 'AUDI SPIDER-MAN',
    slideTitle: 'Concept: Uncertainty',
    theme: 'blue',
    type: 'concept',
    headline: 'CONFUSION PROTOCOL',
    concept: {
      title: 'Reporting Confusion',
      explanation: 'Use "wondered", "asked", or "thought" to express uncertainty. Backshift applies!',
      formula: ['He', 'thought', '(that)', 'it WAS...'],
      example: { direct: 'I thought it was 10 and 2.', reported: 'He said he thought it was 10 and 2.' }
    }
  },
  {
    id: '3-ex-2',
    segmentTitle: 'AUDI SPIDER-MAN',
    slideTitle: 'Exercise: Uncertainty',
    theme: 'blue',
    type: 'grammar',
    headline: 'ROAD RULES',
    visualAlt: 'Peter Confused',
    exerciseSet: {
      title: 'Ex 2: Uncertainty',
      exercises: [
        { pre: 'Peter replied that he ', post: ' (think) the rule was 10 and 2.', answer: 'thought' },
        { pre: 'The instructor asked if there ', post: ' (be) a Parker Peter.', answer: 'was' },
        { pre: 'Peter asked if he ', post: ' (lose) five points.', answer: 'lost' },
        { pre: 'Peter asked what he ', post: ' (say) about heroes.', answer: 'had said' },
      ]
    }
  },

  // --- EX 3: FUTURE IN THE PAST ---
  {
    id: '3-concept-3',
    segmentTitle: 'AUDI SPIDER-MAN',
    slideTitle: 'Concept: Future in Past',
    theme: 'blue',
    type: 'concept',
    headline: 'PREMONITIONS',
    concept: {
      title: 'Reporting the Future',
      explanation: '"Will" becomes "Would". "Is going to" becomes "Was going to".',
      formula: ['said', 'it', 'WOULD / WAS GOING TO', 'Happen'],
      example: { direct: 'You are going to lose points.', reported: 'He said he was going to lose points.' }
    }
  },
  {
    id: '3-ex-3',
    segmentTitle: 'AUDI SPIDER-MAN',
    slideTitle: 'Exercise: Future',
    theme: 'blue',
    type: 'grammar',
    headline: 'ROAD RULES',
    visualAlt: 'Audi Dashboard',
    exerciseSet: {
      title: 'Ex 3: Future in the Past',
      exercises: [
        { pre: 'The instructor stated that Peter ', post: ' (be going to) lose points.', answer: 'was going to' },
        { pre: 'He warned that it ', post: ' (be going to) be close.', answer: 'was going to' },
        { pre: 'The instructor wished that he ', post: ' (have) a friend named Tony.', answer: 'had' },
        { pre: 'Peter probably hoped he ', post: ' (will / pass) the test.', answer: 'would pass' },
      ]
    }
  },

  // --- EX 4: MIXED REPORTING ---
  {
    id: '3-concept-4',
    segmentTitle: 'AUDI SPIDER-MAN',
    slideTitle: 'Concept: Mixed Reporting',
    theme: 'blue',
    type: 'concept',
    headline: 'COMBO MOVE',
    concept: {
      title: 'Mixing Statements & Commands',
      explanation: 'You can mix report types. "He said (that)... and told him to..."',
      formula: ['He said', 'it WAS...', 'and told him', 'TO GO'],
      example: { direct: 'I passed you. Just go.', reported: 'He said he had passed him and told him to go.' }
    }
  },
  {
    id: '3-ex-4',
    segmentTitle: 'AUDI SPIDER-MAN',
    slideTitle: 'Exercise: Mixed',
    theme: 'blue',
    type: 'grammar',
    headline: 'ADVANCED MANEUVERS',
    visualAlt: 'Spider-Man Web',
    exerciseSet: {
      title: 'Ex 4: Mixed Reporting',
      exercises: [
        { pre: 'Peter mentioned that the car ', post: ' (belong) to Tony.', answer: 'belonged' },
        { pre: 'The instructor mumbled that he ', post: ' (notice) everything.', answer: 'noticed' },
        { pre: 'After the fight, Peter asked if he ', post: ' (pass).', answer: 'passed' },
        { pre: 'The instructor simply told him ', post: ' (go).', answer: 'to go' },
      ]
    }
  },

  // --- EX 5: THREATS ---
  {
    id: '3-concept-5',
    segmentTitle: 'AUDI SPIDER-MAN',
    slideTitle: 'Concept: Threats',
    theme: 'blue',
    type: 'concept',
    headline: 'DANGER ZONE',
    concept: {
      title: 'Reporting Threats & Warnings',
      explanation: 'Use strong verbs like "threaten", "warn", or "caution".',
      formula: ['He', 'threatened', 'TO', 'Fail Him'],
      example: { direct: 'You fail, I fail.', reported: 'He threatened to fail him if he failed.' }
    }
  },
  {
    id: '3-ex-5',
    segmentTitle: 'AUDI SPIDER-MAN',
    slideTitle: 'Exercise: Threats',
    theme: 'blue',
    type: 'grammar',
    headline: 'ADVANCED MANEUVERS',
    visualAlt: 'Instructor Angry',
    exerciseSet: {
      title: 'Ex 5: Threats & Warnings',
      exercises: [
        { pre: 'The instructor ', post: ' (threaten) to fail Peter.', answer: 'threatened' },
        { pre: 'He ', post: ' (warn) Peter about eyeballing.', answer: 'warned' },
        { pre: 'He ', post: ' (remind) Peter about the rules.', answer: 'reminded' },
        { pre: 'He ', post: ' (caution) Peter not to be a hero.', answer: 'cautioned' },
      ]
    }
  },

  // --- EX 6 & 7: APOLOGIES ---
  {
    id: '3-concept-6',
    segmentTitle: 'AUDI SPIDER-MAN',
    slideTitle: 'Concept: Emotion',
    theme: 'blue',
    type: 'concept',
    headline: 'SORRY NOT SORRY',
    concept: {
      title: 'Reporting Apologies',
      explanation: 'Use "apologize for + ing" or "say sorry".',
      formula: ['He', 'apologized', 'FOR', 'Making a Mistake'],
      example: { direct: 'Sorry, sorry.', reported: 'He apologized for the mistake.' }
    }
  },
  {
    id: '3-ex-6',
    segmentTitle: 'AUDI SPIDER-MAN',
    slideTitle: 'Exercise: Apologies',
    theme: 'blue',
    type: 'grammar',
    headline: 'ADVANCED MANEUVERS',
    visualAlt: 'Peter Sorry',
    exerciseSet: {
      title: 'Ex 6 & 7: Apologies & Exclamations',
      exercises: [
        { pre: 'Peter ', post: ' (apologize) for the hands.', answer: 'apologized' },
        { pre: 'Peter said "Sorry" because he ', post: ' (make) a mistake.', answer: 'had made' },
        { pre: 'The instructor didn\'t ', post: ' (apologize).', answer: 'apologize' },
        { pre: 'Peter felt bad and ', post: ' (say) sorry.', answer: 'said' },
      ]
    }
  },

  {
    id: '3-key',
    segmentTitle: 'AUDI SPIDER-MAN',
    slideTitle: 'The Answer Key',
    theme: 'blue',
    type: 'answer-key',
    headline: 'LICENSE GRANTED: SOLUTIONS',
    solutions: [
      { title: 'Ex 1', text: 'to put | not to be | to slow | not to do' },
      { title: 'Ex 2', text: 'had thought | was | lost | had said' },
      { title: 'Ex 3', text: 'was going to | was going to | had | would pass' },
      { title: 'Ex 4', text: 'belonged | noticed | had passed | to go' },
      { title: 'Ex 5', text: 'threatened | warned | reminded | cautioned' },
      { title: 'Ex 6/7', text: 'apologized | had made | apologize | said' },
    ]
  },
];