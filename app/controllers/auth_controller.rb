class AuthController < ApplicationController
    def auth
      render json: { status: "It's working" }
    end
  end