
Router.route('/', function() {
  this.render('navigation');
});
Router.route('/navigation', function() {
  this.render('navigation');
});

Router.route('/facilitator', function() {
  this.render('facilitator');
});

Router.route('/lga', function() {
  this.render('lga');
});

Router.route('/parent', function() {
  this.render('parent');
});
