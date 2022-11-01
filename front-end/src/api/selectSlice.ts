import { createSlice } from "@reduxjs/toolkit";

export const selectSlice = createSlice({
    name: "select",
    initialState: () => {
        const localArray  = localStorage.getItem('selectionArray')
        let array: string[] = []
        if(localArray){
            return {
                selectionArray : JSON.parse(localArray)
            }
        }else
        return {
            selectionArray:array
        };
    },
    reducers: {
        addOneItem(state, action) {
            let name = action.payload.name
            if (state.selectionArray.indexOf(name) === -1) state.selectionArray.push(name)
            localStorage.setItem('selectionArray', JSON.stringify(state.selectionArray))
        },
        deleteOneItem(state, action) {
            let name = action.payload.name
            state.selectionArray.map(
                (item: any , i: any) => {
                    if (item === name.item) {
                        state.selectionArray.splice(i, 1)
                    }
                }
            )
            localStorage.setItem('selectionArray', JSON.stringify(state.selectionArray))
        },
        deleteAllItem(state, action) {
            let array: string[] = []
            state.selectionArray = array
            localStorage.removeItem('selectionArray')
        }

    }

})

export const { addOneItem, deleteOneItem, deleteAllItem } = selectSlice.actions