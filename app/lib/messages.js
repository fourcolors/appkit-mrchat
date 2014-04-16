export default Ember.ArrayProxy.extend({
 ref: null,
 loadContent: function(){
   var _this = this;

   this.ref.on('value', function(snapshot){
     var messages = _.map(snapshot.val(), function(value, key){
     value.id = key;
     return value;
   });

   _this.set('content', messages);

   });

 }.observes('ref'),

 pushMessage: function(message){
   this.ref.push(message);
 }
});
