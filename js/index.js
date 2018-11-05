requirejs.config({
  baseUrl: 'js'
});

requirejs(['app'], function(app) {
  const o = {
    a: 1,
    b: {
      c: [
        2,
        {
          d: 3
        }
      ],
      e: {
        f: {
          g: 4
        }
      }
    },
    h: [
      {
        i: 5
      },
      {
        j: { k: 6 }
      }
    ]
  };
  console.log(app.stringify(o));
});
