import Ember from 'ember';

export default Ember.Component.extend({
  isAuthorShowing: false,
  actions: {
    authorShow: function() {
      this.set('isAuthorShowing', true);
    },
    authorHide: function() {
      this.set('isAuthorShowing', false);
    },
    answer(question) {
      if (confirm('Are you satisfied with our answer pal?')) {
        this.sendAction('giveAnswer', question);
      }
    }
  }
});
