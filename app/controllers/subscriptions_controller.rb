class SubscriptionsController < ApplicationController
  # Subscription fields
  # t.string   "site"
  # t.decimal  "amount",     precision: 8, scale: 2
  # t.integer  "duration"
  
  # GET /subscriptions
  # GET /subscriptions.json
  def index
    @subscriptions = Subscription.all
    render :index
  end
  
  # GET /subscriptions/1
  # GET /subscriptions/1.json
  def show
  end
  
  # GET /subscriptions/new
  def new
    @subscription = Subscription.new
  end

  # GET /subscriptions/1/edit  
  def edit
  end
  
  # POST /subscriptions
  # POST /subscriptions.json  
  def create
    # create and save subscription with strong params
    # @subscription = Subscription.new(params[])
  end
  
  # PATCH/PUT /subscriptions/1
  # PATCH/PUT /subscriptions/1.json  
  def update
  end
  
  # DELETE /subscriptions/1
  # DELETE /subscriptions/1.json  
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