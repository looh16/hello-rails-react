class Api::V1::MessagesController < ApplicationController

# GET /users
def index
    @messages = Message.order('RANDOM()').first
    render json: @messages
   end
end
