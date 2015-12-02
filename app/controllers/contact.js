import Ember from 'ember';

export default Ember.Controller.extend({
    emailAddress: '',
    contactMessage: '',
    isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isMessageLongEnough: Ember.computed.gte('contactMessage.length', 5),
    enableSend: Ember.computed.and('isValidEmail', 'isMessageLongEnough'),
    actions: {
        sendMessage: function() {
            var _that = this;
            var email = this.get('emailAddress');
            var text = this.get('contactMessage');

            var contact = this.store.createRecord('contact', {
                email: email,
                text: text

            });
            contact.save().then(function(response) {
                _that.set('responseMessage', "Thank you! We've have received your message! Yout message id is:" + response.get('id'));
                _that.set('emailAddress', '');
                _that.set('contactMessage', '');
                console.log(_that.responseMessage);
            });
        }
    }
});
