App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    // this route defaults to display all of the user's subscriptions
    "": "all",
    "active": "active",
    "expired": "expired",
    "subscriptions/:id": "subscriptionShow",
    
    // testing....
    
    "users": "usersIndex",
    "users/new": "userNew",
    "users/:id": "userShow",
    "subscriptions": "subscriptionsIndex",
    // "subscriptions/:id": "subscriptionShow",
    "user_subscriptions": "user_subscriptionsIndex",
    "user_subscriptions/:id": "user_subscriptionShow",
    
    
    "todos/new": "todosNew",
    "todos/:id": "todosShow"
  },
  
  // parent pages that i want:
  // - signed out home page (static page describing the product)
  // - signed in home page (dynamic page that allows for adding, managing subscriptions)
  //    - all of my subscriptions (all of the subscriptions that belong to user 1)
  //    - my active subscriptions (subscriptions that belong to user 1 that are active)
  //    - my cancelled subscriptions (subscriptions that belong to user 1 that are inactive)
  

  all: function () {
      App.Collections.subscriptions = new App.Collections.Subscriptions();
      App.Collections.subscriptions.fetch();
      this.SideBarView = (this.SideBarView || new App.Views.SideBarView({
          page: 'all'
      }));
      this.SideBarView.page = 'all';
      
      var AllView = new App.Views.AllView({
          sidebarView: this.SideBarView,
          model: App.Models.user,
          collection: App.Collections.subscriptions
      });
      this._swapView(AllView);
  },
  
  active: function () {
      App.Collections.subscriptions = new App.Collections.Subscriptions();
      App.Collections.subscriptions.fetch({
          url: '/user_subscriptions/active'
      });
      this.SideBarView = (this.SideBarView || new App.Views.SideBarView({
          page: 'expired'
      }));
      this.SideBarView.page = 'active';
      
      var ActiveView = new App.Views.ActiveView({
          sidebarView: this.SideBarView,
          model: App.Models.user,
          collection: App.Collections.subscriptions
      });
      this._swapView(ActiveView);
  },
  
  expired: function () {
      App.Collections.subscriptions = new App.Collections.Subscriptions();
      App.Collections.subscriptions.fetch({
          url: '/user_subscriptions/expired'
      });
      this.SideBarView = (this.SideBarView || new App.Views.SideBarView({
          page: 'expired'
      }));
      this.SideBarView.page = 'expired';
      
      var ExpiredView = new App.Views.ExpiredView({
          sidebarView: this.SideBarView,
          model: App.Models.user,
          collection: App.Collections.subscriptions
      });
      this._swapView(ExpiredView);
  },
  
  subscriptionShow: function(id) {
      App.Collections.subscriptions = new App.Collections.Subscriptions();
      
      var model = App.Collections.subscriptions.getOrFetch(id);
      model.reminders().fetch();
      this.SideBarView = (this.SideBarView || new App.Views.SideBarView({
          // default tab to 'all'
          page: 'all'
      }));
      
      var SubscriptionShowView = new App.Views.SubscriptionShowView({
          sidebarView: this.SideBarView,
          model: model
      });
      this._swapView(SubscriptionShowView);
  },
  
  ////////// testing
  
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
  
  // subscriptionShow: function(id) {
  //     var model = App.Collections.subscriptions.getOrFetch(id);
  //     var SubscriptionShowView = new App.Views.SubscriptionShowView({
  //         model: model
  //     });
  //
  //     this._swapView(SubscriptionShowView);
  // },
  
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