import { createSlice } from '@reduxjs/toolkit';

import { leftRadioGroup, rightRadioGroup, unitRadioGroup } from '../containers/radioGroups';

const initialState = {
    leftRadioGroup: leftRadioGroup(),
    rightRadioGroup: rightRadioGroup(),
    unitRadioGroup: unitRadioGroup(),

    selectedRadioLeft: leftRadioGroup()[0].name,
    selectedRadioRight: rightRadioGroup()[3].name,
    selectedRadioUnit: unitRadioGroup()[0].name,
}

export const cropSlice = createSlice({
  name: 'toolkit',
  initialState,  
  reducers: {
        changeRadioLeft: (state, action) => {
            state.selectedRadioLeft = action.payload
        },
        
        changeRadioRight: (state, action) => {
            state.selectedRadioRight = action.payload
        },

        changeRadioUnit: (state, action) => {
            state.selectedRadioUnit = action.payload
        }
    }
})

export const { changeRadioLeft, changeRadioRight, changeRadioUnit } = cropSlice.actions

export default cropSlice.reducer

 