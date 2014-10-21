App.Collections.Reminders = Backbone.Collection.extend({
    url: function() {
        return this.user_subscription.url() + '/reminders';
    },
    initialize: function(models, options) {
        this.user_subscription = options.user_subscription;
    },
    model: App.Models.Reminder
});