import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    regionsData1: [],
    regionsData2: [],
    regionsData3: [],
    regionsData4: [],
}

export const regionSlice = createSlice({
  name: 'toolkitRegion',
  initialState,  
  reducers: {
        changeRegionsData1: (state, action) => {
            state.regionsData1 = action.payload
        },
        changeRegionsData2: (state, action) => {
            state.regionsData2 = action.payload
        },
        changeRegionsData3: (state, action) => {
            state.regionsData3 = action.payload
        },
        changeRegionsData4: (state, action) => {
            state.regionsData4 = action.payload
        },
    }
})

export const { changeRegionsData1, 
               changeRegionsData2, 
               changeRegionsData3, 
               changeRegionsData4 
            } = regionSlice.actions

export default regionSlice.reducer
