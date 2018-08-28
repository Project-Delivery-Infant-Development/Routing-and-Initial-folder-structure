import '../ui/facilitator.html';
import '../ui/lga.html';
import '../ui/parent.html';
import '../ui/navigation.html';
import '../routes/routes.js';

Template.navigation.events({
 'click #parentButton': function(e){
   Router.go('parent');
 },

 'click #lgaButton': function(e){
   Router.go('lga');
 },
 'click #facilitatorButton': function(e){
   Router.go('facilitator');
 },
});
