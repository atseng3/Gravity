App.Collections.Users = Backbone.Collection.extend({
    url: '/users',
    model: App.Models.User,
   
    getOrFetch: function(id) {
        var users = this;
        var model;
        if(model = this.get(id)) {
            return model;
        } else {
            model = new App.Models.User({ id: id });
            model.fetch({
                success: function() {
                    users.add(model);
                }
            });
            return model;
        }
    }
});

// All of our CRUD actions
// Create
// Show
// Update
// Destroy
// Index
//
// these are form actions
//
// New
// Edit


// Todo.Collections.todos.toJSON() --> easier way to see the attributes inside the models