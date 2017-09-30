import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  type: DS.attr(),
  answer: DS.attr(),
  question: DS.belongsTo('question', {
    async: true
  })
})
