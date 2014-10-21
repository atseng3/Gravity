App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "SIHP",
    "todos/new": "todosNew",
    "todos/:id": "todosShow"
  },

  SIHP: function () {
    // App.Collections.todos.fetch();
    //
    // var indexView = new App.Views.TodosIndex({
    //   collection: App.Collections.todos
    // });
    console.log('here');
    
    // there are 2 views for the home page: SOHP, SIHP.
    // how to do that?
    // ruby html.erb should display SOHP for SEO optimization.
    // javascript jst should display SIHP for dynamic rendering.
    
    
    
    this._swapView(indexView);
  },

  todosNew: function () {
    var newView = new App.Views.TodosNew();
    this._swapView(newView);
  },

  todosShow: function (id) {
    var todo = App.Collections.todos.getOrFetch(id);

    var showView = new App.Views.TodosShow({
      model: todo
    });

    this._swapView(showView);
  },

  _swapView: function (newView) {
    if (this.currentView) {
      this.currentView.remove();
    }

    $("body").html(newView.render().$el);

    this.currentView = newView;
  }
});