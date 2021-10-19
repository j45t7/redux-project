import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
  name: 'ui',
  initialState: { isCartVisible: false },
  reducers: {
    toggle: (state) => {
      state.isCartVisible = !state.isCartVisible
    },
  },
})

export const { toggle } = uiSlice.actions

export default uiSlice.reducer
