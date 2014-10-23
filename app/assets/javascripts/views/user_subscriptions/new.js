App.Views.UserSubscriptionNewView = Backbone.View.extend({
    template: JST['user_subscriptions/new'],
    events: {
        'submit form': 'submit'
    },
    submit: function(event) {
        event.preventDefault();
        var params = $(event.currentTarget).serializeJSON()['user_subscription'];
        var newUserSubscription = new App.Models.UserSubscription(params);
        newUserSubscription.save({}, {
            success: function() {
                App.Collections.user_subscriptions.add(newUserSubscription);
            }
        });
    },
    render: function() {
        var renderedContent = this.template();
        this.$el.html(renderedContent);
        return this;
    }
});