App.Models.User = Backbone.Model.extend({
    urlRoot: "/users"

    // todo.save => saves it to the backend
    
    // order of operations:
    // var user1 = new App.Models.User
    // user1.set({id: 1})
    // user1.fetch() --> this gets user with id 1
    // user.save()   --> this saves user with id 1
    
});