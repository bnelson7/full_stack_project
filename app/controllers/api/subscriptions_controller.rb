class Api::SubscriptionsController < ApplicationController

    def create
        @subscription = Subscription.create(
            channel_id: params[:channel_id], 
            subscriber_id: current_user.id
        )

        @channel = Channel.find_by(id: params[:channel_id])
        @channel.subscribed = @channel.subscribers.length
        
        if @channel.subscribed_changed? 
            render :show
        else
            render json: @subscription.errors.full_messages, status: 422
        end
    end

    def destroy
        @subscription = Subscription.find_by(
            channel_id: params[:id],
            subscriber_id: current_user.id    
        )
        @subscription.destroy

        @channel = Channel.find_by(id: params[:id])
        @channel.subscribed = @channel.subscribers.length
        
        render :show
    end

end
