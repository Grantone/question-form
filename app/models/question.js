import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  type: DS.attr(),
  answer: DS.attr(),
  // reviews: DS.hasMany('review', { async: true }),
});
