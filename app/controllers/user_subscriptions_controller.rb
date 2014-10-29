class UserSubscriptionsController < ApplicationController
  # UserSubscription fields
  # t.integer  "user_id",         null: false
  # t.integer  "subscription_id", null: false
  # t.datetime "expires_at"
  
  # Reminder fields
  # t.integer "user_subscription_id", null: false
  # t.integer "days", default_to: 1
  # t.boolean "active", default_to: true
  
  # GET /user_subscriptions
  # GET /user_subscriptions.json
  def index
    # @user_subscriptions = UserSubscription.all
    # @user_subscriptions = UserSubscription.where( user_id: current_user )
    #
    # # find the subscriptions here based on the user_subscriptions
    # sub_id_arr = [];
    # @user_subscriptions.each do |u_s|
    #   sub_id_arr.push(u_s.subscription_id)
    # end
    #
    # render :json => Subscription.find(sub_id_arr)
    
    # or.....
    
    @subscriptions = current_user.subscriptions
    
    render :json => @subscriptions
  end
  
  # GET /user_subscriptions/1
  # GET /user_subscriptions/1.json
  def show
    @user_subscription = UserSubscription.find(params[:id])
    # render :show
    render :json => @user_subscription
  end
  
  # GET /user_subscriptions/new
  def new
    @user_subscription = UserSubscription.new
    @subscriptions = Subscription.all
    render :new
  end

  # GET /user_subscriptions/1/edit  
  def edit
    # find by id, what kind of strong params?
    @user_subscription = UserSubscription.find(params[:id])
    @subscriptions = Subscription.all
    render :edit
  end
  
  # POST /user_subscriptions
  # POST /user_subscriptions.json  
  def create
    # create user_subscriptions based on existing or new subscriptions 
    
    ## creation of user_subscription: 
    ## a user creates a user_subscription because he is subscribed to a particular service.
    ## this means that he is the user. ie. user_id is current_user
    ## this means that he knows what subscription it is. ie. either a complete new subscription that is not in the DB or an existing one.
    ## this means that the form submission for create UserSubscription needs to be dynamic (autocomplete, if not there then new subscription form)
    
    ## regardless, once we hit this controller action we should have information for UserSubscription and Subscription
    
    ## question is: create subscription through UserSubscription or the other way around?
    
    ## answer:
    ### - find user
    ### - create/find subscription 
    ### - @user.user_subscription.create( :subscription_id => @subscription.id )

    @user = current_user
    @subscription = Subscription.find(subscription_params[:id]) ? Subscription.find(subscription_params[:id]) : Subscription.new(subscription_params)
    
    # This part is not not tested yet, @subscription.save should create and save the reminder as well.
    # self.reminders.build(reminder_params)
    
    if @subscription.save
      expires_at = Time.new() + (@subscription.duration.to_i * 24 * 60 * 60)
      
      # generate current_user's user_subscription.
      # question: can a user have more than 1 of the same subscription?
      @user.user_subscriptions.build( :subscription_id => @subscription.id, :expires_at => expires_at ) 

      @user.user_subscriptions.last.reminders.build(reminder_params)
    
      if @user.save
        respond_to do |format|
          # temporary redirect to /subscriptions
          format.html { redirect_to subscriptions_url, notice: 'Your subscription was successfully created.' }
          # format.json { render action: 'show', status: :created, location: @user }
        end
      else 
        respond_to do |format|
          format.html { render action: 'new', notice: @user.errors }
          format.json { render json: @user.errors, status: :unprocessable_entity }
        end
      end      
    else
      respond_to do |format|
        format.html { render action: 'new', notice: @subscription.errors }
        format.json { render json: @subscription.errors, status: :unprocessable_entity }
      end
    end
  end
  
  # PATCH/PUT /user_subscriptions/1
  # PATCH/PUT /user_subscriptions/1.json  
  def update
  end
  
  # DELETE /user_subscriptions/1
  # DELETE /user_subscriptions/1.json  
  def destroy
  end
  
  private
    # def set_user
    #   @user = User.find(params[:id])
    # end
  
    def subscription_params
      params.require(:subscription).permit(:id, :site, :amount, :duration)
    end
    
    def reminder_params
      params.require(:reminder).permit(:user_subscription_id, :days, :active)
    end
end
