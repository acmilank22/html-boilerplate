requirejs.config({
  baseUrl: 'js'
});

requirejs(['app'], function(app) {
  console.log(app);
});
