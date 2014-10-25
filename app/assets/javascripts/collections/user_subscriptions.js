App.Collections.UserSubscriptions = Backbone.Collection.extend({
    url: '/user_subscriptions',
    model: App.Models.UserSubscription,
   
    getOrFetch: function(id) {
        var user_subscriptions = this;
        var model;
        if(model = this.get(id)) {
            model.fetch();
            return model;
        } else {
            model = new App.Models.UserSubscription({ id: id });
            model.fetch({
                success: function() {
                    user_subscriptions.add(model);
                }
            });
            return model;
        }
    }
});