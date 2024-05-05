import {  createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
    name: "cart",
    initialState: {
        total: 0,
        Cartlistitem: []
    },
    reducers: {
        add(state,action) { 
            console.log(action.payload)
           const  Updatecartlist = state.Cartlistitem.concat(action.payload)
           const total = (+state.total) + (+action.payload.price)
           console.log(Updatecartlist)
           return {...state , Cartlistitem : Updatecartlist,total:total}

        },
        remove(state, action) {
            const Updatedremovelist = state.Cartlistitem.filter((lsit)=> lsit.id !== action.payload.id)
            console.log(Updatedremovelist)
            const total = (+state.total) - (+action.payload.price)
            return {...state,Cartlistitem:Updatedremovelist,total:total}
        }

    }
})

export const {add,remove} = Cartslice.actions
export const cartReducer = Cartslice.reducer