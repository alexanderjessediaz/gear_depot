Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
        origins "http://localhost:3000"
        resource "*", headers: :any, methods:[:get,:post,:put,:patch,:delete,:options,:head], credentials: true
    end

    # add the code above with domain address when ready to deploy
end