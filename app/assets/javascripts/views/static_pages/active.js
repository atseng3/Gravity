App.Views.ActiveView = Backbone.PageView.extend({
    template: JST['static_pages/active'],
    partial: JST['static_pages/_list'],
    
    className: 'page',
    
    initialize: function(options) {
        this.sidebarView = options.sidebarView;
        this.listenTo(this.collection, 'sync', this.render);
    },
    
    render: function() {
        this.$el.html(this.sidebarView.render().$el);
        
        var renderedContent = this.template({
           user: this.model,
           subscriptions: this.collection
        });
        this.$el.append(renderedContent);
        return this;
    }
});