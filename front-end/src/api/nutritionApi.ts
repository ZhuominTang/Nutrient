import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

const server = process.env.REACT_APP_SERVER_END_POINT
const nutritionApi = createApi({
  reducerPath: 'nutritionApi',
  baseQuery: fetchBaseQuery(
    {
      baseUrl: server + 'api/nutrition/',
      prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token
        if (token) {
          headers.set('Authorization', 'Bearer ' + token)

        }

        return headers
      },
      mode: "cors"
    },
  ),
  endpoints: (build) => ({
    searchNutrition: build.query({

      query(data) {
        const { keyword, pageNo, pageSize } = data
        return {
          url: '/search/' + keyword + "/" + pageNo + "/" + pageSize,
          method: 'get',
          mode: 'cors',
        }
      }
    }),
    downloadFile: build.mutation({

      query: (data) => ({
        url: `export`,
        method: 'post',
        mode: "cors",
        body:data,
      responseHandler: async (response) => {
        let blob = await response.blob()
        var url = window.URL || window.webkitURL;
        var blobCSV = url.createObjectURL(blob);
         const filename = response.headers.get("content-disposition")
         let name = filename?.split("filename=")[1]
         let downloadElement = document.createElement('a')
         downloadElement.href = blobCSV ;
         downloadElement.target = '_blank'
         downloadElement.download = `${name}`;
         downloadElement.click();
         return { data: null }
      },
        cache: "no-cache",
      })

    }),



  }
  )

}

)



export const {
  useSearchNutritionQuery,
  useDownloadFileMutation
} = nutritionApi;

export default nutritionApi;

