App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "SIHP",
    "users": "showUsers",
    "users/new": "userNew",
    "subscriptions": "showSubscriptions",
    "todos/new": "todosNew",
    "todos/:id": "todosShow"
  },

  SIHP: function () {
      var SIHPView = new App.Views.SIHPView({});
      this._swapView(SIHPView);
  },
  
  showSubscriptions: function() {
      App.Collections.subscriptions.fetch();
      var SubscriptionsView = new App.Views.SubscriptionsView({
          collection: App.Collections.subscriptions
      });
      var newSubscriptionView = new App.Views.NewSubscriptionView({});
      // this._swapView(SubscriptionsView);
      $('body').html(SubscriptionsView.render().$el);
      $('body').append(newSubscriptionView.render().$el);
      // var jointView = SubscriptionsView.render().$el + newSubscriptionView.render().$el;
      // $('body').html(jointView);
  },
  
  subscriptionsNew: function() {
      var newSubscriptionView = new App.Views.NewSubscriptionView({});
      this._swapView(newSubscriptionView);
  },
  
  showUsers: function() {
      App.Collections.users.fetch();
      var UsersView = new App.Views.UsersView({
          collection: App.Collections.users
      });
      this._swapView(UsersView);
  },
  
  userNew: function() {
     var newUserView = new App.Views.NewUserView({});
     this._swapView(newUserView);
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