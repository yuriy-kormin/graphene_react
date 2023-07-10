## Graphene with react

It's my attempt to build connection between backend building on Django with 
graphql Graphene library and React backend, which using [urql](https://formidable.com/open-source/urql/) library for 
process graphql requests.

#### **!!! ATTENTION !!!**
remove CORS_ORIGIN_ALLOW_ALL = True in settings - it's not secure

add following to settings.py

    CORS_ALLOWED_ORIGINS = [
    "www.example.com",
    "http://127.0.0.1:8000",
    ...
    ]