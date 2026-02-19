import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Vehicle } from '@/types/vehicles'

interface SearchState {
  results: Vehicle[]
  selected: Vehicle | null
  loading: boolean
  error: string | null
}

const initialState: SearchState = {
  results: [],
  selected: null,
  loading: false,
  error: null,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
    setResults(state, action: PayloadAction<Vehicle[]>) {
      state.results = action.payload
    },
    selectVehicle(state, action: PayloadAction<Vehicle>) {
      state.selected = action.payload
    },
  },
})

export const {
  setLoading,
  setError,
  setResults,
  selectVehicle,
} = searchSlice.actions

export default searchSlice.reducer
