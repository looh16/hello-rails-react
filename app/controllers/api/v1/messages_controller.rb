module Api
  module V1
    class MessagesController < ApplicationController
      # GET /users
      def index
        @messages = Message.order('RANDOM()').first
        render json: @messages
      end
    end
  end
end
