App.Collections.Subscriptions = Backbone.Collection.extend({
   url: '/subscriptions',
   
   // nested collections url way
   //
   // url: function() {
   //     return '/api/todos/' + this.todo.get('id') + '/comments';
   //     or return this.todo.url() + '/comments'
   // },
   // initialize: function(models, options) {
   //     this.todo = options.todo;
   // },
   model: App.Models.Subscription
});

// way to use nested collections url way
//
// var todo = new Todo.Models.Todo({ id: 3 });
// var todoComments = new Todo.Collections.TodoComments([], {
//    todo: todo
// });

// need to call save and then fetch to have updated collection