#!/bin/sh

# Making log dir with files
nginx_log_dir="/var/log/nginx"
access_log_file="access.log"
error_log_file="error.log"

# Check if the directory exists
if [ ! -d "$nginx_log_dir" ]; then
  # Create the directory
  mkdir -p "$nginx_log_dir"
  echo "Created directory $nginx_log_dir"
  # Create access log file
  touch "$nginx_log_dir/$access_log_file"
  chown root:root "$nginx_log_dir/$access_log_file"
  echo "Created $access_log_file with root:root ownership"

  # Create error log file
  touch "$nginx_log_dir/$error_log_file"
  chown root:root "$nginx_log_dir/$error_log_file"
  echo "Created $error_log_file with root:root ownership"
else
  echo "Directory $nginx_log_dir already exists"
fi

# Run daemon
nginx -g "daemon off;"