import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface BasketState {
  items: Item[]
}

export interface Item {
  name: string
  quant: number
  bought: boolean
}

export interface Index {
  index: number
}

const initialState: BasketState = {
  items: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items = [...state.items, action.payload]
    },
    buyItem: (state, action: PayloadAction<number>) => {
      state.items[action.payload].bought = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, buyItem } = basketSlice.actions

export default basketSlice.reducer