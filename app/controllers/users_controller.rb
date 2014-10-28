class UsersController < ApplicationController
  
  # GET /users/:id/subscriptions  
  def subscriptions
    
    @subscriptions = current_user.subscriptions 
    
    render :json => @subscriptions
    
  end
  
  # GET /users
  # GET /users.json
  def index
    @users = User.all
    render :json => @users
    # render :index
  end
  
  # GET /users/1
  # GET /users/1.json
  def show
    @user = User.find(params[:id])
    # render :json => @user
    render :show
  end
  
  # GET /users/new
  def new
  end

  # GET /users/1/edit  
  def edit
  end
  
  # POST /users
  # POST /users.json  
  def create
  end
  
  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json  
  def update
  end
  
  # DELETE /users/1
  # DELETE /users/1.json  
  def destroy
  end
end
