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
    @subscription = Subscription.find(params[:id])
  end
  
  # GET /subscriptions/new
  def new
    @subscription = Subscription.new
  end

  # GET /subscriptions/1/edit  
  def edit
    @subscription = Subscription.find(params[:id])
  end
  
  # POST /subscriptions
  # POST /subscriptions.json  
  def create
    # create and save subscription with strong params
    @subscription = Subscription.new(subscription_params)
    if @subscription.save
      respond_to do |format|
        format.html { redirect_to subscription_url(@subscription), notice: 'Subscription was successully created.'}
      end
    else
      respond_to do |format|
        format.html { render action: 'new', notice: @subscription.errors }
        format.json { render json: @subscription.errors, status: :unprocessable_entity }
      end
    end
  end
  
  # PATCH/PUT /subscriptions/1
  # PATCH/PUT /subscriptions/1.json  
  def update
    @subscription = Subscription.find(params[:id])
    success = @subscription.update(subscription_params)
    if success
      respond_to do |format|
        format.html { redirect_to subscription_url(@subscription), notice: 'Subscription was successully updated.'}
      end
    else
      respond_to do |format|
        format.html { render action: 'edit', notice: @subscription.errors }
        format.json { render json: @subscription.errors, status: :unprocessable_entity }
      end
    end
  end
  
  # DELETE /subscriptions/1
  # DELETE /subscriptions/1.json  
  def destroy
    @subscription = Subscription.find(params[:id])
    @subscription.destroy
    respond_to do |format|
      format.html { redirect_to subscriptions_url, notice: @subscription.site + ' was successfully deleted.'}
      format.json { head :no_content }
    end
  end
  
  private
    # def set_user
    #   @user = User.find(params[:id])
    # end
  
    def subscription_params
      params.require(:subscription).permit(:site, :amount, :duration, :site_link)
    end
end