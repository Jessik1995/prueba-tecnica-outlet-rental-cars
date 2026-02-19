import { AppDispatch } from '../index'
import { setLoading, setError, setResults } from './searchSlice'
import { fetchVehicles as fetchVehiclesService } from '@/services/vehicles.service'

export const fetchVehicles = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true))
    dispatch(setError(null))

    const vehicles = await fetchVehiclesService()
    dispatch(setResults(vehicles))
  } catch {
    dispatch(setError('Error al cargar los vehículos'))
  } finally {
    dispatch(setLoading(false))
  }
}
