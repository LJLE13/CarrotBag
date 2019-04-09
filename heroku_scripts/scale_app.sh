#!/usr/bin/env bash

# Args:
# $1 = Heroku service name
# $2 = Int value

heroku ps:scale $1=$2