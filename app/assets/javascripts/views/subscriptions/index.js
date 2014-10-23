App.Views.SubscriptionsIndexView = Backbone.View.extend({
    template: JST['subscriptions/index'],
    
    initialize: function(options) {
        this.listenTo(this.collection, "sync add", this.render);
    },
    
    render: function() {
        // console.log(this.collection.toJSON());
        var renderedContent = this.template({
            subscriptions: this.collection
        });
        this.$el.html(renderedContent);
        return this;
    }
    
});