// import { createClient, dedupExchange, fetchExchange } from 'urql'
// import { userAPI } from 'services/graphql'
// import { authExchange } from '@urql/exchange-auth'
// import { makeOperation } from '@urql/core'
//
// import { url } from 'constants/index'
// import { general } from 'utils'
//
// const urqlClient = (getToken?, setToken?) =>
//   createClient({
//     url: url.EndpointURL.GRAPHQL_URL,
//     requestPolicy: 'cache-and-network',
//     exchanges: [
//       dedupExchange,
//       authExchange({
//         getAuth: async ({ authState, mutate }) => {
//           // init state
//           if (!authState) {
//             let token = getToken as string
//             let refreshToken = general.auth.getRefreshToken()
//             if (refreshToken) {
//               return { token, refreshToken }
//             }
//
//             return null
//           }
//
//           // Add logic refresh token in here for first initial
//           const result = await mutate(
//             userAPI.mutation.refreshTokenMutation,
//             {
//               data: { refreshToken: general.auth.getRefreshToken(), uId: '' },
//             },
//             {
//               fetchOptions: {
//                 headers: {
//                   Authorization: `Bearer ${general.auth.getRefreshToken()}`,
//                 },
//               },
//             },
//           )
//
//           if (result.data?.refreshToken) {
//             setToken(result.data.refreshToken.token)
//
//             return {
//               token: result.data.refreshToken.token,
//               refreshToken: result.data.refreshToken.token.refreshToken,
//             }
//           }
//
//           // Logout
//           general.auth.logout()
//
//           return null
//         },
//         addAuthToOperation: ({ authState, operation }) => {
//           let auth = authState as { token: string; refreshToken: string }
//
//           // the token isn't in the auth state, return the operation without changes
//           if (!auth || !auth.token) {
//             return operation
//           }
//           // fetchOptions can be a function (See Client API) but you can simplify this based on usage
//           const fetchOptions =
//             typeof operation.context.fetchOptions === 'function'
//               ? operation.context.fetchOptions()
//               : operation.context.fetchOptions || {}
//
//           return makeOperation(operation.kind, operation, {
//             ...operation.context,
//             fetchOptions: {
//               ...fetchOptions,
//               headers: {
//                 ...fetchOptions.headers,
//                 Authorization: `Bearer ${auth.token}`,
//               },
//             },
//           })
//         },
//         didAuthError: ({ error }) => {
//           // check if the error was an auth error (this can be implemented in various ways, e.g. 401 or a special error code)
//           return error.graphQLErrors.some((e) => {
//             return e.originalError?.message === 'Unauthorized'
//           })
//         },
//         willAuthError: ({ authState, operation }) => {
//           if (!authState) {
//             // Detect our login mutation and let this operation through:
//             return !(
//               operation.kind === 'mutation' &&
//               // Here we find any mutation definition with the "login" field
//               operation.query.definitions.some((definition) => {
//                 return (
//                   definition.kind === 'OperationDefinition' &&
//                   definition.selectionSet.selections.some((node) => {
//                     // The field name is just an example, since signup may also be an exception
//                     return node.kind === 'Field' && node.name.value === 'login'
//                   })
//                 )
//               })
//             )
//           } else if (getToken !== '') {
//             let resutlFrontToken = general.jwt.decodeToken(getToken) as {
//               sub: string
//               iat: number
//               exp: number
//             }
//             return resutlFrontToken.exp < Date.now() / 1000
//           }
//           return false
//         },
//       }),
//       fetchExchange,
//     ],
//   })
//
// export default urqlClient
