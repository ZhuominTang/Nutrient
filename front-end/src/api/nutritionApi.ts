import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

const server = process.env.REACT_APP_SERVER_END_POINT
const nutritionApi = createApi({
  reducerPath: 'nutritionApi',
  baseQuery: fetchBaseQuery(
    {
      baseUrl: server + 'api/nutrition/',
      prepareHeaders: (headers,{getState}) => {
        const token = (getState() as RootState).auth.token     
        if(token){
          headers.set('Authorization','Bearer '+token)
          
        }

        return headers
      },
      mode:"cors"
    },
  ),
  endpoints: (build) => ({
    searchNutrition: build.query({

      query(data){
        const {keyword,pageNo,pageSize} = data
       return  {
        url: '/search/'+keyword+"/"+pageNo+"/"+pageSize,
        method: 'get',
        mode: 'cors'
      }}
    })
  })

})

export const {
  useSearchNutritionQuery
} = nutritionApi;

export default nutritionApi;