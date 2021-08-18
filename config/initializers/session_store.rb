if Rails.env == "production"
    Rails.application.config.session_store :cookie_store, key: "_gear_depot", domain: "INSERT_DOMAIN_NAME"
else 
    Rails.application.config.session_store :cookie_store, key: "_gear_depot"
end