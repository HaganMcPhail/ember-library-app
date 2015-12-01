import Ember from 'ember';

export default Ember.Controller.extend({
    emailAddress: '',
    contactMessage: '',
    isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isMessageLongEnough: Ember.computed.gte('contactMessage.length', 5),
    enableSend: Ember.computed.and('isValidEmail', 'isMessageLongEnough'),
    actions: {
        sendMessage: function() {
            alert('From: ' + this.get('emailAddress') + '\nMessage: ' + this.get('contactMessage'));
            this.set('emailAddress', '');
            this.set('contactMessage', '');
        }
    }
});
