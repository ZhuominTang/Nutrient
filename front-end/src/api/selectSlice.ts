import { createSlice } from "@reduxjs/toolkit";

export const selectSlice = createSlice({
    name: "select",
    initialState: () => {
        let array: string[] = []
        return {
            selectionArray: array
        };
    },
    reducers: {
        addOneItem(state, action) {
            let name = action.payload.name
            if (state.selectionArray.indexOf(name) === -1) state.selectionArray.push(name)
        },
        deleteOneItem(state, action) {
            let name = action.payload.name
            state.selectionArray.map(
                (item, i) => {
                    if (item === name) {
                        state.selectionArray.splice(i, 1)
                    }
                }
            )
        },
        deleteAllItem(state, action) {
            let array: string[] = []
            state.selectionArray = array
        }

    }

})

export const { addOneItem, deleteOneItem, deleteAllItem } = selectSlice.actions