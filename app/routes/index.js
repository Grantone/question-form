import Ember from 'ember';

var questions = [{
  id: 0,
  question: "Hi, who are you and how may I help you?",
  author: "Granton",
  type: "general"
}, {
  id: 1,
  question: "Welcome this is your response please",
  author: "Anthony",
  type: "oral"
}, {
  id: 2,
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
