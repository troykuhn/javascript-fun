let answer = {
    "@context": "http://www.w3.org/ns/hydra/context.jsonld",
    "@id": "https://data.ivanstanojevic.me/api/tle",
    "@type": "Collection",
    "totalItems": 8370,
    "member": [
      {
        "@id": "https://data.ivanstanojevic.me/api/tle/43554",
        "@type": "TleModel",
        "satelliteId": 43554,
        "name": "1998-067PC",
        "date": "2020-07-06T16:23:13+00:00",
        "line1": "1 43554U 98067PC  20188.68279663  .00062119  00000-0  24586-3 0  9994",
        "line2": "2 43554  51.6274 175.6877 0002077  95.9895 264.1345 15.86151867113008"
      },
      {
        "@id": "https://data.ivanstanojevic.me/api/tle/43598",
        "@type": "TleModel",
        "satelliteId": 43598,
        "name": "1998-067PK",
        "date": "2020-07-07T02:03:50+00:00",
        "line1": "1 43598U 98067PK  20189.08600012  .00104795  15257-4  32212-3 0  9999",
        "line2": "2 43598  51.6250 173.7435 0003759  60.7216 299.4166 15.91725766108337"
      },
    ]
  }
  ​
  let mycoll = [
    { 
      pizza: true,
      kind: false,
      role: 'abc'
    },
    {
      a: 88,
      b: 00,
      abc123: [
        { f: true, label: [ { itemName: "yeet", lol: true } ] }
      ]
    },
    {
      nue: 'Yo'
    }
  ];
  ​
  let test = [
    [
      2,
      [
        { 
          yo: 'tyre',
          anotherone: { '2yankee2': ['l'] }
        }
      ]
    ]
  ];
  ​
  // null, x, o
  ​
  let tictactoeBoard = [
    [{ piece: null }, { piece: null }, { piece: null }],
    [{ piece: null }, { piece: null }, { piece: null }],
    [{ piece: null }, { piece: null }, { piece: null }]
  ]
  ​
  // row 1 col 1
  tictactoeBoard[0][0].piece = 'x';
  // row 2 col 1
  tictactoeBoard[1][0].piece = 'o';
  // row 2 col 2
  tictactoeBoard[1][1].piece = 'x';
  // row 3 col 3
  tictactoeBoard[2][2].piece = 'o';
  // row 1 col 3
  tictactoeBoard[0][2].piece = 'x';
  // row 3 col 1
  tictactoeBoard[2][0].piece = 'o';
  // row 1 col 2
  tictactoeBoard[0][1].piece = 'x';
  // chicken dinner
  console.log(tictactoeBoard);
  ​
  ​
  ​
  let term = '2yankee2'
  ​
  test[0][1][0].anotherone[term][0];
  ​
  ​
  ​
  ​
  ​
  ​
  mycoll[1].abc123[0].label[0].lol
  ​
  answer.member[0];
  