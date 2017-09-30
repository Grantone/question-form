import Ember from 'ember';

export function questionRate(params) {
  var questionPercentage = params[0].get('rate');

  if (questionPercentage >= 200) {
    return '$$$$';
  } else if (questionPercentage >= 150) {
    return '$$$';
  } else if (questionPercentage >= 100) {
    return '$$';
  } else if (questionPercentage <= 99) {
    return '$';
  }
}

export default Ember.Helper.helper(questionRate);
