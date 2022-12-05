class Api::V1::MessagesController < ApplicationController

# GET /users
def index
    @messages = Message.all
    render json: @messages
   end
end
