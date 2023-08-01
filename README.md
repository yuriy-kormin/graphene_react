## Graphene with react

[![React testing](https://github.com/yuriy-kormin/graphene_react/actions/workflows/front_tests.yml/badge.svg)](https://github.com/yuriy-kormin/graphene_react/actions/workflows/front_tests.yml)
[![React Codecov](https://codecov.io/gh/yuriy-kormin/graphene_react/branch/master/graph/badge.svg?token=O5TX5CE9XH)](https://codecov.io/gh/yuriy-kormin/graphene_react)


This repository aims to establish a connection between a 
Django backend using the Graphene library for GraphQL and 
a React frontend using the [urql](https://formidable.com/open-source/urql/) library for handling GraphQL 
requests.


#### **!!! ATTENTION !!!**
To properly configure CORS:
- remove this line in settings.py

```
#settings.py 

    CORS_ORIGIN_ALLOW_ALL = True
```
- add the following lines to your settings.py file:
```
#settings.py 

   CORS_ALLOWED_ORIGINS = [
   "www.example.com",
   "http://127.0.0.1:8000",
   ...
   ]
```
Please note that this application currently uses
localStorage to store tokens. It's important to be
aware that using localStorage for token storage is 
considered insecure. For more secure token management,
consider alternative approaches such as using HTTP-only 
cookies or server-side token storage. Consider this [article](https://www.rdegges.com/2018/please-stop-using-local-storage/).
