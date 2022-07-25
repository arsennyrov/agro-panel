import { createSlice } from '@reduxjs/toolkit';

// import { leftRadioGroup, rightRadioGroup, unitRadioGroup } from '../containers/radioGroups';

const initialState = {
    fullData1: [],
    fullData2: [],
    fullData3: [],
    fullData4: [],
    fullFields: [],
    loading: true,
}

export const fullSlice = createSlice({
  name: 'toolkitFull',
  initialState,  
  reducers: {
        saveFullData1: (state, action) => {
            state.fullData1 = action.payload
        },
        saveFullData2: (state, action) => {
            state.fullData2 = action.payload
        },
        saveFullData3: (state, action) => {
            state.fullData3 = action.payload
        },
        saveFullData4: (state, action) => {
            state.fullData4 = action.payload
        },
        saveFullFields: (state, action) => {
            state.fullFields = action.payload
            // console.log('=====================================state.fullFields', state.fullFields);
        },
        changeLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const { saveFullData1,
               saveFullData2,
               saveFullData3,
               saveFullData4,
               saveFullFields,
               changeLoading } = fullSlice.actions

export default fullSlice.reducer

