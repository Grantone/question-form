import Ember from 'ember';

var questions = [{
  id: 1,
  question: "Hi, who are you and how may I help you?",
  author: "Granton",
  type: "general"
}, {
  id: 2,
  question: "Welcome this is your response please",
  author: "anthony",
  type: "oral"
}, {
  id: 3,
  question: "I may like to know more about it.",
  author: "Fred",
  type: "normal"

}];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    giveAnswer(question) {
      question.giveAnswer();
      this.transitionTo('index');
    }
  }
});
