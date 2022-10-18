import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../model/user'

const server = process.env.SERVER_END_POINT
const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: server+'api/user/' }),
    endpoints: (build) => ({
        registerUser: build.mutation ({
   
            query: (user : User) => ({
              url: `register`,
              method: 'post',
              body:{user}
            })
    })
  })

})

export const{
    useRegisterUserMutation
} = userApi;

export default userApi;