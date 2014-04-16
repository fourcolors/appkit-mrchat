import Messages from 'appkit/lib/messages'

export default Ember.Route.extend({
 model: function() {
   var messages = Messages.create({});
   messages.set('ref', new Firebase('http://mrchat.firebaseio.com/messages'));

   return messages;
 }
});
