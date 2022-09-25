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
  },
}
