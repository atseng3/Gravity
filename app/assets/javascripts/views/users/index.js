App.Views.UsersIndexView = Backbone.View.extend({
    template: JST['users/index'],
    
    initialize: function(options) {
        this.listenTo(this.collection, "sync", this.render);
    },
    
    render: function() {
        // console.log(this.collection.toJSON());
        var renderedContent = this.template({
            users: this.collection
        });
        this.$el.html(renderedContent);
        return this;
    }
    
});