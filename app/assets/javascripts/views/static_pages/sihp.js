App.Views.SIHPView = Backbone.View.extend({
    template: JST['static_pages/sihp'],
    
    // initialize: function(options) {
    //     this.collection = options.collection
    // },
    render: function() {
        var renderedContent = this.template({
           users: this.collection
        });
        this.$el.html(renderedContent);
        return this;
    }
});