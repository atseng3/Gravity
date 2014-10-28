App.Views.AllView = Backbone.View.extend({
    template: JST['static_pages/all'],
    
    initialize: function(options) {
        this.listenTo(this.collection, 'sync', this.render);
    },
    
    render: function() {
        
        var SideBarView = new App.Views.SideBarView({
            page: 'all'
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