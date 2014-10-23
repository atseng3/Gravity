App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "SIHP",
    "users": "showUsers",
    "users/new": "userNew",
    "subscriptions": "subscriptionsIndex",
    "subscriptions/:id": "subscriptionsShow",
    "todos/new": "todosNew",
    "todos/:id": "todosShow"
  },

  SIHP: function () {
      var SIHPView = new App.Views.SIHPView({});
      this._swapView(SIHPView);
  },
  
  subscriptionsShow: function(id) {
      var model = App.Collections.subscriptions.getOrFetch(id);
      var SubscriptionShowView = new App.Views.SubscriptionShowView({
          model: model
      });
      
      this._swapView(SubscriptionShowView);
  },
  
  subscriptionsIndex: function() {
      App.Collections.subscriptions.fetch();
      var SubscriptionsIndexView = new App.Views.SubscriptionsIndexView({
          collection: App.Collections.subscriptions
      });
      // var SubscriptionNewView = new App.Views.SubscriptionNewView({});
      this._swapView(SubscriptionsIndexView);
      // $('body').html(SubscriptionsIndexView.render().$el);
      // $('body').append(SubscriptionNewView.render().$el);
      // var jointView = SubscriptionsView.render().$el + newSubscriptionView.render().$el;
      // $('body').html(jointView);
  },
  
  subscriptionsNew: function() {
      var SubscriptionNewView = new App.Views.SubscriptionNewView({});
      this._swapView(SubscriptionNewView);
  },
  
  showUsers: function() {
      App.Collections.users.fetch();
      var UsersIndexView = new App.Views.UsersIndexView({
          collection: App.Collections.users
      });
      this._swapView(UsersIndexView);
  },
  
  userNew: function() {
     var UserView = new App.Views.UserNewView({});
     this._swapView(UserNewView);
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