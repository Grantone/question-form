import Ember from 'ember';

export default Ember.Component.extend({
  edit(question, params) {
      this.sendAction('edit', question, params);
    }
});
