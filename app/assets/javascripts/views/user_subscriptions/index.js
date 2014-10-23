App.Views.UserSubscriptionsIndexView = Backbone.View.extend({
    template: JST['user_subscriptions/index'],
    
    initialize: function(options) {
        this.listenTo(this.collection, "sync add", this.render);
    },
    
    render: function() {
        console.log(this.collection.toJSON());
        var renderedContent = this.template({
            user_subscriptions: this.collection
        });
        this.$el.html(renderedContent);
        return this;
    }
    
});