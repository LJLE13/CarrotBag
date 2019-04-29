#!/usr/bin/env bash

# Will call other Heroku scripts to fully deploy to a Heroku Environment.
# Doesn't matter if the app is already created or not.

# Args:
# $1 = Heroku appname
# $2 = Code branch to be pushed

sh ./delete_app.sh $1
sh ./create_app.sh $1
sh ./push_to_heroku.sh $2

# Scales Dynos of App: 1 = on, 0 = off
sh ./scale_app.sh web 1
