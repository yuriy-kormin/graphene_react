[![Django](https://img.shields.io/badge/-Django-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![Graphene](https://img.shields.io/badge/-Graphene-E10098?style=for-the-badge&logo=graphql&logoColor=white)](https://graphene-python.org/)
[![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Bootstrap](https://img.shields.io/badge/-Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![REDUX](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org)
[![urql](https://img.shields.io/badge/-urql-blue?style=for-the-badge&logo=urql&logoColor=white)](https://formidable.com/open-source/urql/)


## Django Graphene + React Bootstrap

[![React testing](https://github.com/yuriy-kormin/graphene_react/actions/workflows/front_tests.yml/badge.svg)](https://github.com/yuriy-kormin/graphene_react/actions/workflows/front_tests.yml)
[![React Codecov](https://codecov.io/gh/yuriy-kormin/graphene_react/branch/master/graph/badge.svg?token=O5TX5CE9XH)](https://codecov.io/gh/yuriy-kormin/graphene_react)
[![Docker Build](https://github.com/yuriy-kormin/graphene_react/actions/workflows/docker-build-test.yml/badge.svg)](https://github.com/yuriy-kormin/graphene_react/actions/workflows/docker-build-test.yml)


# Overview

The project combines the backend capabilities of Django and Graphene for 
processing requests with a React frontend to provide a user-friendly 
interface. I also use urql library for process user authentification 
<img width="568" alt="Screenshot 2023-08-14 at 16 36 24" src="https://github.com/yuriy-kormin/graphene_react/assets/96548294/fdf11a61-5116-4176-b8d0-486133efe2e1">

### Backend

The backend of this project is built using Django. GraphQL queries and
mutations are handled using the Graphene library, allowing for efficient 
and flexible data retrieval and 
manipulation.

The user's authentication status is maintained using JWT tokens,
and the refresh token is stored in the local storage to allow seamless user
experience even after page reloads.

### Frontend

The frontend of the application is developed using React, a popular JavaScript 
library for building user interfaces. The user interface is styled using 
Bootstrap, providing a responsive and visually appealing design.

The frontend primarily consists of a login page that features a floating popup
error mechanism to provide real-time feedback to users during the login process.
Upon successful login, users are presented with a list of registered users 
within the system.

### Data Exchange 

For handling frontend requests to the backend, the project uses the urql 
library. Custom authentication processes have been implemented to ensure secure 
data retrieval and processing. GraphQL queries and mutations are used to 
communicate between the frontend and backend.

## ATTENTION

In the initial implementation, this project employs local storage for token 
storage. However, this approach is not secure. To enhance security, 
I am in the process of transitioning to the use of cryptographically signed 
cookies for token management.
Consider this [article](https://www.rdegges.com/2018/please-stop-using-local-storage/).
