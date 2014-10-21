App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "SIHP",
    "users": "showUsers",
    "todos/new": "todosNew",
    "todos/:id": "todosShow"
  },

  SIHP: function () {
      var SIHPView = new App.Views.SIHPView({});
      this._swapView(SIHPView);
  },
  
  showUsers: function() {
      App.Collections.users.fetch();
      var UsersView = new App.Views.UsersView({
          collection: App.Collections.users
      });
      this._swapView(UsersView);
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