App.Views.NewUserView = Backbone.View.extend({
    template: JST['users/new'],
    events: {
        "submit form": "submit"
    },
    submit: function(event) {
        event.preventDefault();
        var newUser = new App.Models.User();
        // newUser.set('first_name', $('#first_name').val());
        // newUser.set('last_name', $('#last_name').val());
        newUser.set('email', $('#user_email').val());
        newUser.set('password', $('#user_password').val());
        newUser.set('password_confirmation', $('#user_password_confirmation').val());
        debugger;
        newUser.save({}, {
           success: function() {
               alert('SUCCESS!');
           }
        });
    },
    render: function() {
        var renderedContent = this.template();
        this.$el.html(renderedContent);
        return this;
    }
})