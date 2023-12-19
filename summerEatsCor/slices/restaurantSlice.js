import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurant: {
    id: null,
    title: null,
    imgUrl: null,
    rating: null,
    genre: null,
    address: null, 
    description: null,
    dishes: null,
    lng: null,
    lat: null
  }
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setResturant: (state, action) => {
      state.restaurant = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setResturant } = restaurantSlice.actions

export const selectResturant = state=> state.restaurant.restaurant;

export default restaurantSlice.reducer