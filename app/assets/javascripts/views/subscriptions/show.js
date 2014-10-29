App.Views.SubscriptionShowView = Backbone.View.extend({
    template: JST['subscriptions/show'],
    
    initialize: function(options) {
        this.listenTo(this.model, "sync", this.render);
    },
    
    render: function() {
        var SideBarView = new App.Views.SideBarView({
            page: 'all'
        });
        this.$el.html(SideBarView.render().$el);

        var renderedContent = this.template({
            subscription: this.model
        });
        this.$el.append(renderedContent);
        return this;
    }
    
});