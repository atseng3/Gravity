source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.0.2'

# Use sqlite3 as the database for Active Record
gem 'pg'

# use new relic
gem 'newrelic_rpm'

# use devise for auth
gem 'devise'

# Use bootstrap css
gem 'bootstrap-sass', '~> 3.2.0'

# Use SCSS for stylesheets
gem 'sass-rails', '>= 3.2'

# use autoprefixer with bootstrap to add browser vendor prefixes automatically
# https://github.com/ai/autoprefixer-rails
gem 'autoprefixer-rails'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# use ejs templates for backbone
gem 'ejs'

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 1.2'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

group :development do
  # Run 'annotate' in Terminal to add helpful comments to models
  gem 'annotate'
  # These two give you a great error handling page.
  # But make sure to never use them in production!
  gem 'better_errors'
  gem 'meta_request'
  gem 'binding_of_caller'
  # Gotta have debugger.
  gem 'debugger'
  # pry > irb
  gem 'pry-rails'
  # reduce excessive logging of CSS/JS files
  gem 'quiet_assets'
  # sending emails
  gem 'letter_opener'
end

group :production do 
  gem 'rails_12factor', '0.0.2'
end

# use whenever gem to schedule cron tasks
gem 'whenever'

# Use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.1.2'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]
