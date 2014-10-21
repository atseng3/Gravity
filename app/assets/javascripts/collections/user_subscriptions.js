App.Collections.UserSubscriptions = Backbone.Collection.extend({
    url: '/user_subscriptions',
    model: App.Models.UserSubscription
});