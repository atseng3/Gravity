App.Models.Subscription = Backbone.Model.extend({
    urlRoot: '/subscriptions',
    
    // not sure yet about this
    
    reminders: function() {
        this._reminders = this._reminders || new App.Collections.Reminders([], { user_subscription: this });
        return this._reminders;
    } 
});