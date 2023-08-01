#!/bin/bash

cd /app/
echo "Apply database migrations"
python manage.py migrate --noinput

echo "Starting django app"

gunicorn graphene_auth.wsgi:application --bind 0.0.0.0:8000
