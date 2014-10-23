App.Views.SubscriptionShowView = Backbone.View.extend({
    template: JST['subscriptions/show'],
    
    initialize: function(options) {
        this.listenTo(this.model, "sync", this.render);
    },
    
    render: function() {
        // console.log(this.collection.toJSON());
        debugger;
        var renderedContent = this.template({
            subscription: this.model
        });
        this.$el.html(renderedContent);
        return this;
    }
    
});