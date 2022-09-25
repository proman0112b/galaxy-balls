interface StringByString {
  [key: string]: any
}

export function trans(locale: any, section: string, element: string) {
  if (Object.keys(translations).indexOf(locale) === -1) {
    locale = 'en'
  }
  return translations[locale][section][element]
}

export const translations: StringByString = {
  en: {
    menu: {
      home: 'Home',
      start: 'Start',
      rules: 'Rules',
      'world-map': 'World Map',
      winner: 'Winner',
      'space-balls': 'SpaceBalls',
      partner: 'Partner',
      transporter: 'Transporter',
      faq: 'Faq',
    },
    home: {
      // game-section
      'for-players': 'For players',
      'winner-prize': 'Winner prize',
      'winner-prize-text': 'Find all 7 Galaxy Balls in your country and win 10.000 €/$',
      'form-team': 'Form team',
      'form-team-text':
        'The Galaxy Balls are scattered all over the country. Form a team and go on an adventurous quest with friends to increase your chances of finding multiple Galaxy Balls and win the top prize of 10,000 € /$',
      price: 'Price for each ball',
      'price-text': 'For every Galaxy Ball you find you will receive 1.000 € /$',

      // rule-section
      rules: 'Rules',
      'rules-text': `At the beginning of the game, 7 Galaxy Balls will be distributed in a country and the approximate location will be published here on the website under "WORLD MAP" as well as in the GalaxyBalls app under "WORLD MAP". 
      With the GalaxyBalls app under "RADAR", the balls can be located and found in the immediate vicinity. Once a GalaxyBalls has been found, the QR code on the ball must be scanned to be registered as an official finder. After all GalaxyBalls have been found, you must return them undamaged to one of our locations to receive your prize money.`,
      'rules-text-1': 'If you find a Galaxy Ball, you will receive 1,000 € /$ /Crypto',
      'rules-text-2': 'If you find all 7 Galaxy Balls you will get even € /$ /Crypto',

      // world-map-section
      'world-map-text': `Here you can see in which country the GalaxyBalls are currently located. But you can also find out in which future country the GalaxyBalls will land.`,

      // winners-section
      'winners-text':
        'Here you can find all the winners who found a GalaxyBalls in your country. Find the balls and get entered in the rangliste. The more GalaxyBalls you find, the more entries you get!',
      'winners-text-1': 'Guaranteed payouts of winnings',
      'winners-text-2': 'You can find all the rules in our terms and conditions',
      'winners-button': 'Full list',

      // conditions-section
      'conditions-title': 'The condition for the start',
      'conditions-text': `Download the GalaxyBalls app and register with your email address. Then all you have to do is find 5 Spaceballs (virtual balls) to fully activate your GalaxyRadar and you're ready to go.`,

      // prize-section
      'prize-title': 'Your prizes are waiting for you',
      'prize-text': `Many galactic orbs are already approaching Earth. Be among the first to go in search of them and get a Galactic Reward!`,

      // faq-section
      'faq-title': 'Here you will find all important and frequently asked questions.',
    },
    transporter: {
      'page-title': 'Transporter',
      desc: `A difficult task can only be undertaken by someone with sufficient experience.`,
      'insta-link': `Galaxy-Transporter`,
      title: `Our official Transporter of GalaxyBalls`,
      details: `He is a master of transportation. 
      <br />
      <br />
      His job is to move the GalaxyBalls from one country to another which he has done dozens of times.He knows exactly what he is doing. He makes sure that the games will run safely and that the rules are followed.
      <br />
      <br />
      For this reason we have hired a transporter as our agent for the distribution of the balls. He alone will make sure that the GalaxyBalls come to you. If you find one of them, you will also meet the transporter.`,
    },
    partners: {
      title: 'partners',
      desc: `Here you can find all the partners who worked on the GalaxyBalls project and supported us with their know-how. Each of them has contributed
      something that made this project unique, and that&apos;s how we got to this result.`,
      'card-1-title': 'Blend',
      'card-1-desc': 'Consulting',
      'card-1-detail': `Blend has helped us in the areas of consulting and ideas. He was one of the first partners in this project and has led to further contacts as with aldin then also with the Transporter.`,
      'card-2-title': 'Aldin',
      'card-2-desc': 'Multitasking',
      'card-2-detail': `Aldin has supported us in the area of consulting, ideas and photography. We also owe him the cooperation with our current transporter. Aldin is very multitasking and a very reliable partner.`,
      'card-3-title': 'Besnik',
      'card-3-desc': 'Transporter',
      'card-3-detail': `Besnik tafallari is not only our official GalaxyBalls transporter but also the best jason statham double in the world. We found him so interesting that a collaboration was inevitable.`,
      'card-4-title': 'Samafro',
      'card-4-desc': 'Videomaker',
      'card-4-detail': `Samafaro has made us some very nice video footage from around the world. His recordings are of the highest quality, as is his work.`,
      'card-5-title': 'John',
      'card-5-desc': 'Designer',
      'card-5-detail': `John is a master of design, we owe him the website, the app and much more. His work is great and it was a pleasure to work with him and have many sleepless nights.`,
      'card-6-title': 'Alicia',
      'card-6-desc': 'Soft Consulting',
      'card-6-detail': `Alicia is a developer in Germany. She was responsible for consulting the project and was a great support for us.`,
      'card-7-title': 'Crowdfunding',
      'card-7-desc': 'List of all Superheroes',
      'card-7-detail': `Here you will soon find all the superheroes who supported us on ulule.com and Kickstarter. Join us!`,
      'card-8-title': 'Do you want to join us?',
      'card-8-desc': 'Contact us!',
      'card-8-detail': `We are always ready to collaborate with other talents. Whether you're a designer, artist, influencer, etc., just drop us a line so we can get you involved in the Galaxyballs project!`,
    },
    'space-balls': {
      // intro section
      title: 'Spaceballs',
      desc: 'The SpaceBalls are here and waiting for you. Experience unique moments in Augment Realty that you have never seen before!',

      // chance section
      'chance-to-win': 'Your chance to win!',
      steps: 'Steps',
      'find-balls': 'Find Balls',
      scan: 'Scan',
      win: 'Win',

      // feature-section
      'about-space-balls': 'Something about SpaceBalls',
      'about-text': 'Three things you should know about the SpaceBalls',
      'find-a-ball': 'What happens when you find a SpaceBall?',
      'find-a-ball-text': 'Three other important things you should know',

      // adventure-section
      'what-else': 'What else',
      'adventure-coming-soon': 'The greatest adventure is coming soon...',
      'adventure-text': `Two games are available in the app and provide more fun and adventure. <br />
      <br />
      The second part of the game is especially interesting for gamers and explorers. Every day new adventures, challenges and very valuable
      SpaceBalls are waiting for you.
      <br />
      <br />
      With some of these Spaceballs you can unlock more game options to increase your level, get ranked and win prizes. Besides, there is also a
      store to help you achieve your goals faster.`,

      // values-section
      rankinglist: 'Rankinglist',
      'rankinglist-desc': 'Be entered in the rankinglist so that everyone can see you.',
      chat: 'Chat',
      'chat-desc': 'Chat with your team and with other users worldwide',
      team: 'Team',
      'team-desc':
        'Form a team to search for the SpaceBalls and GalaxyBalls. This will increase your chance to find all the balls even faster and more efficiently.',
      winners: 'Winners',
      'winners-desc': 'Win great prizes. The more balls you find, the bigger your gifts will be.',

      // final-section
      finally: 'Finally',
      'search-and-enjoy': 'Search and enjoy !',
      'search-and-enjoy-desc':
        'Discover many treasures hidden in each SpaceBall. Great surprises are waiting for you that you have never seen before. Go alone or with your friends on the hunt for many galactic balls and fill your treasure chest. Check the app daily to never miss an opportunity.',
      'you-can-also': 'You can also...',
      'extend-bag': 'Extend your bag to collect more spaceballs',
      'get-your-detector': 'Get your detector and find the rest of the spaceballs',
      'participate-events': 'Participate in special events to find rare SpaceBalls',

      // more-section
      'more-about': 'More about our SpaceBalls',
      'more-about-text': 'Look at all the different SpaceBalls note which are the most valuable ones',
    },
  },

  it: {
    menu: {
      home: 'Home',
      start: 'Inizio',
      rules: 'Regole',
      'world-map': 'World Map',
      winner: 'Vincitori',
      'space-balls': 'SpaceBalls',
      partner: 'Partner',
      transporter: 'Trasportatori',
      faq: 'Faq',
    },
    home: {
      // game-section
      'for-players': 'Per i giocatori',
      'winner-prize': 'Premio per il vincitore',
      'winner-prize-text': 'Trova tutti i 7 Galaxy Ball nel tuo paese e vinci 10.000 € /$',
      'form-team': 'Formare una squadra',
      'form-team-text': `I GalaxyBall sono sparsi in tutto il Paese. Formate una squadra e partite per un'avventurosa ricerca con gli amici per aumentare le possibilità di trovare più GalaxyBall e vincere il primo premio di 10.000 € /$`,
      price: 'Prezzo per ogni pallone',
      'price-text': 'Per ogni GalaxyBall trovata riceverai 1.000 € /$',

      // rule-section
      rules: 'Regole',
      'rules-text': `All'inizio del gioco, 7 Galaxy Ball sono distribuite in un paese e la posizione approssimativa è 
      pubblicata qui sul sito web alla sotto "MAPPA DEL MONDO" e nell'app GalaxyBalls alla sotto "MAPPA DEL MONDO". Con l'app GalaxyBalls alla sotto "RADAR", le palline possono essere localizzate e trovate nelle immediate vicinanze. Una volta trovata una GalaxyBall, il codice QR sulla palla deve essere scansionato per essere registrato come cercatore ufficiale. Dopo aver trovato tutte le GalaxyBall, è necessario restituirle integre a una delle nostre sedi per ricevere il premio.`,
      'rules-text-1': 'Se trovate una Galaxy Ball, riceverete 1.000 €/$/ cripto.',
      'rules-text-2': 'Se trovate tutte e 7 le Galaxy Balls, riceverete anche 10.000 €/$/ cripto.',

      // world-map-section
      'world-map-text': `Qui è possibile vedere in quale paese si trovano attualmente le GalaxyBalls. È anche possibile scoprire in quale paese futuro atterreranno le GalaxyBalls. `,

      // winners-section
      'winners-text':
        'Qui potete trovare tutti i vincitori che hanno trovato un GalaxyBalls nel vostro paese. Trova le GalaxyBalls ed entra nella classifica. Più GalaxyBall si trovano, più ingressi si ottengono!',
      'winners-text-1': 'Pagamento garantito delle vincite',
      'winners-text-2': 'Troverete tutte le regole nei nostri Termini e Condizioni Generali.',
      'winners-button': 'Elenco completo',

      // conditions-section
      'conditions-title': `La condizione per l'avvio`,
      'conditions-text': `Scaricate l'app GalaxyBalls e registratevi con il vostro indirizzo e-mail. A questo punto basta trovare 5 Spaceballs (sfere virtuali) per attivare completamente il GalaxyRadar e si è pronti a partire.`,

      // prize-section
      'prize-title': 'I vostri premi vi aspettano',
      'prize-text': `Molte sfere galattiche si stanno già avvicinando alla Terra. Siate tra i primi ad andare alla loro ricerca e riceverete una ricompensa galattica!`,

      // faq-section
      'faq-title': `Qui troverete tutte le domande più importanti e frequenti.`,
    },
    transporter: {
      'page-title': 'TRASPORTATORE',
      desc: `Un compito difficile può essere svolto solo da chi ha sufficiente esperienza.`,
      'insta-link': `Galaxy Transporter`,
      title: `Il nostro trasportatore ufficiale delle GalaxyBalls`,
      details: `È un maestro del trasporto.
      <br />
      <br />
      Il suo compito è trasportare le GalaxyBall da un Paese all'altro, cosa che ha fatto decine di volte, e sa esattamente cosa sta facendo. Si assicura che i giochi si svolgano in modo sicuro e che le regole vengano rispettate.
      <br />
      <br />
      Per questo motivo, abbiamo assunto un trasportatore come nostro agente per la distribuzione delle GalaxyBall. Solo lui farà in modo che le GalaxyBall arrivino a voi. Quando troverete uno di loro, incontrerete anche il trasportatore.`,
    },
    partners: {
      title: 'Partner',
      desc: `Qui troverete alcuni dei partner che hanno lavorato al progetto GalaxyBalls e che ci hanno messo a disposizione la loro esperienza. Ognuno di loro ha dato un contributo che ha reso questo progetto unico ed è così che siamo arrivati a questo risultato.`,
      'card-1-title': 'Blend',
      'card-1-desc': 'Consultazione',
      'card-1-detail': `Blend ci ha aiutato con consigli e idee. È stato uno dei primi partner di questo progetto e ha portato a ulteriori contatti come con aldin e poi anche con Transporter.`,
      'card-2-title': 'Aldin',
      'card-2-desc': 'Multitasking',
      'card-2-detail': `Aldin ci ha sostenuto con consigli, idee e fotografie. A lui dobbiamo anche la collaborazione con il nostro attuale furgone. Aldin è molto polivalente e un partner molto affidabile.`,
      'card-3-title': 'Besnik',
      'card-3-desc': 'Trasportatore',
      'card-3-detail': `Besnik Tafallari non è solo il nostro trasportatore ufficiale di GalaxyBalls, ma anche il miglior sosia di Jason Statham al mondo. Lo abbiamo trovato così interessante che la collaborazione è stata inevitabile.`,
      'card-4-title': 'Samafro',
      'card-4-desc': 'Creatore di video',
      'card-4-detail': `Samafaro ci ha realizzato dei bellissimi filmati da tutto il mondo. Le sue riprese sono di altissima qualità, così come il suo lavoro.`,
      'card-5-title': 'John',
      'card-5-desc': 'Consultazione',
      'card-5-detail': `John è un maestro del design, gli dobbiamo il sito web, l'app e molto altro. Il suo lavoro è ottimo ed è stato un piacere lavorare con lui e passare molte notti insonni.`,
      'card-6-title': 'Alicia',
      'card-6-desc': 'Consulenza software',
      'card-6-detail': `Alicia è una sviluppatrice in Germania. È stata responsabile della consulenza sul progetto e ci ha dato un grande supporto.`,
      'card-7-title': 'Crowdfunding',
      'card-7-desc': 'Elenco di tutti i supereroi',
      'card-7-detail': `Qui troverete presto tutti i supereroi che ci hanno sostenuto su ulule.com e Kickstarter. Partecipa anche tu!`,
      'card-8-title': 'Volete unirvi a noi?',
      'card-8-desc': 'Contattateci!',
      'card-8-detail': `Siamo sempre disposti a collaborare con altri talenti. Se sei un designer, un artista, un influencer, ecc. contattaci per farti coinvolgere nel progetto Galaxyballs!`,
    },
    'space-balls': {
      // intro section
      title: 'Spaceballs',
      desc: 'Le SpaceBalls sono qui e ti aspettano. Vivete momenti unici che non avete mai visto prima in Augment Realty!',

      // chance section
      'chance-to-win': 'La possibilità di vincere!',
      steps: 'Passi',
      'find-balls': 'Trova',
      scan: 'Scansione',
      win: 'Vincere',

      // feature-section
      'about-space-balls': 'Ulteriori informazioni su SpaceBalls',
      'about-text': 'Tre cose da sapere sulle SpaceBalls',
      'find-a-ball': 'Cosa succede quando si trova una SpaceBall',
      'find-a-ball-text': 'Altre tre cose importanti da sapere',

      // adventure-section
      'what-else': `Cos'altro`,
      'adventure-coming-soon': 'La più grande avventura è in arrivo.... ',
      'adventure-text': `Nell'app sono disponibili due giochi che offrono ancora più divertimento e avventura.  <br />
      <br />
      La seconda parte del gioco è particolarmente interessante per i giocatori e gli esploratori. Ogni giorno ti aspettano nuove avventure, sfide e preziosissime SpaceBall.
      <br />
      <br />
      Con alcune di queste Balle spaziali, è possibile sbloccare altre opzioni di gioco per aumentare il livello, ottenere voci di classifica e vincere premi. C'è anche un negozio che vi aiuterà a raggiungere i vostri obiettivi più velocemente.`,

      // values-section
      rankinglist: 'Classifica ',
      'rankinglist-desc': 'Inseritevi nella classifica in modo che tutti possano vedervi.',
      chat: 'Chat',
      'chat-desc': 'Chatta con il tuo team e con altri utenti in tutto il mondo',
      team: 'Squadra ',
      'team-desc':
        'Formate una squadra per cercare le SpaceBall e le GalaxyBall. Questo aumenta le possibilità di trovare tutte le sfera in modo ancora più rapido ed efficiente.',
      winners: 'Vincitori ',
      'winners-desc': 'Vincere grandi premi. Più sfera troverete, più grandi saranno i vostri regali.',

      // final-section
      finally: 'In conclusione ',
      'search-and-enjoy': 'cercate e divertitevi!',
      'search-and-enjoy-desc': `Scopri tanti tesori nascosti in ogni SpaceBall. Vi aspettano grandi sorprese che non avete mai visto prima. Vai a caccia di tante sfere galattiche da solo o con i tuoi amici e riempi il tuo forziere. Controllate l'app ogni giorno per essere sicuri di non perdere mai un'opportunità.`,
      'you-can-also': 'Potete anche...',
      'extend-bag': 'Espandi la tua borsa per raccogliere altre Spaceballs spaziali',
      'get-your-detector': 'Comprate un rilevatore per trovare le Spaceballs spaziali corrispondenti.',
      'participate-events': 'Partecipate agli eventi speciali per trovare SpaceBalls in edizione limitata.',

      // more-section
      'more-about': 'Per saperne di più sulle nostre SpaceBalls',
      'more-about-text': 'Osservate le diverse SpaceBalls e notate quali sono le più preziose.',
    },
  },

  de: {
    menu: {
      home: 'Home',
      start: 'Inizio',
      rules: 'Regeln',
      'world-map': 'World Map',
      winner: 'Gewinner',
      'space-balls': 'SpaceBalls',
      partner: 'Partner',
      transporter: 'Transporter',
      faq: 'Faq',
    },
    home: {
      // game-section
      'for-players': 'For players',
      'winner-prize': 'Winner prize',
      'winner-prize-text': 'Find all 7 Galaxy Balls in your country and win 10.000 €/$',
      'form-team': 'Form team',
      'form-team-text':
        'The Galaxy Balls are scattered all over the country. Form a team and go on an adventurous quest with friends to increase your chances of finding multiple Galaxy Balls and win the top prize of 10,000 € /$',
      price: 'Price for each ball',
      'price-text': 'For every Galaxy Ball you find you will receive 1.000 € /$',

      // rule-section
      rules: 'Rules',
      'rules-text': `At the beginning of the game, 7 Galaxy Balls will be distributed in a country and the approximate location will be published here on the website under "WORLD MAP" as well as in the GalaxyBalls app under "WORLD MAP". 
      With the GalaxyBalls app under "RADAR", the balls can be located and found in the immediate vicinity. Once a GalaxyBalls has been found, the QR code on the ball must be scanned to be registered as an official finder. After all GalaxyBalls have been found, you must return them undamaged to one of our locations to receive your prize money.`,
      'rules-text-1': 'If you find a Galaxy Ball, you will receive 1,000 € /$ /Crypto',
      'rules-text-2': 'If you find all 7 Galaxy Balls you will get even € /$ /Crypto',

      // world-map-section
      'world-map-text': `Here you can see in which country the GalaxyBalls are currently located. But you can also find out in which future country the GalaxyBalls will land.`,

      // winners-section
      'winners-text':
        'Here you can find all the winners who found a GalaxyBalls in your country. Find the balls and get entered in the rangliste. The more GalaxyBalls you find, the more entries you get!',
      'winners-text-1': 'Guaranteed payouts of winnings',
      'winners-text-2': 'You can find all the rules in our terms and conditions',
      'winners-button': 'Full list',

      // conditions-section
      'conditions-title': 'The condition for the start',
      'conditions-text': `Download the GalaxyBalls app and register with your email address. Then all you have to do is find 5 Spaceballs (virtual balls) to fully activate your GalaxyRadar and you're ready to go.`,

      // prize-section
      'prize-title': 'Your prizes are waiting for you',
      'prize-text': `Many galactic orbs are already approaching Earth. Be among the first to go in search of them and get a Galactic Reward!`,

      // faq-section
      'faq-title': 'Here you will find all important and frequently asked questions.',
    },
    transporter: {
      'page-title': 'Transporter',
      desc: `A difficult task can only be undertaken by someone with sufficient experience.`,
      'insta-link': `Galaxy-Transporter`,
      title: `Our official Transporter of GalaxyBalls`,
      details: `He is a master of transportation. 
      <br />
      <br />
      His job is to move the GalaxyBalls from one country to another which he has done dozens of times.He knows exactly what he is doing. He makes sure that the games will run safely and that the rules are followed.
      <br />
      <br />
      For this reason we have hired a transporter as our agent for the distribution of the balls. He alone will make sure that the GalaxyBalls come to you. If you find one of them, you will also meet the transporter.`,
    },
    partners: {
      title: 'partners',
      desc: `Here you can find all the partners who worked on the GalaxyBalls project and supported us with their know-how. Each of them has contributed
      something that made this project unique, and that&apos;s how we got to this result.`,
      'card-1-title': 'Blend',
      'card-1-desc': 'Consulting',
      'card-1-detail': `Blend has helped us in the areas of consulting and ideas. He was one of the first partners in this project and has led to further contacts as with aldin then also with the Transporter.`,
      'card-2-title': 'Aldin',
      'card-2-desc': 'Multitasking',
      'card-2-detail': `Aldin has supported us in the area of consulting, ideas and photography. We also owe him the cooperation with our current transporter. Aldin is very multitasking and a very reliable partner.`,
      'card-3-title': 'Besnik',
      'card-3-desc': 'Transporter',
      'card-3-detail': `Besnik tafallari is not only our official GalaxyBalls transporter but also the best jason statham double in the world. We found him so interesting that a collaboration was inevitable.`,
      'card-4-title': 'Samafro',
      'card-4-desc': 'Videomaker',
      'card-4-detail': `Samafaro has made us some very nice video footage from around the world. His recordings are of the highest quality, as is his work.`,
      'card-5-title': 'John',
      'card-5-desc': 'Designer',
      'card-5-detail': `John is a master of design, we owe him the website, the app and much more. His work is great and it was a pleasure to work with him and have many sleepless nights.`,
      'card-6-title': 'Alicia',
      'card-6-desc': 'Soft Consulting',
      'card-6-detail': `Alicia is a developer in Germany. She was responsible for consulting the project and was a great support for us.`,
      'card-7-title': 'Crowdfunding',
      'card-7-desc': 'List of all Superheroes',
      'card-7-detail': `Here you will soon find all the superheroes who supported us on ulule.com and Kickstarter. Join us!`,
      'card-8-title': 'Do you want to join us?',
      'card-8-desc': 'Contact us!',
      'card-8-detail': `We are always ready to collaborate with other talents. Whether you're a designer, artist, influencer, etc., just drop us a line so we can get you involved in the Galaxyballs project!`,
    },
    'space-balls': {
      // intro section
      title: 'Spaceballs',
      desc: 'The SpaceBalls are here and waiting for you. Experience unique moments in Augment Realty that you have never seen before!',

      // chance section
      'chance-to-win': 'Your chance to win!',
      steps: 'Steps',
      'find-balls': 'Find Balls',
      scan: 'Scan',
      win: 'Win',

      // feature-section
      'about-space-balls': 'Something about SpaceBalls',
      'about-text': 'Three things you should know about the SpaceBalls',
      'find-a-ball': 'What happens when you find a SpaceBall?',
      'find-a-ball-text': 'Three other important things you should know',

      // adventure-section
      'what-else': 'What else',
      'adventure-coming-soon': 'The greatest adventure is coming soon...',
      'adventure-text': `Two games are available in the app and provide more fun and adventure. <br />
      <br />
      The second part of the game is especially interesting for gamers and explorers. Every day new adventures, challenges and very valuable
      SpaceBalls are waiting for you.
      <br />
      <br />
      With some of these Spaceballs you can unlock more game options to increase your level, get ranked and win prizes. Besides, there is also a
      store to help you achieve your goals faster.`,

      // values-section
      rankinglist: 'Rankinglist',
      'rankinglist-desc': 'Be entered in the rankinglist so that everyone can see you.',
      chat: 'Chat',
      'chat-desc': 'Chat with your team and with other users worldwide',
      team: 'Team',
      'team-desc':
        'Form a team to search for the SpaceBalls and GalaxyBalls. This will increase your chance to find all the balls even faster and more efficiently.',
      winners: 'Winners',
      'winners-desc': 'Win great prizes. The more balls you find, the bigger your gifts will be.',

      // final-section
      finally: 'Finally',
      'search-and-enjoy': 'Search and enjoy !',
      'search-and-enjoy-desc':
        'Discover many treasures hidden in each SpaceBall. Great surprises are waiting for you that you have never seen before. Go alone or with your friends on the hunt for many galactic balls and fill your treasure chest. Check the app daily to never miss an opportunity.',
      'you-can-also': 'You can also...',
      'extend-bag': 'Extend your bag to collect more spaceballs',
      'get-your-detector': 'Get your detector and find the rest of the spaceballs',
      'participate-events': 'Participate in special events to find rare SpaceBalls',

      // more-section
      'more-about': 'More about our SpaceBalls',
      'more-about-text': 'Look at all the different SpaceBalls note which are the most valuable ones',
    },
  },
}
