class UserSubscriptionsController < ApplicationController
  # UserSubscription fields
  # t.integer  "user_id",         null: false
  # t.integer  "subscription_id", null: false
  # t.datetime "expires_at"
  
  # GET /user_subscriptions
  # GET /user_subscriptions.json
  def index
    @user_subscriptions = UserSubscription.all
    render :index
  end
  
  # GET /user_subscriptions/1
  # GET /user_subscriptions/1.json
  def show
    @user_subscription = UserSubscription.find(params[:id])
    render :show
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
    @subscription = Subscription.find_by_site(subscription_params[:site]) ? Subscription.find_by_site(subscription_params[:site]) : Subscription.new(subscription_params)
    if @subscription.save
      expires_at = Time.new() + (@subscription.duration.to_i * 24 * 60 * 60)
    
      @user.user_subscriptions.build( :subscription_id => @subscription.id, :expires_at => expires_at ) 
    
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
      params.require(:subscription).permit(:site, :amount, :duration)
    end
end
