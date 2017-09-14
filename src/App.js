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
    ],
    romanticItems: [{
        name: 'Heteroromantic',
        image: '/img/heteroromantic.svg',
        definition: 'definition of heteroromantic'
      },
      {
        name: 'Homoromantic',
        image: '/img/homoromantic.svg',
        definition: 'definition of homoromantic'
      },
      {
        name: 'Biromantic',
        image: '/img/biromantic.svg',
        definition: 'definition of biromantic'
      }
    ],
    genderItems: [{
        name: 'Cisgender',
        image: '/img/cisgender.svg',
        definition: 'definition of cisgender'
      },
      {
        name: 'Transgender',
        image: '/img/transgender.svg',
        definition: 'definition of transgender'
      }
    ],
    pronounItems: [{
        name: 'He/Him',
        image: '/img/hehim.svg',
        definition: 'definition of he/him'
      },
      {
        name: 'She/Her',
        image: '/img/sheher.svg',
        definition: 'definition of she/her'
      },
      {
        name: 'They/Them',
        image: '/img/theythem.svg',
        definition: 'definition of they/them'
      }
    ],
    interestItems: [{
        name: 'Activist',
        image: '/img/activist.svg',
        definition: 'definition of activist'
      },
      {
        name: 'Postgender',
        image: '/img/postgender.svg',
        definition: 'definition of postgender'
      }
    ]
  }
});
