#!/bin/bash

cd /app/
echo "Apply database migrations"
python manage.py migrate --noinput

echo "createsuperuser"
python manage.py createsuperuser --noinput \
      --username $DJANGO_SUPERUSER_USERNAME \
      --email $DJANGO_SUPERUSER_EMAIL

echo "Starting django app"

gunicorn graphene_auth.wsgi:application --bind 0.0.0.0:8000
