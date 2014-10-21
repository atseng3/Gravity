App.Collections.Users = Backbone.Collection.extend({
    url: '/users',
    model: App.Models.User
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