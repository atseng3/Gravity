App.Views.ActiveView = Backbone.View.extend({
    template: JST['static_pages/active'],
    
    initialize: function(options) {
        this.listenTo(this.collection, 'sync', this.render);
    },
    
    render: function() {
        console.log('render called');
        
        var SideBarView = new App.Views.SideBarView({
            page: 'active'
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