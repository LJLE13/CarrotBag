#!/usr/bin/env bash

# Args:
# $1 = Heroku appname

echo "### Destroying Heroku app: $1 ###"
heroku apps:destroy $1 --confirm $1
