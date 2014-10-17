class RemindersController < ApplicationController
  # Reminder fields
  # t.integer  "user_subscription_id", null: false
  # t.integer  "days",                 default: 1
  # t.boolean  "active",               default: true
  
  # GET /reminders
  # GET /reminders.json
  def index
    @reminders = Reminder.all
    render :index
  end
  
  # GET /reminders/1
  # GET /reminders/1.json
  def show
    @reminder = Reminder.find(params[:id])
  end
  
  # GET /reminders/new
  def new
    @reminder = Reminder.new
  end

  # GET /reminders/1/edit  
  def edit
    @reminder = Reminder.find(params[:id])
  end
  
  # POST /reminders
  # POST /reminders.json  
  def create
    # create and save reminder with strong params
    @reminder = Reminder.new(reminder_params)
    if @reminder.save
      respond_to do |format|
        format.html { redirect_to reminder_url(@reminder), notice: 'Reminder was successully created.'}
      end
    else
      respond_to do |format|
        format.html { render action: 'new', notice: @reminder.errors }
        format.json { render json: @reminder.errors, status: :unprocessable_entity }
      end
    end
  end
  
  # PATCH/PUT /reminders/1
  # PATCH/PUT /reminders/1.json  
  def update
    @reminder = Reminder.find(params[:id])
    success = @reminder.update(reminder_params)
    if success
      respond_to do |format|
        format.html { redirect_to reminder_url(@reminder), notice: 'Reminder was successully updated.'}
      end
    else
      respond_to do |format|
        format.html { render action: 'edit', notice: @reminder.errors }
        format.json { render json: @reminder.errors, status: :unprocessable_entity }
      end
    end
  end
  
  # DELETE /reminders/1
  # DELETE /reminders/1.json  
  def destroy
    @reminder = Reminder.find(params[:id])
    @reminder.destroy
    respond_to do |format|
      format.html { redirect_to reminders_url, notice: @reminder + ' was successfully deleted.'}
      format.json { head :no_content }
    end
  end
  
  private
    # def set_user
    #   @user = User.find(params[:id])
    # end
  
    def reminder_params
      params.require(:reminder).permit(:user_subscription_id, :days, :active)
    end
end
