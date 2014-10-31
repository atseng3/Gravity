App.Views.SubscriptionShowView = Backbone.PageView.extend({
    template: JST['subscriptions/show'],
    className: 'page',
    
    initialize: function(options) {
        this.sidebarView = options.sidebarView;
        this.listenTo(this.model, "sync", this.render);
    },
    
    render: function() {
        this.$el.html(this.sidebarView.render().$el);

        var renderedContent = this.template({
            subscription: this.model
        });
        this.$el.append(renderedContent);
        return this;
    }
    
});