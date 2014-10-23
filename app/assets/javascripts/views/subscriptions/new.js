App.Views.SubscriptionNewView = Backbone.View.extend({
    template: JST['subscriptions/new'],
    events: {
        'submit form': 'submit'
    },
    submit: function(event) {
        event.preventDefault();
        var params = $(event.currentTarget).serializeJSON()['subscription'];
        var newSubscription = new App.Models.Subscription(params);
        newSubscription.save({}, {
            success: function() {
                App.Collections.subscriptions.add(newSubscription);
            }
        });
    },
    render: function() {
        var renderedContent = this.template();
        this.$el.html(renderedContent);
        return this;
    }
});