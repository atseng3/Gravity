App.Collections.Subscriptions = Backbone.Collection.extend({
   // url: '/subscriptions',
   
   url: function() {
       return '/user/' + App.Models.user.get('id') + '/subscriptions'
       
   },
   
   // nested collections url way
   //
   // url: function() {
   //     return '/api/todos/' + this.todo.get('id') + '/comments';
   //     or return this.todo.url() + '/comments'
   // },
   // initialize: function(models, options) {
   //     this.todo = options.todo;
   // },
   model: App.Models.Subscription,
   
   getOrFetch: function(id) {
       var subscriptions = this;
       var model;
       if(model = this.get(id)) {
           return model;
       } else {
           model = new App.Models.Subscription({ id: id });
           model.fetch({
               success: function() {
                   subscriptions.add(model);
               }
           });
           return model;
       }
   }
});

// way to use nested collections url way
//
// var todo = new Todo.Models.Todo({ id: 3 });
// var todoComments = new Todo.Collections.TodoComments([], {
//    todo: todo
// });

// need to call save and then fetch to have updated collection