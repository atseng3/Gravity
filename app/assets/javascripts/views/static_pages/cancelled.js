App.Views.CancelledView = Backbone.View.extend({
    template: JST['static_pages/cancelled'],
    
    initialize: function(options) {
        this.listenTo(this.collection, 'add', this.render);
    },
    
    render: function() {
        // console.log('render called');
        
        var SideBarView = new App.Views.SideBarView({
            page: 'cancelled'
        });
        this.$el.html(SideBarView.render().$el);
        
        var renderedContent = this.template({
           user: this.model,
           subscriptions: this.collection
        });
        this.$el.append(renderedContent);
        return this;
    }
});