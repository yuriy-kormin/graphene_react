from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    first_name = None
    last_name = None
    last_login = None
    date_joined = None
    groups = None
    user_permissions = None

    def __str__(self):
        return self.username
