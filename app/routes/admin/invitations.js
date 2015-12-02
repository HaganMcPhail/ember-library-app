// app/routes/admin/invitations.js
import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.findAll('invitation');
  },
  actions: {
      deleteInvitation: function(invitation) {
        var confirmation = confirm('Are you sure?');

        if (confirmation) {
          invitation.destroyRecord();
        }
      }
  }


});
