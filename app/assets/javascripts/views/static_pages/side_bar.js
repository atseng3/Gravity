App.Views.SideBarView = Backbone.View.extend({
    template: JST['static_pages/side_bar'],
    
    tagName: 'aside',
    
    className: 'sidebar',
    
    initialize: function(options) {
        this.page = options.page;
    },
    
    render: function() {
        
        console.log('sidebar render');
        
        var renderedContent = this.template();
        
        this.$el.html(renderedContent);
        
        this.$('#subscriptions_' + this.page).addClass('selected');
        
        return this;
    }
});