const log = console.log

let page = new Vue({
  el: '.page-container', // het element vanuit waar je gaat werken
  data: {
    cards: [ // een array met array's met daarin alle nummers van kaarten (op dit moment is alles 0 omdat je die random gaat maken)
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
    ],
    players: ['Speler 1','Speler 2'] // hier maak ik 2 players aan zodat je later nog eventueel kan klooien met vershillende namen
  },
  methods: { // hier kan je functies plaatsen die je vanuit je html kan gebruiken
    startgame: () => {
      log('pressed start button!!')
    }
  },
  created: () => { // dit is een fucntie die wordt uitgevoert wanneer vue klaar is met laden
    log('vue loaded')
  }
})
