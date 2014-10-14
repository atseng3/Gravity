class SubscriptionsController < ApplicationController
  
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
  end

  # GET /subscriptions/1/edit  
  def edit
  end
  
  # POST /subscriptions
  # POST /subscriptions.json  
  def create
  end
  
  # PATCH/PUT /subscriptions/1
  # PATCH/PUT /subscriptions/1.json  
  def update
  end
  
  # DELETE /subscriptions/1
  # DELETE /subscriptions/1.json  
  def destroy
  end
end
