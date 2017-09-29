import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview() {
      var params = {
        quetion: this.get('quetion'),
        author: this.get('author'),
        type: this.get('type'),
        answer: this.get('answer')
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview', params);
    }
  }
});
