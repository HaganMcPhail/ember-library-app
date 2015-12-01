import Ember from 'ember';

export default Ember.Controller.extend({
    emailAddress: '',
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    actualEmailAddress: function() { 
        console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
    }.property('emailAddress'),
    actions: {
        saveInvitation: function() {
            alert('Saving of the following email address is in progress: ' + this.get('emailAddress'));
            this.set('responseMessage', "Thank you! We've just saved your email address: " + this.get('emailAddress'));
            this.set('emailAddress', '');
        }
    }

    // ,
    // emailAddressChanged: function() { 
    //   console.log('observer is called', this.get('emailAddress')); 
    // }.observes('emailAddress')

});
