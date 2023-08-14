#!/bin/sh

if [ -n "$ALLOWED_HOSTS" ]; then
  DOMAIN=$(echo "$ALLOWED_HOSTS" | cut -d',' -f1)
  REACT_APP_BACKEND_URL="http://${DOMAIN}/graphql"
  echo "Setting REACT_APP_BACKEND_URL to $REACT_APP_BACKEND_URL"
  export REACT_APP_BACKEND_URL
else
  echo "ALLOWED_HOSTS environment variable is not set"
fi

cd /app/

echo "npm run build"
npm run build
