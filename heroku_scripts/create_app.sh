#!/usr/bin/env bash#

# Create heroku app, with app name provided as param
# eg. ./provision_heroku_app.sh carrotbag-1

# Args:
# $1 = Heroku appname

echo "### Heroku App name: $1 ###"
heroku create $1  --org carrotbag
heroku git:remote -a $1
