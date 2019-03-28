#!/usr/bin/env bash#

# Create heroku app, with app name provided as a param
# eg. ./provision_heroku_app.sh carrotbag-1
heroku create $@
heroku git:remote -a $@

# Push to master branch to heroku
sh ./push_master.sh