import graphene as graphene
from graphene_auth.users.schema import AuthMutation, Query as UserQuery



class Query(
    UserQuery,
):
    pass


class Mutation(
    AuthMutation
):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
