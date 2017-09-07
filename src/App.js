'use strict';

// root Vue instance
var app = new Vue({
  el: '#app',
  data: {
    sexualityItems: [{
        name: 'Straight',
        image: '/img/straight.svg',
        definition: 'definition of straight'
      },
      {
        name: 'Gay',
        image: '/img/gay.svg',
        definition: 'definition of gay'
      },
      {
        name: 'Bisexual',
        image: '/img/bisexual.svg',
        definition: 'definition of bisexual'
      }
    ]
  }
});
