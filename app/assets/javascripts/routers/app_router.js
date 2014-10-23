App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "SIHP",
    "users": "usersIndex",
    "users/new": "userNew",
    "users/:id": "userShow",
    "subscriptions": "subscriptionsIndex",
    "subscriptions/:id": "subscriptionShow",
    "user_subscriptions": "user_subscriptionsIndex",
    "user_subscriptions/:id": "user_subscriptionShow",
    
    
    "todos/new": "todosNew",
    "todos/:id": "todosShow"
  },

  SIHP: function () {
      var SIHPView = new App.Views.SIHPView({});
      this._swapView(SIHPView);
  },
  
  user_subscriptionShow: function(id) {
      var model = App.Collections.user_subscriptions.getOrFetch(id);
      model.reminders().fetch();
      var UserSubscriptionShowView = new App.Views.UserSubscriptionShowView({
          model: model
      });
      
      this._swapView(UserSubscriptionShowView);
  },
  
  user_subscriptionsIndex: function() {
      App.Collections.user_subscriptions.fetch();
      var UserSubscriptionsIndexView = new App.Views.UserSubscriptionsIndexView({
          collection: App.Collections.user_subscriptions
      });
      
      this._swapView(UserSubscriptionsIndexView);
  },
  
  subscriptionShow: function(id) {
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
  
  userShow: function(id) {
      var model = App.Collections.users.getOrFetch(id);
      var UserShowView = new App.Views.UserShowView({
          model: model
      });
      
      this._swapView(UserShowView);
  },
  
  usersIndex: function() {
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