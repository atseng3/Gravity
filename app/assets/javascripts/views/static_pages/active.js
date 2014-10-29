App.Views.ActiveView = Backbone.View.extend({
    template: JST['static_pages/active'],
    partial: JST['static_pages/_list'],
    
    initialize: function(options) {
        this.listenTo(this.collection, 'add', this.render);
    },
    
    render: function() {
        
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