#!/usr/bin/env bash

# Args:
# $1 = Code Branch

echo "### Pushing branch $1 to Heroku ###"
git push heroku $1:master
