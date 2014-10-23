App.Views.UserSubscriptionShowView = Backbone.View.extend({
    template: JST['user_subscriptions/show'],
    
    initialize: function(options) {
        this.listenTo(this.model, "sync", this.render);
        this.listenTo(this.model.reminders(), "sync", this.render);
    },
    
    render: function() {
        var renderedContent = this.template({
            user_subscription: this.model
        });
        this.$el.html(renderedContent);
        return this;
    }
    
});