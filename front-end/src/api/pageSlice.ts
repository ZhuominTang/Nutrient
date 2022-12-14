import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice(
    {
        name: "page",
        initialState: () => {
                return {
                    pageNo:1
                }                
            

        },
        reducers: {
            nextPage(state, action) {
                state.pageNo = state.pageNo+1
            },
            previousPage (state, action) {
                state.pageNo = state.pageNo-1
            },
            initPage(state,action){
                state.pageNo=1
            },
            setPage(state,action){
                state.pageNo=action.payload.page
            }
        }
    }
)
export const { nextPage , previousPage, initPage,setPage } = pageSlice.actions