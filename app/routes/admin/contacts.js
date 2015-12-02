import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
      return this.store.findAll('contact');
    },
    actions: {
        deleteContact: function(contact) {
          var confirmation = confirm('Are you sure?');

          if (confirmation) {
            contact.destroyRecord();
          }
        }
    }
});
