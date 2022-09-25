interface StringByString {
  [key: string]: any
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
    },
  },
}

export function trans(locale: any, section: string, element: string) {
  return translations[locale][section][element]
}
