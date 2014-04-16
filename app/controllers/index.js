var IndexController = Ember.ArrayController.extend({
  actions:{
    sendMessage: function(){
      this.get('model').pushMessage({'username': this.get('username'), 'message': this.get('message')});
      this.set('message', '');
    }
  }
});

export default IndexController;
