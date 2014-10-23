App.Models.UserSubscription = Backbone.Model.extend({
   urlRoot: '/user_subscriptions',
   
   reminders: function() {
       this._reminders = this._reminders || new App.Collections.Reminders([], { user_subscription: this });
       return this._reminders;
   } 
});