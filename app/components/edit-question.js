import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
    },
    edit(question) {
      var params = {
        question: this.get('question')||"",
        author: this.get('author')||"",
        type: this.get('type')||"",
        answer: this.get('answer')||"",

      };
      this.set('editQuestionForm', false);
      this.sendAction('edit', question, params);
    }
  }
});
